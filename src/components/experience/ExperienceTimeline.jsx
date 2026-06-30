import React, { useState } from "react";

const experiencia = [
  {
    puestoEs: "Programador Full Stack",
    puestoEn: "Full Stack Developer",
    empresa: "Paty Rocks",
    periodo: "Feb. 2026 — Presente",
    descripcionEs: "Diseñé y desarrollé Paty Rocks, una plataforma web para la organización de eventos sociales en México. Conecta organizadores con proveedores de servicios a través de un marketplace integrado.",
    descripcionEn: "Designed and developed Paty Rocks, a web platform for organizing social events in Mexico. It connects organizers with service providers via an integrated marketplace.",
    itemsEs: [
      "Marketplace de proveedores con productos, paquetes y cotizaciones personalizadas",
      "Sistema de invitaciones digitales con RSVP, seguimiento de asistencia y control de aforo",
      "Pagos con Stripe: pagos únicos y pagos divididos entre invitados",
      "Notificaciones automáticas por WhatsApp y email en hitos clave del evento",
      "Portal administrativo para gestionar proveedores, productos, órdenes y reembolsos",
      "Arquitectura multi-rol: organizador, invitado, proveedor y administrador",
    ],
    itemsEn: [
      "Provider marketplace offering products, packages, and custom quotes",
      "Digital invitation system with RSVP, attendance tracking, and capacity management",
      "Stripe payments supporting one-time and split payments among guests",
      "Automated WhatsApp and email notifications at key event milestones",
      "Administrative portal for managing providers, products, orders, and refunds",
      "Multi-role architecture: organizer, guest, provider, and administrator",
    ],
    tags: ["React", "TypeScript", "Vite", "Back4App", "Stripe", "SendPulse", "TailwindCSS"],
  },
  {
    puestoEs: "QA Lead",
    puestoEn: "QA Lead",
    empresa: "Moons · Futuralabs",
    periodo: "Sept. 2021 — Sept. 2025",
    descripcionEs: "Lideré la estrategia de QA en múltiples sistemas, mejorando la eficiencia de gestión de pruebas mediante herramientas open-source y optimizadas en costo.",
    descripcionEn: "Led QA strategy across multiple systems, improving test management efficiency through open-source and cost-optimized solutions.",
    itemsEs: [
      "Gestión centralizada de casos de prueba con Qase, estandarizando procesos entre equipos",
      "Automatización con Cypress y herramientas asistidas por IA (Testcraft)",
      "Pruebas de API con Postman integradas en pipelines CI/CD para validación end-to-end",
      "Coordinación QA–Dev con metodologías ágiles y Trello",
      "Evaluaciones de desempeño y planes de carrera para el equipo de QA",
    ],
    itemsEn: [
      "Centralized test case management using Qase, standardizing processes across teams",
      "Automation framework using Cypress and AI-assisted tools (Testcraft)",
      "API testing with Postman integrated into CI/CD pipelines for end-to-end validation",
      "QA–Dev coordination using Agile practices and Trello",
      "Performance evaluations and career development paths for the QA team",
    ],
    tags: ["Cypress", "Qase", "Postman", "Testcraft", "Scrum", "Trello"],
  },
  {
    puestoEs: "Senior Software Tester",
    puestoEn: "Senior Software Tester",
    empresa: "GNP Seguros",
    periodo: "May. 2017 — Nov. 2022",
    descripcionEs: "Ejecuté pruebas funcionales, de regresión y usabilidad para aplicaciones enterprise de seguros. Colaboré en equipos Agile garantizando entregas de alta calidad.",
    descripcionEn: "Executed functional, regression, and usability testing for enterprise insurance applications. Collaborated within Agile squads to ensure on-time and high-quality releases.",
    itemsEs: [
      "Pruebas funcionales, de regresión y usabilidad en aplicaciones de seguros enterprise",
      "Gestión del ciclo de vida de defectos y documentación para release cycles estructurados",
      "Mejoras de proceso que aumentaron la cobertura y trazabilidad de pruebas",
    ],
    itemsEn: [
      "Functional, regression, and usability testing for enterprise insurance applications",
      "Defect lifecycle management and test documentation for structured release cycles",
      "Process improvements that enhanced test coverage and traceability",
    ],
    tags: ["QA", "Testing funcional", "Regresión", "Agile", "CDMX · Remoto"],
  },
  {
    puestoEs: "Software QA Tester",
    puestoEn: "Software QA Tester",
    empresa: "Extend Solutions SA de CV",
    periodo: "Mar. 2012 — Feb. 2017",
    descripcionEs: "Diseñé y ejecuté matrices de prueba con TFS basadas en casos de uso e historias de usuario. Impartí capacitaciones de QA a clientes empresariales.",
    descripcionEn: "Designed and executed test matrices using TFS based on use cases and user stories. Delivered QA training sessions for enterprise clients.",
    itemsEs: [
      "Seguimiento de defectos y ejecución de pruebas con Microsoft Test Manager",
      "Capacitaciones de QA para clientes empresariales (Estafeta, Fundación Dondé)",
      "UAT, validación de bases de datos (SQL Server, MySQL) y pruebas móviles (Android e iOS)",
      "Documentación: manuales de usuario, requerimientos y casos de uso",
    ],
    itemsEn: [
      "Test execution and defect tracking via Microsoft Test Manager",
      "QA training sessions for enterprise clients (Estafeta, Fundación Dondé)",
      "UAT, database validation (SQL Server, MySQL), and mobile testing (Android & iOS)",
      "Documentation: user manuals, requirements, and use cases",
    ],
    tags: ["TFS", "Microsoft Test Manager", "SQL Server", "MySQL", "Android", "iOS"],
  },
  {
    puestoEs: "Programador Informático",
    puestoEn: "Software Developer",
    empresa: "BBVA Bancomer",
    periodo: "Sept. 2011 — Feb. 2012",
    descripcionEs: "Programador analista en Centro Bancomer desarrollando sistemas ejecutivos de sucursales con HTML, Javascript, CSS y JSP.",
    descripcionEn: "Analyst programmer at Centro Bancomer developing branch executive systems using HTML, Javascript, CSS and JSP technologies, correcting errors and improving projects.",
    itemsEs: [],
    itemsEn: [],
    tags: ["HTML", "JavaScript", "CSS", "JSP"],
  },
];

const educacion = [
  {
    tituloEs: "Ing. en Sistemas Computacionales",
    tituloEn: "B.Eng. in Computer Systems Engineering",
    institucion: "UNIVDEP",
    periodo: "2007 — 2011",
    descripcionEs: "Formación en programación, bases de datos, redes y desarrollo de software. Cédula Profesional: 7453612.",
    descripcionEn: "Training in programming, databases, networking, and software development. Professional License: 7453612.",
  },
  {
    tituloEs: "ISTQB Foundation Level",
    tituloEn: "ISTQB Foundation Level",
    institucion: "ISTQB",
    periodo: "2021",
    descripcionEs: "Certificación internacional en pruebas de software. Certificate No. 15-CTFL-69117-03.",
    descripcionEn: "International certification in software testing. Certificate No. 15-CTFL-69117-03.",
  },
];

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
