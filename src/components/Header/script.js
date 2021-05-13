const HamburgerBubble = () => {
  const navLinks = document.querySelector(".nav-links");
  const links = document.querySelectorAll(".nav-links li");

  navLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
};

export { HamburgerBubble };
