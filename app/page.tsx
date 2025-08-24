"use client";

import Link from "next/link";
import Image from "next/image";
import { Environment } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Fox } from "@/components/Fox";
import React from "react";
import * as THREE from "three";
import Footer from "@/components/footer";
import Header from "@/components/header";

// Persist across client-side navigations; resets only on hard refresh
let hasIntroPlayed = false;

type MovementPhase = "runIn" | "survey" | "walkOut" | "done";

const FoxActor: React.FC<{ onDone?: () => void }> = ({ onDone }) => {
  const actorRef = React.useRef<THREE.Group>(null);
  const [phase, setPhase] = React.useState<MovementPhase>("runIn");
  const [currentAnimationName, setCurrentAnimationName] = React.useState<string>("Run");
  const hasCalledOnDoneRef = React.useRef<boolean>(false);

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
    <div className="h-[100vh] w-[100vw] relative">
      <Canvas camera={{ position: [0.6, 0.9, 5.2], fov: 50 }}>
        <Environment preset="studio"/>
        {!introFinished && (
          <FoxActor onDone={() => { setIntroFinished(true); hasIntroPlayed = true; }} />
        )}
      </Canvas>
      <div
        className={`pointer-events-auto absolute inset-0 flex items-center justify-center transition-opacity duration-700 ${introFinished ? 'opacity-100' : 'opacity-0'}`}
        aria-live="polite"
      >
        <div className="text-center absolute top-12 left-1/2 transform -translate-x-1/2">
            <Header />
          <div className="flex flex-col items-center gap-4 mt-16">
            <Image src="/tyler_headshot.jpeg" alt="tyler chen" width={100} height={100} className="rounded-full"/>
            <div className="text-center">
              <h1 className="text-2xl font-semibold text-gray-900 mb-2">Tyler Chen</h1>
              <p className="text-gray-600">prev CTO & Cofounder @ Caucus (YC X25).</p>
            </div>
          </div>
        </div>
        <div className="text-center absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <Footer />
        </div>
      </div>
    </div>
  );
}
