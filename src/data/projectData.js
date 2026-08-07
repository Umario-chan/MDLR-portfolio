import patyRocks from "../assets/img-projects/patyrocks.png";
import altia from "../assets/img-projects/altia.jpg";
import neosis from "../assets/img-projects/neosis.png";
import comicShelf from "../assets/img-projects/comicshelf.jpeg";

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
