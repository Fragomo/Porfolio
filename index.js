document.addEventListener("DOMContentLoaded", () => {
  const introScreen = document.getElementById("intro-screen");
  const mainContent = document.getElementById("main-content");

  introScreen.addEventListener("click", () => {
    // Aplicar clase de desvanecimiento
    introScreen.classList.add("fade-out");

    // Esperar a que termine la animación para ocultar y mostrar el contenido
    setTimeout(() => {
      introScreen.style.display = "none";
      mainContent.style.display = "block";
    }, 2000); // Igual a la duración de la animación
  });
});


