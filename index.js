document.addEventListener("DOMContentLoaded", () => {
  const introScreen = document.getElementById("intro-screen");
  const mainContent = document.getElementById("main-content");

  // Al hacer clic en el texto "Step into the desert..."
  introScreen.addEventListener("click", () => {
    // Crear el círculo animado desde el centro
    const circle = document.createElement("div");
    circle.classList.add("fade-circle");
    introScreen.appendChild(circle);

    // Al finalizar la animación (coincidir con duración en CSS)
    setTimeout(() => {
      introScreen.style.display = "none";
      mainContent.style.display = "block";
    }, 1200); // 1.2s = duración de expandCircle
  });
});

