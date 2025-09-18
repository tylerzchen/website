"use client";

import Image from "next/image";
import { Environment } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Fox } from "@/components/Fox";
import React from "react";
import * as THREE from "three";

// Persist across client-side navigations; resets only on hard refresh
let hasIntroPlayed = false;

type MovementPhase = "runIn" | "survey" | "walkOut" | "done";

const FoxActor: React.FC<{ onDone?: () => void }> = ({ onDone }) => {
  const actorRef = React.useRef<THREE.Group>(null);
  const [phase, setPhase] = React.useState<MovementPhase>("runIn");
  const [currentAnimationName, setCurrentAnimationName] = React.useState<string>("Run");
  const hasCalledOnDoneRef = React.useRef<boolean>(false);

  const startX = -10; // further left to avoid initial visibility
  const startY = -1;
  const centerStopX = 0.0; // stop near true center
  const endX = 9; // a bit further right before reset
  const runSpeedUnitsPerSecond = 3;
  const walkSpeedUnitsPerSecond = 1.5;
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
    if (phase !== "done") return;
    if (hasCalledOnDoneRef.current) return;
    hasCalledOnDoneRef.current = true;
    onDone?.();
  }, [phase, onDone]);

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
  const [introFinished, setIntroFinished] = React.useState<boolean>(hasIntroPlayed);
  return (
    <div className="min-h-screen w-full relative overflow-x-hidden">
      <div className="w-full flex flex-col items-center">
        <div className="w-full">
          <main className="max-w-3xl mx-auto px-6 pt-20 md:pt-24">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 text-left">Tyler Chen</h1>
            {/*
            <Image
              src="/tyler_headshot.jpeg"
              alt="Tyler Chen"
              width={160}
              height={160}
              className="mt-6 h-20 w-20 md:h-24 md:w-24 rounded-full ring-1 ring-black/5 shadow-sm"
              priority
            />
            */}
            <p className="mt-4 text-base md:text-lg leading-relaxed text-gray-700 text-left">
              Building pragmatic, scalable software. Previously CTO & cofounder at Caucus (YC X25).
              Studying Physics & Computer Science at Yale. Also sometimes play jazz piano and
              stay active. Love to cook and hike.
            </p>
            {introFinished && (
              <figure className="mt-10 mb-10 flex flex-col items-center">
                <Image
                  src="/mydog.jpg"
                  alt="My Dog"
                  width={320}
                  height={320}
                  priority
                />
                <figcaption className="mt-2 text-sm text-gray-600">a photo of my dog Rose</figcaption>
              </figure>
            )}
          </main>
        </div>

        {/* Animation strip: show only during intro */}
        {!introFinished && (
          <div className="w-full h-40 md:h-48 lg:h-56 relative mt-6 mb-8 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 8], fov: 15 }}>
              <Environment preset="studio"/>
              <FoxActor onDone={() => { setIntroFinished(true); hasIntroPlayed = true; }} />
            </Canvas>
            <div className="pointer-events-auto absolute top-2 right-4 z-10">
              <button
                onClick={() => { setIntroFinished(true); hasIntroPlayed = true; }}
                className="rounded-full border border-gray-300 bg-white/70 px-3 py-1 text-sm text-gray-700 backdrop-blur hover:bg-white transition"
                aria-label="Skip intro"
              >
                skip
              </button>
            </div>
          </div>
        )}

        
      </div>
    </div>
  );
}