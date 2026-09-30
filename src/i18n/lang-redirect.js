// Se inyecta en línea en el <head> de cada página, después de los <link hreflang>,
// para redirigir antes de pintar nada.
// - Si el visitante ya eligió idioma con el botón, se respeta siempre.
// - Si no ha elegido y su navegador está en inglés, se le manda a la versión /en/.
// - Los bots nunca se redirigen: Google tiene que poder indexar las dos versiones.
(function () {
  try {
    var current = document.documentElement.lang;
    var wanted = null;
    try {
      wanted = localStorage.getItem("lang");
    } catch (e) {}
    if (wanted !== "es" && wanted !== "en") {
      if (/bot|crawl|spider|slurp|lighthouse|headless|preview/i.test(navigator.userAgent)) return;
      var browserLang = (navigator.languages && navigator.languages[0]) || navigator.language || "";
      wanted = /^en\b/i.test(browserLang) ? "en" : null;
    }
    if (!wanted || wanted === current) return;
    var alternate = document.querySelector('link[rel="alternate"][hreflang^="' + wanted + '"]');
    if (!alternate) return;
    // Solo la ruta: así funciona igual en localhost y en los previews de Vercel
    location.replace(new URL(alternate.href).pathname + location.search + location.hash);
  } catch (e) {}
})();
