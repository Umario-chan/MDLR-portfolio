// Se inyecta en línea en el <head> para aplicar el tema antes de pintar y
// evitar el destello blanco.
// - Si la persona eligió tema con el botón, se respeta ("light" o "dark").
// - Si no, se sigue la preferencia del sistema.
(function () {
  function preferido() {
    try {
      var guardado = localStorage.getItem("theme");
      if (guardado === "light" || guardado === "dark") return guardado;
    } catch (e) {}
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function aplicar(root) {
    root.classList.toggle("dark", preferido() === "dark");
  }

  aplicar(document.documentElement);

  // El ClientRouter reemplaza los atributos de <html> al navegar; se vuelve a
  // aplicar el tema al documento nuevo antes de que se muestre.
  document.addEventListener("astro:before-swap", function (event) {
    aplicar(event.newDocument.documentElement);
  });

  // Sin elección guardada, seguir los cambios del sistema en vivo
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function () {
    aplicar(document.documentElement);
  });
})();
