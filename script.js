
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
  const serviceCards = document.querySelectorAll('.service-card');

  const revealOnScroll = () => {
    serviceCards.forEach(card => {
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        card.classList.add('show');
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();
 const brandCards = document.querySelectorAll('.brand-card');

  const showOnScroll = () => {
    brandCards.forEach(card => {
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        card.classList.add('show');
      }
    });
  };

  window.addEventListener('scroll', showOnScroll);
  showOnScroll();
  const reveals = document.querySelectorAll(".reveal");

  window.addEventListener("scroll", () => {
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const revealTop = reveals[i].getBoundingClientRect().top;
      const revealPoint = 120;

      if (revealTop < windowHeight - revealPoint) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  });
    const revealls = document.querySelectorAll(".reveall");

  window.addEventListener("scroll", () => {
    for (let i = 0; i < revealls.length; i++) {
      const windowHeight = window.innerHeight;
      const reveallTop = revealls[i].getBoundingClientRect().top;
      const reveallPoint = 120;

      if (reveallTop < windowHeight - reveallPoint) {
        revealls[i].classList.add("active");
      } else {
        revealls[i].classList.remove("active");
      }
    }
  });

 

// dark light

