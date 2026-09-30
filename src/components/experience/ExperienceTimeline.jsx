import React, { useState } from "react";
import { experiencia, educacion } from "../../data/experienceData.js";

function TimelineItem({ open, onToggle, dot, showLine, children }) {
  return (
    <div className="flex gap-6">
      <div className="flex flex-col items-center">
        <button
          onClick={onToggle}
          className={`h-6 w-6 rounded-full border-2 bg-white flex items-center justify-center shrink-0 mt-0.5 transition-colors duration-200 cursor-pointer ${dot}`}
        >
          <div className={`h-2 w-2 rounded-full transition-colors duration-200 ${open ? "bg-[#1a6fec]" : "bg-gray-300"}`}></div>
        </button>
        {showLine && <div className="flex-1 w-px bg-gray-200 my-2"></div>}
      </div>
      <div className="flex-1 pb-6">{children(open)}</div>
    </div>
  );
}

export default function ExperienceTimeline() {
  const [openWork, setOpenWork] = useState(-1);
  const [openEdu, setOpenEdu] = useState(-1);

  return (
    <div>
      {/* Experiencia laboral */}
      <div className="mb-16">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#1a6fec] mb-1">
          <span className="lang-es">Trayectoria</span>
          <span className="lang-en">Career</span>
        </p>
        <h2 className="text-3xl font-bold text-gray-900 mb-10">
          <span className="lang-es">Experiencia laboral</span>
          <span className="lang-en">Work experience</span>
        </h2>

        <div className="flex flex-col">
          {experiencia.map((item, i) => (
            <TimelineItem
              key={item.empresa + i}
              open={openWork === i}
              onToggle={() => setOpenWork(openWork === i ? -1 : i)}
              dot={openWork === i ? "border-[#1a6fec]" : "border-gray-300 hover:border-[#1a6fec]"}
              showLine={i < experiencia.length - 1}
            >
              {(open) => (
                <>
                  <button
                    onClick={() => setOpenWork(openWork === i ? -1 : i)}
                    className="w-full text-left flex items-start justify-between gap-4 group cursor-pointer"
                  >
                    <div>
                      <p className="text-base font-bold text-gray-900 group-hover:text-[#1a6fec] transition-colors duration-200">
                        <span className="lang-es">{item.puestoEs}</span>
                        <span className="lang-en">{item.puestoEn}</span>
                      </p>
                      <p className="text-sm font-semibold text-[#1a6fec]">{item.empresa}</p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0 mt-0.5">
                      <span className="text-xs font-medium text-gray-400 whitespace-nowrap">{item.periodo}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`h-4 w-4 shrink-0 text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </div>
                  </button>

                  <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[600px] mt-3" : "max-h-0"}`}>
                    <div className="border-t border-gray-100 pt-3 space-y-3">
                      <p className="text-sm text-gray-500 leading-relaxed">
                        <span className="lang-es">{item.descripcionEs}</span>
                        <span className="lang-en">{item.descripcionEn}</span>
                      </p>
                      {item.itemsEs && item.itemsEs.length > 0 && (
                        <ul className="space-y-1.5">
                          {item.itemsEs.map((it, j) => (
                            <li key={j} className="lang-es flex gap-2 text-sm text-gray-500 leading-relaxed">
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1a6fec]"></span>
                              {it}
                            </li>
                          ))}
                          {item.itemsEn.map((it, j) => (
                            <li key={j} className="lang-en flex gap-2 text-sm text-gray-500 leading-relaxed">
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1a6fec]"></span>
                              {it}
                            </li>
                          ))}
                        </ul>
                      )}
                      {item.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {item.tags.map((tag) => (
                            <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2.5 py-0.5 rounded-full font-medium">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </>
              )}
            </TimelineItem>
          ))}
        </div>
      </div>

      {/* Educación */}
      <div className="mt-16">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#1a6fec] mb-1">
          <span className="lang-es">Formación</span>
          <span className="lang-en">Education</span>
        </p>
        <h2 className="text-3xl font-bold text-gray-900 mb-10">
          <span className="lang-es">Educación y certificaciones</span>
          <span className="lang-en">Education & certifications</span>
        </h2>

        <div className="flex flex-col">
          {educacion.map((item, i) => (
            <TimelineItem
              key={item.institucion + i}
              open={openEdu === i}
              onToggle={() => setOpenEdu(openEdu === i ? -1 : i)}
              dot={openEdu === i ? "border-[#1a6fec]" : "border-gray-300 hover:border-[#1a6fec]"}
              showLine={i < educacion.length - 1}
            >
              {(open) => (
                <>
                  <button
                    onClick={() => setOpenEdu(openEdu === i ? -1 : i)}
                    className="w-full text-left flex items-start justify-between gap-4 group cursor-pointer"
                  >
                    <div>
                      <p className="text-base font-bold text-gray-900 group-hover:text-[#1a6fec] transition-colors duration-200">
                        <span className="lang-es">{item.tituloEs}</span>
                        <span className="lang-en">{item.tituloEn}</span>
                      </p>
                      <p className="text-sm font-semibold text-gray-500">{item.institucion}</p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0 mt-0.5">
                      <span className="text-xs font-medium text-gray-400 whitespace-nowrap">{item.periodo}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`h-4 w-4 shrink-0 text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </div>
                  </button>

                  <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 mt-3" : "max-h-0"}`}>
                    <p className="text-sm text-gray-500 leading-relaxed border-t border-gray-100 pt-3">
                      <span className="lang-es">{item.descripcionEs}</span>
                      <span className="lang-en">{item.descripcionEn}</span>
                    </p>
                  </div>
                </>
              )}
            </TimelineItem>
          ))}
        </div>
      </div>
    </div>
  );
}
