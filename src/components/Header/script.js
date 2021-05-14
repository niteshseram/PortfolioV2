const HamburgerBubble = () => {
  const navLinks = document.querySelector(".nav-links");
  const links = document.querySelectorAll(".nav-links li");
  const hamburger = document.querySelector(".hamburger");
  let menuOpen = false;
  if (!menuOpen) {
    navLinks.classList.toggle("open");
    hamburger.classList.toggle("open");
    menuOpen = true;
  } else {
    navLinks.classList.remove("open");
    hamburger.classList.remove("open");
    menuOpen = false;
  }
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
};

export { HamburgerBubble };
