const nav = document.querySelector("header nav");
const menuBtn = document.querySelector(".menu-btn");
const menuLinks = document.querySelectorAll(".menu-navegacion a");

// Toggle menu solo en mobile
menuBtn.addEventListener("click", function () {
  if (window.innerWidth < 768) {
    nav.classList.toggle("menuVisible");
  }
});

// Cierra el menú al hacer clic en cualquier link
menuLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    if (window.innerWidth < 768) {
      e.preventDefault();
      const destino = this.getAttribute("href");
      nav.classList.remove("menuVisible");
      setTimeout(() => {
        window.location.href = destino;
      }, 300);
    }
  });
});
