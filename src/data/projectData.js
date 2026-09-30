import patyRocks from "../assets/img-projects/patyrocks.png";
import altia from "../assets/img-projects/altia.jpg";
import neosis from "../assets/img-projects/neosis.png";
import comicShelf from "../assets/img-projects/comicshelf.jpeg";
import semiologia from "../assets/img-projects/semiologia.jpg";
import novagenic from "../assets/img-projects/novagenic.jpg";

export const proyectos = [
  {
    titulo: "Paty Rocks",
    slug: "paty-rocks",
    descripcion:
      "AI Event Planner — planeación inteligente de eventos sociales y corporativos.",
    descripcionEn:
      "AI Event Planner — intelligent planning for social and corporate events.",
    subtitulo: "Paty Rocks — Plataforma de organización de eventos",
    subtituloEn: "Paty Rocks — Event Organization Platform",
    descripcionLarga:
      "Paty Rocks es una aplicación web y móvil para la organización integral de eventos sociales en México. Permite a los organizadores gestionar todos los aspectos de su evento desde un solo lugar: invitados, confirmaciones, tareas, proveedores y pagos.",
    descripcionLargaEn:
      "Paty Rocks is a web and mobile application for comprehensive event organization in Mexico. It allows organizers to manage every aspect of their event from a single place: guests, confirmations, tasks, vendors, and payments.",
    secciones: [
      {
        titulo: "Organizador",
        items: [
          "Crea un evento, genera un link público o envía invitaciones digitales por WhatsApp",
          "Recibe confirmaciones y declinaciones en tiempo real con notificaciones automáticas",
          "Contrata proveedores del marketplace, agrega productos al carrito y realiza el pago en línea",
          "Gestiona tareas pendientes del evento y recibe recordatorios automáticos",
        ],
      },
      {
        titulo: "Invitado",
        items: [
          "Confirma o declina asistencia vía link público sin necesidad de crear cuenta",
          "Recibe un boleto digital por WhatsApp al confirmar",
          "Puede pagar su boleto en línea si el evento tiene venta de tickets",
        ],
      },
      {
        titulo: "Proveedor",
        items: [
          "Publica su catálogo de productos y paquetes en el marketplace",
          "Recibe notificaciones por WhatsApp cuando un organizador hace una solicitud o le escribe",
          "Gestiona órdenes, cotizaciones y pagos desde su panel",
        ],
      },
      {
        titulo: "Admin",
        items: [
          "Revisa y aprueba productos antes de que aparezcan en el marketplace",
          "Gestiona usuarios, proveedores, órdenes, reembolsos y cupones",
          "Integra proveedores externos vía API sin que estén registrados en la plataforma",
        ],
      },
    ],
    seccionesEn: [
      {
        titulo: "Organizer",
        items: [
          "Create an event, generate a public link or send digital invitations via WhatsApp",
          "Receive confirmations and declines in real time with automatic notifications",
          "Hire vendors from the marketplace, add products to cart, and pay online",
          "Manage pending event tasks and receive automatic reminders",
        ],
      },
      {
        titulo: "Guest",
        items: [
          "Confirm or decline attendance via public link without creating an account",
          "Receive a digital ticket via WhatsApp upon confirmation",
          "Can pay for their ticket online if the event has ticket sales",
        ],
      },
      {
        titulo: "Vendor",
        items: [
          "Publish their product catalog and packages in the marketplace",
          "Receive WhatsApp notifications when an organizer makes a request or sends a message",
          "Manage orders, quotes, and payments from their dashboard",
        ],
      },
      {
        titulo: "Admin",
        items: [
          "Review and approve products before they appear in the marketplace",
          "Manage users, vendors, orders, refunds, and coupons",
          "Integrate external vendors via API without them being registered on the platform",
        ],
      },
    ],
    imagen: patyRocks.src,
    tecnologias: ["React", "TypeScript", "Tailwind CSS", "Back4App", "Node.js", "MongoDB", "Stripe", "SendPulse"],
    demo: "https://patyrocks.com/",
    github: "https://github.com/Umario-chan/paty-rocks-app",
    categoria: "Fullstack",
  },
  {
    titulo: "Grupo Altía — Crowdfunding",
    slug: "altia",
    descripcion:
      "Plataforma de donativos y crowdfunding con tienda solidaria, pagos y facturación CFDI para una institución de asistencia privada.",
    descripcionEn:
      "Donation and crowdfunding platform with a solidarity store, payments, and CFDI invoicing for a private assistance institution.",
    subtitulo: "Grupo Altía — Plataforma de donativos y crowdfunding",
    subtituloEn: "Grupo Altía — Donation and Crowdfunding Platform",
    descripcionLarga:
      "Grupo Altía es una aplicación web para una Institución de Asistencia Privada (IAP) en México. Reúne en un solo lugar la recaudación de donativos para causas sociales, una tienda solidaria (\"Regalos con causa\"), la difusión de historias de impacto e informes de transparencia, y la facturación fiscal (CFDI) — todo administrable desde un panel, sin tocar código.",
    descripcionLargaEn:
      "Grupo Altía is a web application for a Private Assistance Institution (IAP) in Mexico. It brings together the collection of donations for social causes, a solidarity store (\"Regalos con causa\"), the sharing of impact stories and transparency reports, and fiscal invoicing (CFDI) — all manageable from a panel, without touching code.",
    secciones: [
      {
        titulo: "Donante",
        items: [
          "Explora causas e historias de impacto y realiza un donativo único o recurrente (mensual) sin necesidad de crear cuenta",
          "Paga con tarjeta o transferencia SPEI a través de Stripe",
          "Compra \"Regalos con causa\" en la tienda solidaria y da seguimiento a su entrega",
          "Solicita su recibo de donativo o factura (CFDI) y descarga el PDF/XML al instante",
        ],
      },
      {
        titulo: "Usuario registrado",
        items: [
          "Consulta su historial de donativos y pedidos desde \"Mi cuenta\"",
          "Descarga sus comprobantes fiscales cuando los necesite",
          "Gestiona sus donativos recurrentes",
        ],
      },
      {
        titulo: "Colaborador",
        items: [
          "Da seguimiento a los pedidos de la tienda y actualiza su estatus de entrega",
          "Emite y reenvía facturas (CFDI) de pedidos y donativos según sus permisos",
        ],
      },
      {
        titulo: "Admin",
        items: [
          "Edita toda la landing —secciones, textos, imágenes y galerías— desde un panel, sin programar",
          "Administra productos, aliados externos, calendario de entregas y testimonios",
          "Configura los espacios Casa Altía y Salón Altía con galerías e información",
          "Gestiona usuarios y roles del equipo, y publica los informes anuales de transparencia",
        ],
      },
    ],
    seccionesEn: [
      {
        titulo: "Donor",
        items: [
          "Browse causes and impact stories and make a one-time or recurring (monthly) donation without creating an account",
          "Pay by card or SPEI bank transfer through Stripe",
          "Shop in the solidarity store (\"Regalos con causa\") and track your delivery",
          "Request a donation receipt or CFDI invoice and download the PDF/XML instantly",
        ],
      },
      {
        titulo: "Registered user",
        items: [
          "View your donation and order history from \"My account\"",
          "Download your tax receipts whenever needed",
          "Manage your recurring donations",
        ],
      },
      {
        titulo: "Collaborator",
        items: [
          "Track store orders and update delivery status",
          "Issue and resend invoices (CFDI) for orders and donations according to their permissions",
        ],
      },
      {
        titulo: "Admin",
        items: [
          "Edit the entire landing page — sections, text, images, and galleries — from a panel, without coding",
          "Manage products, external partners, delivery calendar, and testimonials",
          "Configure Casa Altía and Salón Altía spaces with galleries and information",
          "Manage team users and roles, and publish annual transparency reports",
        ],
      },
    ],
    imagen: altia.src,
    tecnologias: ["React", "TypeScript", "Vite", "Tailwind CSS", "Back4App", "Node.js", "Stripe", "Facturapi", "Cloudflare Pages"],
    demo: "https://grupoaltia.org",
    github: "https://github.com/Umario-chan/altia",
    categoria: "Fullstack",
  },
  {
    titulo: "Semiología de la Vida Cotidiana® — 3 sitios",
    slug: "semiologia",
    descripcion:
      "Migración de tres sitios hermanos de WordPress heredado a temas de bloques editables, conservando diseño, contenido y posicionamiento.",
    descripcionEn:
      "Migration of three sibling sites from legacy WordPress to editable block themes, preserving design, content, and search rankings.",
    subtitulo: "Semiología de la Vida Cotidiana® — Ecosistema de tres sitios en WordPress",
    subtituloEn: "Semiología de la Vida Cotidiana® — A three-site WordPress ecosystem",
    descripcionLarga:
      "Tres sitios de la misma marca —el instituto, su colegio y el sitio del fundador— vivían en WordPress sobre constructores visuales heredados (Gantry5, Elementor, Phlox Pro, JetEngine) que el equipo ya no podía mantener. Los reconstruí por completo y los devolví a WordPress como temas de bloques (Full Site Editing): el mismo diseño, el mismo contenido y las mismas direcciones, pero ahora cada texto, imagen y sección se edita desde el editor nativo, sin tocar código ni depender de un constructor de pago.",
    descripcionLargaEn:
      "Three sites under the same brand —the institute, its college, and the founder's own site— ran on WordPress atop inherited page builders (Gantry5, Elementor, Phlox Pro, JetEngine) the team could no longer maintain. I rebuilt all three from scratch and brought them back to WordPress as block themes (Full Site Editing): same design, same content, same URLs, but now every text, image, and section is edited from the native editor, with no code and no paid page builder.",
    sitios: [
      {
        nombre: "Semiología de la Vida Cotidiana",
        dominio: "semiologia.net",
        descripcion:
          "El sitio del instituto: cursos presenciales y en línea, entrevistas, calendario de actividades y un blog de 23 artículos, la mayoría con audio narrado.",
      },
      {
        nombre: "Colegio de Consultores y Comunicadores",
        dominio: "colegiodesemiologia.net",
        descripcion:
          "El sitio académico: estructura del plan de estudios, asignaturas vigentes, calendarios por generación, agenda de asesorías e inscripciones con pago en línea.",
      },
      {
        nombre: "Alfonso Ruiz Soto®",
        dominio: "alfonsoruizsoto.com",
        descripcion:
          "El sitio del fundador: 12 cursos con temario y pago en línea, 20 testimonios, 13 entrevistas, boletines y los programas de capacitación empresarial.",
      },
    ],
    sitiosEn: [
      {
        nombre: "Semiología de la Vida Cotidiana",
        dominio: "semiologia.net",
        descripcion:
          "The institute's site: in-person and online courses, interviews, an events calendar, and a 23-article blog, most of them with narrated audio.",
      },
      {
        nombre: "Colegio de Consultores y Comunicadores",
        dominio: "colegiodesemiologia.net",
        descripcion:
          "The academic site: curriculum structure, current subjects, per-cohort calendars, advisory scheduling, and enrollment with online payment.",
      },
      {
        nombre: "Alfonso Ruiz Soto®",
        dominio: "alfonsoruizsoto.com",
        descripcion:
          "The founder's site: 12 courses with syllabus and online payment, 20 testimonials, 13 interviews, newsletters, and corporate training programs.",
      },
    ],
    seccionesTitulo: "El trabajo",
    seccionesTituloEn: "The work",
    secciones: [
      {
        titulo: "La migración",
        items: [
          "Analizador propio de HTML a bloques del núcleo de WordPress, sin dependencias, probado contra miles de elementos de las páginas originales",
          "El sistema de diseño vive en theme.json: cualquier página nueva nace con los colores, las tipografías y los espaciados del sitio",
          "Importador en PHP idempotente: se puede correr las veces que haga falta sin duplicar páginas ni fichas",
          "Los iconos van como máscaras CSS, porque el editor los borra cuando viajan como SVG dentro del texto",
        ],
      },
      {
        titulo: "Editable de verdad",
        items: [
          "99,8 % de los bloques del Colegio y 96,8 % de los de Alfonso Ruiz se editan desde el editor nativo, no desde el código",
          "Cursos, testimonios y entrevistas dejaron de vivir en el código: son fichas de WordPress con su propia entrada en el escritorio",
          "Lo que se guarda es, carácter por carácter, lo que WordPress dibujaría: un atributo de más y el bloque deja de poder editarse",
          "Cada sitio lleva sus manuales de uso instalados dentro, visibles sólo para quien lo administra",
        ],
      },
      {
        titulo: "Contenido y posicionamiento",
        items: [
          "Inventario completo de las direcciones del sitio anterior y redirecciones 301 comprobadas, para no perder el posicionamiento ganado",
          "SEO por página: título, descripción, imagen para compartir, datos estructurados schema.org y sitemap con la fecha real de cada cambio",
          "Imágenes servidas en .webp con las medidas exactas a las que se muestran, y los originales conservados como maestros",
        ],
      },
    ],
    seccionesEn: [
      {
        titulo: "The migration",
        items: [
          "Custom HTML-to-core-blocks parser, dependency-free, tested against thousands of elements from the original pages",
          "The design system lives in theme.json, so any new page is born with the site's colors, typography, and spacing",
          "Idempotent PHP importer: it can be run as many times as needed without duplicating pages or entries",
          "Icons ship as CSS masks, because the editor strips them when they travel as inline SVG inside text",
        ],
      },
      {
        titulo: "Genuinely editable",
        items: [
          "99.8% of the College's blocks and 96.8% of Alfonso Ruiz's are editable from the native editor, not from code",
          "Courses, testimonials, and interviews no longer live in code: they are WordPress entries with their own dashboard section",
          "What gets saved is, character for character, what WordPress would render: one extra attribute and the block stops being editable",
          "Each site ships with its own usage manuals installed inside, visible only to whoever administers it",
        ],
      },
      {
        titulo: "Content and search rankings",
        items: [
          "Full inventory of the previous site's URLs and verified 301 redirects, so no earned search ranking is lost",
          "Per-page SEO: title, description, share image, schema.org structured data, and a sitemap with each page's real change date",
          "Images served as .webp at the exact dimensions they are displayed, with the originals kept as masters",
        ],
      },
    ],
    imagen: semiologia.src,
    tecnologias: ["WordPress", "Full Site Editing", "PHP", "Astro", "Node.js", "JavaScript", "CSS", "SEO"],
    demo: "",
    categoria: "Fullstack",
    estado: "Migración terminada. Pendiente de salir a producción.",
    estadoEn: "Migration complete. Pending production launch.",
  },
  {
    titulo: "Novagenic — Farmacogenética clínica",
    slug: "novagenic",
    descripcion:
      "Sistema clínico de tres roles que convierte la corrida del laboratorio en reportes de farmacogenética por paciente, con recomendaciones CPIC y fenoconversión por co-medicación.",
    descripcionEn:
      "Three-role clinical system that turns a lab run into per-patient pharmacogenomics reports, with CPIC recommendations and co-medication phenoconversion.",
    subtitulo: "Novagenic Clínica — Del Excel del laboratorio al reporte del paciente",
    subtituloEn: "Novagenic Clínica — From the lab's spreadsheet to the patient's report",
    descripcionLarga:
      "El laboratorio entrega la corrida del chip como una hoja de cálculo: decenas de muestras por cientos de SNPs, sin nombres y sin interpretación. Novagenic Clínica convierte eso en un reporte que un médico puede leer: llama los diplotipos de cada gen, consulta el fenotipo y las recomendaciones de las guías CPIC, y ajusta el resultado según los medicamentos que el paciente ya toma. Antes de esto, el rediseño partió de una auditoría técnica completa de la plataforma anterior y de un prototipo funcional de 20 pantallas.",
    descripcionLargaEn:
      "The lab delivers the chip run as a spreadsheet: dozens of samples across hundreds of SNPs, with no names and no interpretation. Novagenic Clínica turns that into a report a physician can read: it calls each gene's diplotypes, looks up the phenotype and recommendations from the CPIC guidelines, and adjusts the result for the medication the patient is already taking. The redesign began with a full technical audit of the previous platform and a working 20-screen prototype.",
    seccionesTitulo: "Cómo funciona",
    seccionesTituloEn: "How it works",
    secciones: [
      {
        titulo: "Doctor",
        items: [
          "Sube el Excel de la corrida y el parser detecta las columnas de muestra, lee genotipos por rsID y valida la estructura",
          "Asigna cada muestra a un paciente en una pantalla de mapeo obligatoria: sin vínculo confirmado no hay reporte",
          "Captura y confirma la medicación actual, con reconocimiento de nombres comerciales del mercado mexicano",
          "Genera el reporte, lo consulta en pantalla y lo descarga en PDF con sus advertencias y la versión de las tablas usadas",
          "Consulta de prescripción: pregunta por un fármaco que el paciente aún no toma y ve el resultado antes de recetarlo",
        ],
      },
      {
        titulo: "Paciente y administrador",
        items: [
          "El paciente entra con su propia cuenta y ve únicamente su reporte y su PDF",
          "El administrador gestiona doctores, pacientes y administradores, con buscador, paginación y exportación",
          "Reasignación masiva de los pacientes de un doctor y borrado de corridas de laboratorio",
          "Aislamiento entre roles probado: un paciente no lee reportes ajenos y un doctor no ve pacientes de otro",
        ],
      },
      {
        titulo: "El motor científico",
        items: [
          "Base de conocimiento CPIC/ClinPGx precompilada a JSON versionado: 68 SNPs, 37 farmacogenes y sus recomendaciones",
          "Llamado de alelos con las definiciones de CPIC acotadas al panel, incluido el intento en hebra complementaria con su bandera",
          "Fenoconversión: la co-medicación cruzada contra la tabla de inhibidores e inductores de la FDA ajusta el fenotipo",
          "Catálogo de 239 fármacos y 587 nombres reconocidos, marcas comerciales de México incluidas",
          "Limitaciones impresas en el propio reporte: panel dirigido sin CNV, ambigüedad de hebra y llamado por SNP clave",
        ],
      },
    ],
    seccionesEn: [
      {
        titulo: "Physician",
        items: [
          "Uploads the run's spreadsheet; the parser detects sample columns, reads genotypes by rsID, and validates the structure",
          "Assigns each sample to a patient on a mandatory mapping screen: no confirmed link, no report",
          "Records and confirms current medication, with brand-name recognition for the Mexican market",
          "Generates the report, reviews it on screen, and downloads a PDF with its disclaimers and the version of the tables used",
          "Prescription lookup: asks about a drug the patient is not yet taking and sees the result before prescribing it",
        ],
      },
      {
        titulo: "Patient and administrator",
        items: [
          "The patient signs in with their own account and sees only their report and PDF",
          "The administrator manages physicians, patients, and admins, with search, pagination, and export",
          "Bulk reassignment of a physician's patients and deletion of lab runs",
          "Role isolation verified: a patient cannot read others' reports and a physician cannot see another's patients",
        ],
      },
      {
        titulo: "The scientific engine",
        items: [
          "CPIC/ClinPGx knowledge base precompiled into versioned JSON: 68 SNPs, 37 pharmacogenes, and their recommendations",
          "Allele calling with CPIC definitions scoped to the panel, including a complementary-strand attempt with its own flag",
          "Phenoconversion: co-medication cross-referenced against the FDA inhibitor and inducer table adjusts the phenotype",
          "Catalog of 239 drugs and 587 recognized names, Mexican brand names included",
          "Limitations printed in the report itself: targeted panel without CNV, strand ambiguity, and key-SNP calling",
        ],
      },
    ],
    imagen: novagenic.src,
    tecnologias: ["JavaScript", "HTML5", "CSS3", "Back4App", "Parse Server", "Node.js", "Python", "Vercel"],
    demo: "",
    categoria: "Fullstack",
    estado: "Prototipo funcional. Contenido clínico en borrador, pendiente de validación médica.",
    estadoEn: "Working prototype. Clinical content is a draft, pending medical validation.",
  },
  {
    titulo: "Neosis",
    slug: "neosis",
    descripcion:
      "SaaS multi-inquilino de administración escolar para colegios privados: calificaciones, asistencia, boletas y documentos verificables por folio.",
    descripcionEn:
      "Multi-tenant school administration SaaS for private schools: grades, attendance, report cards, and folio-verifiable documents.",
    imagen: neosis.src,
    tecnologias: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Motion", "Vercel"],
    demo: "",
    categoria: "Fullstack",
    wip: true,
  },
  {
    titulo: "ComicShelf",
    slug: "comicshelf",
    descripcion: "App Android para leer cómics digitales directamente desde el almacenamiento del dispositivo.",
    descripcionEn: "Android app to read digital comics directly from the device storage.",
    subtitulo: "ComicShelf — App Android de lectura de cómics digitales",
    subtituloEn: "ComicShelf — Android Digital Comics Reader App",
    descripcionLarga:
      "ComicShelf es una app para Android que permite leer cómics digitales directamente desde el almacenamiento del dispositivo. Accede a carpetas del teléfono mediante el sistema de permisos de Android (SAF), muestra los archivos organizados en un estante de libros visual, y permite abrirlos y leerlos página a página.",
    descripcionLargaEn:
      "ComicShelf is an Android app that lets you read digital comics directly from your device storage. It accesses phone folders through Android's permission system (SAF), displays files organized on a visual bookshelf, and lets you open and read them page by page.",
    secciones: [
      {
        titulo: "Formatos soportados",
        items: [
          ".cbz — el más común, extracción por streaming directo",
          ".cbr — soporte con librería junrar",
          ".pdf — renderizado nativo de Android",
        ],
      },
      {
        titulo: "Interfaz",
        items: [
          "Estante de libros con planks de madera, portadas reales extraídas del archivo",
          "Navegación por carpetas y subcarpetas",
          "Lector inmersivo a pantalla completa con swipe entre páginas, scrubber de progreso arrastrable y rotación de pantalla",
          "Guarda el progreso por archivo (qué página ibas)",
          "Botón de atrás nativo de Android navega dentro de la app (lector → carpeta → raíz → minimizar)",
        ],
      },
      {
        titulo: "Filosofía técnica",
        items: [
          "Sin servidor, sin nube, sin cuenta. Todo local. Los archivos nunca se copian — se leen directamente donde están.",
        ],
      },
    ],
    seccionesEn: [
      {
        titulo: "Supported formats",
        items: [
          ".cbz — the most common, extracted via direct streaming",
          ".cbr — supported via the junrar library",
          ".pdf — native Android rendering",
        ],
      },
      {
        titulo: "Interface",
        items: [
          "Bookshelf with wooden planks and real covers extracted from each file",
          "Navigate folders and subfolders",
          "Immersive full-screen reader with page swiping, draggable progress scrubber, and screen rotation",
          "Saves reading progress per file (which page you were on)",
          "Android native back button navigates within the app (reader → folder → root → minimize)",
        ],
      },
      {
        titulo: "Technical philosophy",
        items: [
          "No server, no cloud, no account. Everything is local. Files are never copied — they're read directly where they are.",
        ],
      },
    ],
    imagen: comicShelf.src,
    tecnologias: ["HTML5", "CSS3", "JavaScript", "Capacitor 6"],
    demo: "",
    github: "https://github.com/Umario-chan/comicshelf",
    categoria: "Fullstack",
  },
];
