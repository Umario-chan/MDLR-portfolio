import React from "react";
import Typewriter from "typewriter-effect";

const TypewriterComponent = ({ lang = "es" }) => {
  return (
    <div className="notranslate mt-3 text-xl md:text-2xl font-medium text-gray-400">
      <Typewriter
        options={{
          strings: [lang === "en" ? "Web Development" : "Desarrollo Web", "Frontend", "Backend", "UX/UI"],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default TypewriterComponent;
