import patyRocks from "../assets/img-projects/patyrocks.png";
import altia from "../assets/img-projects/altia.png";
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
    titulo: "Grupo Altia Croudfounding",
    slug: "altia",
    descripcion:
      "Plataforma de crowdfunding para proyectos sociales y empresariales.",
    descripcionEn:
      "Crowdfunding platform for social and business projects.",
    imagen: altia.src,
    tecnologias: [],
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
