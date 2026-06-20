import React, { useState } from "react";

const SkillsList = () => {
  const [openItem, setOpenItem] = useState("");

  const skills = {
    "¿Qué tecnologías uso?": "Trabajo con tecnologías como React, Node.js, Astro, JavaScript, TypeScript, Cypress, Tailwind CSS, SASS, Figma, entre otras.",
    "Mi Experiencia": "Tengo experiencia trabajando en startups, consultoras tecnológicas y empresas establecidas desarrollando y maquetando sitios web a partir de diseños en Figma. Utilizo tecnologías frontend como Astro y React, junto con Tailwind CSS y otras librerías.",
    "Mi formación": "Estudié ingeniería en sistemas computacionales en la UNIVDEP, lo que me brindó las bases en programación. Realicé certificaciones como el ISTQB Foundation level y complemento mi formación con aprendizaje autodidacta.",
    "¿Cómo trabajo en equipo?": "Tengo experiencia en equipos multidisciplinarios usando metodologías ágiles como Scrum y Kanban, Git/GitHub para control de versiones, y QA para asegurar la integridad de los desarrollos.",
    "Metodologías Ágiles": "He trabajado con Scrum (sprints de dos semanas, pull requests, revisión de código) y Kanban (tableros de tareas, dailies). Participé en reuniones diarias para planificar y reportar avances del proyecto.",
  };

  return (
    <section className="mt-16 mx-auto max-w-5xl px-6 pb-16 reveal">
      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#1a6fec] mb-1">Más información</p>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Más sobre mí</h2>

      <div className="space-y-3">
        {Object.entries(skills).map(([question, answer]) => (
          <div key={question} className="border border-gray-200 rounded-xl overflow-hidden">
            <button
              onClick={() => setOpenItem(openItem === question ? "" : question)}
              className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-gray-50 transition-colors"
            >
              <span className="text-sm font-semibold text-gray-900">{question}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`h-4 w-4 shrink-0 text-gray-400 transition-transform duration-200 ${openItem === question ? "rotate-180" : ""}`}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            <div className={`overflow-hidden transition-all duration-300 ${openItem === question ? "max-h-96" : "max-h-0"}`}>
              <p className="px-5 pb-4 pt-3 text-sm text-gray-500 leading-relaxed border-t border-gray-100">
                {answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsList;
