import React, { useRef, useEffect, useMemo } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import * as THREE from 'three'

type FoxProps = React.JSX.IntrinsicElements['group'] & {
  animationName?: string
  crossFadeDurationMs?: number
}

export const Fox: React.FC<FoxProps> = ({ animationName, crossFadeDurationMs = 300, ...groupProps }) => {
  const group = useRef<THREE.Group>(null)
  const { nodes, materials, animations } = useGLTF('/Fox.glb')
  const { actions, mixer } = useAnimations(animations, group)
  const previousActionNameRef = useRef<string | null>(null)

  const availableAnimationNames = useMemo<string[]>(() => {
    return Object.keys(actions)
  }, [actions])

  useEffect(() => {
    if (availableAnimationNames.length === 0) return
    const selectedName = animationName && availableAnimationNames.includes(animationName)
      ? animationName
      : availableAnimationNames[0]

    const fadeSeconds = Math.max(crossFadeDurationMs, 0) / 1000
    const nextAction = actions[selectedName as keyof typeof actions]

    if (!nextAction) return

    const previousName = previousActionNameRef.current
    const previousAction = previousName ? actions[previousName as keyof typeof actions] : undefined

    nextAction.reset().setLoop(THREE.LoopRepeat, Infinity)

    if (previousAction && previousAction !== nextAction) {
      // Align relative time to avoid positional popping between clips
      const prevClip = previousAction.getClip()
      const nextClip = nextAction.getClip()
      if (prevClip && nextClip && prevClip.duration > 0 && nextClip.duration > 0) {
        const t = previousAction.time % prevClip.duration
        nextAction.time = (t / prevClip.duration) * nextClip.duration
      }
      nextAction.crossFadeFrom(previousAction, fadeSeconds, true).play()
    } else {
      nextAction.fadeIn(fadeSeconds).play()
    }

    // Gently fade out all other actions
    Object.entries(actions).forEach(([name, action]) => {
      if (!action || name === selectedName) return
      action.fadeOut(fadeSeconds)
    })

    previousActionNameRef.current = selectedName

    return () => {
      Object.values(actions).forEach(action => action?.stop())
      mixer.stopAllAction()
    }
  }, [animationName, actions, mixer, availableAnimationNames, crossFadeDurationMs])

  useEffect(() => {
    // Helpful once: list available clips in console for discovery
    if (availableAnimationNames.length > 0) {
      console.log('Fox available animations:', availableAnimationNames)
    }
  }, [availableAnimationNames])

  return (
    <group ref={group} {...groupProps} dispose={null}>
      <group>
        <group name="root">
          <primitive object={nodes._rootJoint} />
        </group>
        <skinnedMesh
          name="fox"
          geometry={(nodes.fox as THREE.SkinnedMesh).geometry}
          material={materials.fox_material as THREE.Material}
          skeleton={(nodes.fox as THREE.SkinnedMesh).skeleton}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/Fox.glb')