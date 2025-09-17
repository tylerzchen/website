"use client";

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
    <div className="h-[100vh] w-[100vw] relative">
      <div className="absolute inset-0 flex flex-col items-center">
        <div className="text-center mt-12">
          <Header />
          <div className="flex flex-col items-center gap-5 md:gap-6 mt-14 md:mt-16">
            <Image src="/tyler_headshot.jpeg" alt="Tyler Chen" width={160} height={160} className="h-20 w-20 md:h-24 md:w-24 rounded-full ring-1 ring-black/5 shadow-sm" priority />
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">Tyler Chen</h1>
              <p className="mt-3 max-w-2xl mx-auto text-base md:text-lg leading-relaxed text-gray-700">
                Building pragmatic, scalable software. Previously CTO & cofounder at Caucus (YC X25).
                Studying Physics & Computer Science at Yale. Also sometimes play jazz piano and
                stay active. Love to cook and hike.
              </p>
            </div>
          </div>
        </div>

        {/* Animation strip: full-width canvas between text and footer */}
        <div className="w-screen h-40 md:h-48 lg:h-56 relative mt-8 mb-8 pointer-events-none">
          <Canvas camera={{ position: [0, 0, 8], fov: 15 }}>
            <Environment preset="studio"/>
            {!introFinished && (
              <FoxActor onDone={() => { setIntroFinished(true); hasIntroPlayed = true; }} />
            )}
          </Canvas>
          {!introFinished && (
            <div className="pointer-events-auto absolute top-2 right-4 z-10">
              <button
                onClick={() => { setIntroFinished(true); hasIntroPlayed = true; }}
                className="rounded-full border border-gray-300 bg-white/70 px-3 py-1 text-sm text-gray-700 backdrop-blur hover:bg-white transition"
                aria-label="Skip intro"
              >
                skip
              </button>
            </div>
          )}
        </div>

        <div className="text-center mt-auto mb-12">
          <Footer />
        </div>
      </div>
    </div>
  );
}