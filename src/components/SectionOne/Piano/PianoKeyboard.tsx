import React, { useEffect, useRef, useState } from "react";
import * as Tone from "tone";
import { Center, Float, PresentationControls } from "@react-three/drei";
import ModelKey from "./ModelKey";
import notes from '../../../utils/notes'

const PianoKeyboard: React.FC = () => {
  const synthRef = useRef<Tone.Synth | null>(null);
  const [activeKey, setActiveKey] = useState<string | null>(null);

  useEffect(() => {
    synthRef.current = new Tone.Synth().toDestination();
    return () => {
      synthRef.current?.dispose();
    };
  }, []);

  const playNote = (note: string) => {
    synthRef.current?.triggerAttackRelease(note, "8n");
    setActiveKey(note);
    setTimeout(() => setActiveKey(null), 300);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    const keyPressed = e.key.toUpperCase();
    const match = notes.find((n) => n.key === keyPressed);
    if (match) playNote(match.note);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <PresentationControls
        global
        polar={[-0.5, 0.9]}
        azimuth={[-1, 1]}
        snap
        speed={1.4}
        zoom={2}
      >
        <Float rotationIntensity={0.7}>
          <Center>
            {notes.map((n, i) => (
              <ModelKey
                key={n.note}
                note={n.note}
                keyLabel={n.key}
                isBlack={n.isBlack}
                active={activeKey === n.note}
                onClick={playNote}
                position={[i * 0.9, -0.8, 4.9]}
              />
            ))}
          </Center>
        </Float>
      </PresentationControls>
    </>
  );
};

export default PianoKeyboard;
