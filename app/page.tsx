"use client";

import { Environment } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Fox } from "@/components/Fox";
import React from "react";
import * as THREE from "three";

type MovementPhase = "runIn" | "survey" | "walkOut" | "done";

const FoxActor: React.FC = () => {
  const actorRef = React.useRef<THREE.Group>(null);
  const [phase, setPhase] = React.useState<MovementPhase>("runIn");
  const [currentAnimationName, setCurrentAnimationName] = React.useState<string>("Run");

  const startX = -5; // further left to avoid initial visibility
  const startY = -0.5;
  const centerStopX = 0.0; // stop near true center
  const endX = 5.2; // a bit further right before reset
  const runSpeedUnitsPerSecond = 2.6;
  const walkSpeedUnitsPerSecond = 1.15;
  const surveyDurationMs = 3500;

  React.useEffect(() => {
    if (!actorRef.current) return;
    actorRef.current.position.set(startX, startY, 0);
    actorRef.current.rotation.set(0, Math.PI / 2, 0); // face +X (to the right)
  }, [startX, startY]);

  React.useEffect(() => {
    if (phase === "runIn") setCurrentAnimationName("Run");
    if (phase === "survey") setCurrentAnimationName("Survey");
    if (phase === "walkOut") setCurrentAnimationName("Walk");
  }, [phase]);

  React.useEffect(() => {
    if (phase !== "survey") return;
    const handle = setTimeout(() => setPhase("walkOut"), surveyDurationMs);
    return () => clearTimeout(handle);
  }, [phase]);

  useFrame((_, delta) => {
    const group = actorRef.current;
    if (!group) return;

    if (phase === "runIn") {
      group.position.x += runSpeedUnitsPerSecond * delta;
      if (group.position.x >= centerStopX) {
        group.position.x = centerStopX;
        setPhase("survey");
      }
    } else if (phase === "walkOut") {
      group.position.x += walkSpeedUnitsPerSecond * delta;
      if (group.position.x > endX) {
        setPhase("done");
      }
    }
  });

  if (phase === "done") return null;

  return (
    <group ref={actorRef} position={[startX, startY, 0]}>
      <Fox animationName={currentAnimationName} crossFadeDurationMs={600} scale={0.015} />
    </group>
  );
};

export default function Home() {
  return (
    <div className="h-[100vh] w-[100vw] relative">
      <Canvas camera={{ position: [0.6, 0.9, 5.2], fov: 50 }}>
        <Environment preset="studio"/>
        <FoxActor />
      </Canvas>
    </div>
  );
}
