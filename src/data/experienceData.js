// Fuente única de la experiencia laboral y la educación.
// La usan el timeline de /experiencia y el CV imprimible (/cv).
// El CV es una versión condensada: si un puesto trae `cv`, `cv.es` y `cv.en`
// (descripcion, items) y `cv.tags` reemplazan a los textos completos solo en
// el CV de ese idioma. Lo que no esté en `cv` sale del texto completo.

export const experiencia = [
  {
    puestoEs: "Lead Developer",
    puestoEn: "Lead Developer",
    empresa: "Semiología de la Vida Cotidiana®",
    periodo: "Ago. 2026 — Sept. 2026",
    periodoEn: "Aug. 2026 — Sep. 2026",
    descripcionEs: "Migré los tres sitios de la marca —el instituto, su colegio y el sitio del fundador— de WordPress con constructores visuales heredados a temas de bloques propios (Full Site Editing), conservando diseño, contenido y posicionamiento.",
    descripcionEn: "Migrated the brand's three sites —the institute, its college, and the founder's own site— from WordPress with inherited page builders to custom block themes (Full Site Editing), preserving design, content, and search rankings.",
    itemsEs: [
      "Reconstrucción completa de semiologia.net, colegiodesemiologia.net y alfonsoruizsoto.com",
      "Analizador propio de HTML a bloques del núcleo de WordPress, sin dependencias",
      "Sistema de diseño en theme.json e importador en PHP idempotente para los tres sitios",
      "99,8 % y 96,8 % de los bloques editables desde el editor nativo, sin tocar código",
      "Cursos, testimonios y entrevistas convertidos en fichas de WordPress administrables",
      "Inventario de URLs, redirecciones 301, SEO por página y datos estructurados schema.org",
    ],
    itemsEn: [
      "Full rebuild of semiologia.net, colegiodesemiologia.net, and alfonsoruizsoto.com",
      "Custom HTML-to-core-blocks parser for WordPress, dependency-free",
      "Design system in theme.json and an idempotent PHP importer for all three sites",
      "99.8% and 96.8% of blocks editable from the native editor, with no code",
      "Courses, testimonials, and interviews turned into manageable WordPress entries",
      "URL inventory, 301 redirects, per-page SEO, and schema.org structured data",
    ],
    tags: ["WordPress", "Full Site Editing", "PHP", "Astro", "Node.js", "JavaScript", "CSS", "SEO"],
    cv: {
      es: {
        items: [
          "Reconstrucción completa de semiologia.net, colegiodesemiologia.net y alfonsoruizsoto.com",
          "Analizador propio de HTML a bloques del núcleo de WordPress, sin dependencias",
          "Sistema de diseño en theme.json e importador en PHP idempotente para los tres sitios",
          "99,8 % y 96,8 % de los bloques editables desde el editor nativo, sin tocar código",
          "Inventario de URLs, redirecciones 301, SEO por página y datos estructurados schema.org",
        ],
      },
      en: {
        items: [
          "Full rebuild of semiologia.net, colegiodesemiologia.net, and alfonsoruizsoto.com",
          "Custom HTML-to-core-blocks parser for WordPress, dependency-free",
          "Design system in theme.json and an idempotent PHP importer for all three sites",
          "99.8% and 96.8% of blocks editable from the native editor, with no code",
          "URL inventory, 301 redirects, per-page SEO, and schema.org structured data",
        ],
      },
    },
  },
  {
    puestoEs: "Lead Developer",
    puestoEn: "Lead Developer",
    empresa: "Grupo Altía — Crowdfunding",
    periodo: "Jul. 2026 — Ago. 2026",
    periodoEn: "Jul. 2026 — Aug. 2026",
    descripcionEs: "Diseñé y desarrollé la plataforma digital de Grupo Altía IAP, una institución de asistencia privada en México. Integra donativos recurrentes, tienda solidaria, facturación CFDI y un panel de administración sin código.",
    descripcionEn: "Designed and developed the digital platform for Grupo Altía IAP, a private assistance institution in Mexico. It integrates recurring donations, a solidarity store, CFDI invoicing, and a no-code administration panel.",
    itemsEs: [
      "Plataforma de donativos únicos y recurrentes con pagos por Stripe y SPEI",
      "Tienda solidaria \"Regalos con causa\" con seguimiento de pedidos y entregas",
      "Facturación fiscal (CFDI) automática vía Facturapi — PDF y XML descargables al instante",
      "Panel de administración sin código para editar landing, productos, aliados y galería",
      "Multi-rol: donante, usuario registrado, colaborador y administrador",
      "Despliegue en Cloudflare Pages con Back4App como backend",
    ],
    itemsEn: [
      "One-time and recurring donation platform with Stripe and SPEI payments",
      "\"Regalos con causa\" solidarity store with order and delivery tracking",
      "Automatic fiscal invoicing (CFDI) via Facturapi — PDF and XML downloadable instantly",
      "No-code admin panel to edit landing, products, partners, and gallery",
      "Multi-role system: donor, registered user, collaborator, and administrator",
      "Deployed on Cloudflare Pages with Back4App as backend",
    ],
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Back4App", "Node.js", "Stripe", "Facturapi", "Cloudflare Pages"],
    cv: {
      es: {
        descripcion: "Diseñé y desarrollé la plataforma digital de Grupo Altía IAP, integrando donativos recurrentes, tienda solidaria, facturación CFDI y panel de administración sin código.",
        items: [
          "Plataforma de donativos únicos y recurrentes con pagos por Stripe y SPEI",
          "Tienda solidaria \"Regalos con causa\" con seguimiento de pedidos y entregas",
          "Facturación fiscal (CFDI) automática vía Facturapi — PDF y XML descargables al instante",
          "Panel de administración sin código para editar landing, productos, aliados y galería",
          "Multi-rol: donante, usuario registrado, colaborador y administrador",
        ],
      },
      en: {
        descripcion: "Designed and developed the digital platform for Grupo Altía IAP, integrating recurring donations, a solidarity store, CFDI invoicing, and a no-code admin panel.",
        items: [
          "One-time and recurring donation platform with Stripe and SPEI payments",
          "\"Regalos con causa\" solidarity store with order and delivery tracking",
          "Automatic fiscal invoicing (CFDI) via Facturapi — PDF and XML downloadable instantly",
          "No-code admin panel to edit landing, products, partners, and gallery",
          "Multi-role system: donor, registered user, collaborator, and administrator",
        ],
      },
    },
  },
  {
    puestoEs: "Lead Developer",
    puestoEn: "Lead Developer",
    empresa: "Paty Rocks",
    periodo: "Feb. 2026 — Presente",
    periodoEn: "Feb. 2026 — Present",
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
    cv: {
      es: {
        descripcion: "Diseñé y desarrollé Paty Rocks, plataforma web para organización de eventos sociales en México con marketplace integrado de proveedores.",
        items: [
          "Marketplace de proveedores con productos, paquetes y cotizaciones personalizadas",
          "Sistema de invitaciones digitales con RSVP, seguimiento de asistencia y control de aforo",
          "Pagos con Stripe: pagos únicos y pagos divididos entre invitados",
          "Notificaciones automáticas por WhatsApp y email en hitos clave del evento",
          "Arquitectura multi-rol: organizador, invitado, proveedor y administrador",
        ],
      },
      en: {
        descripcion: "Designed and developed Paty Rocks, a web platform for organizing social events in Mexico with an integrated provider marketplace.",
        items: [
          "Provider marketplace offering products, packages, and custom quotes",
          "Digital invitation system with RSVP, attendance tracking, and capacity management",
          "Stripe payments supporting one-time and split payments among guests",
          "Automated WhatsApp and email notifications at key event milestones",
          "Multi-role architecture: organizer, guest, provider, and administrator",
        ],
      },
    },
  },
  {
    puestoEs: "QA Lead",
    puestoEn: "QA Lead",
    empresa: "Moons · Futuralabs",
    periodo: "Sept. 2021 — Sept. 2025",
    periodoEn: "Sep. 2021 — Sep. 2025",
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
    cv: {
      es: {
        items: [
          "Gestión centralizada de casos de prueba con Qase, estandarizando procesos entre equipos",
          "Automatización con Cypress y herramientas asistidas por IA (Testcraft)",
          "Pruebas de API con Postman integradas en pipelines CI/CD",
          "Coordinación QA–Dev con metodologías ágiles y Trello",
        ],
      },
      en: {
        items: [
          "Centralized test case management using Qase, standardizing processes across teams",
          "Automation framework using Cypress and AI-assisted tools (Testcraft)",
          "API testing with Postman integrated into CI/CD pipelines",
          "QA–Dev coordination using Agile practices and Trello",
        ],
      },
    },
  },
  {
    puestoEs: "Senior Software Tester",
    puestoEn: "Senior Software Tester",
    empresa: "GNP Seguros",
    periodo: "May. 2017 — Nov. 2022",
    periodoEn: "May 2017 — Nov. 2022",
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
    tagsEn: ["QA", "Functional testing", "Regression", "Agile", "CDMX · Remote"],
    cv: {
      es: {
        descripcion: "Pruebas funcionales, de regresión y usabilidad para aplicaciones enterprise de seguros. Equipos Agile, entregas de alta calidad.",
        items: [
          "Gestión del ciclo de vida de defectos y documentación para release cycles estructurados",
          "Mejoras de proceso que aumentaron la cobertura y trazabilidad de pruebas",
        ],
      },
      en: {
        descripcion: "Functional, regression, and usability testing for enterprise insurance applications. Agile squads, high-quality releases.",
        items: [
          "Defect lifecycle management and test documentation for structured release cycles",
          "Process improvements that enhanced test coverage and traceability",
        ],
      },
      tags: [],
    },
  },
  {
    puestoEs: "Software QA Tester",
    puestoEn: "Software QA Tester",
    empresa: "Extend Solutions SA de CV",
    periodo: "Mar. 2012 — Feb. 2017",
    periodoEn: "Mar. 2012 — Feb. 2017",
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
    cv: {
      es: {
        descripcion: "Diseñé y ejecuté matrices de prueba con TFS. Impartí capacitaciones de QA a clientes empresariales (Estafeta, Fundación Dondé).",
        items: [
          "Seguimiento de defectos con Microsoft Test Manager",
          "UAT, validación de bases de datos (SQL Server, MySQL) y pruebas móviles (Android & iOS)",
        ],
      },
      en: {
        descripcion: "Designed and executed test matrices using TFS. Delivered QA training for enterprise clients (Estafeta, Fundación Dondé).",
        items: [
          "Defect tracking with Microsoft Test Manager",
          "UAT, database validation (SQL Server, MySQL), and mobile testing (Android & iOS)",
        ],
      },
      tags: ["TFS", "Microsoft Test Manager", "SQL Server", "MySQL"],
    },
  },
  {
    puestoEs: "Developer Jr.",
    puestoEn: "Junior Developer",
    empresa: "BBVA Bancomer",
    periodo: "Sept. 2011 — Feb. 2012",
    periodoEn: "Sep. 2011 — Feb. 2012",
    descripcionEs: "Programador analista en Centro Bancomer desarrollando sistemas ejecutivos de sucursales con HTML, Javascript, CSS y JSP.",
    descripcionEn: "Analyst programmer at Centro Bancomer developing branch executive systems using HTML, Javascript, CSS and JSP technologies, correcting errors and improving projects.",
    itemsEs: [],
    itemsEn: [],
    tags: ["HTML", "JavaScript", "CSS", "JSP"],
  },
];

export const educacion = [
  {
    tituloEs: "Ing. en Sistemas Computacionales",
    tituloEn: "B.Eng. in Computer Systems Engineering",
    institucion: "UNIVDEP",
    periodo: "2007 — 2011",
    descripcionEs: "Formación en programación, bases de datos, redes y desarrollo de software. Cédula Profesional: 7453612.",
    descripcionEn: "Training in programming, databases, networking, and software development. Professional License: 7453612.",
    notaCv: { es: "Cédula Profesional: 7453612", en: "Professional License: 7453612" },
  },
  {
    tituloEs: "ISTQB Foundation Level",
    tituloEn: "ISTQB Foundation Level",
    institucion: "ISTQB",
    periodo: "2021",
    descripcionEs: "Certificación internacional en pruebas de software. Certificate No. 15-CTFL-69117-03.",
    descripcionEn: "International certification in software testing. Certificate No. 15-CTFL-69117-03.",
    notaCv: { es: "Certificate No. 15-CTFL-69117-03", en: "Certificate No. 15-CTFL-69117-03" },
  },
];
