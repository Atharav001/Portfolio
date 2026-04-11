"use client";

import { TypeAnimation } from "react-type-animation";

export default function Typewriter() {
  return (
    <span className="text-orange inline-block min-w-[200px]">
      <TypeAnimation
        sequence={[
          "Code",
          1500,
          "Systems",
          1500,
          "Design",
          1500,
          "AI",
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
