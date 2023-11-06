import React from "react";
import * as Tone from "tone";
interface ExperienceProps {}

const Experience = (props: ExperienceProps) => {
  const synth = new Tone.Synth().toDestination();
  console.log(synth);

  return <p>test</p>;
};

export default Experience;
