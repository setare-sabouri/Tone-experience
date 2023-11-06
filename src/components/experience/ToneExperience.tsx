import React, { useEffect, useState, useRef } from "react";
import * as Tone from "tone";

interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
  const [playing, setPlaying] = useState(false);
  const synthRef = useRef<Tone.Synth | null>(null);

  useEffect(() => {
    synthRef.current = new Tone.Synth().toDestination();
    return () => {
      if (synthRef.current) {
        synthRef.current.dispose();
      }
    };
  }, []);

  const playNote = () => {
    if (!playing && synthRef.current) {
      synthRef.current.triggerAttackRelease("C4", "8n");
    }
  };

  const handleButtonClick = () => {
    setPlaying(!playing);
    playNote();
  };

  return (
    <>
      <button onClick={handleButtonClick}>{"Play"}</button>
    </>
  );
};

export default Experience;
