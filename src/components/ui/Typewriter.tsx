"use client";

import { TypeAnimation } from "react-type-animation";

export default function Typewriter() {
  return (
    <span className="text-orange inline-block min-w-[200px]">
      <TypeAnimation
        sequence={[
          "Agents",
          1500,
          "LLMs",
          1500,
          "RAG Systems",
          1500,
          "Automation",
          1500,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        cursor={true}
        className="text-orange"
      />
    </span>
  );
}
