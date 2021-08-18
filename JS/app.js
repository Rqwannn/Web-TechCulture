window.addEventListener("scroll", function () {
    const Navbar = document.querySelector(".navbar");
  
    Navbar.classList.toggle("PassScroll", window.scrollY > 0);
  });

  const Menu = document.querySelector(".menu-toggle");

  Menu.addEventListener("click", () => {
      Menu.classList.toggle("open");
  });