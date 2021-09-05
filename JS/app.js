window.addEventListener("scroll", function () {
    const Navbar = document.querySelector(".navbar");
    const WrapperCircleUp= document.querySelector('.WrapperCircleUp');

    WrapperCircleUp.classList.toggle('SlideUpOpacity', window.scrollY > 0);
    Navbar.classList.toggle("PassScroll", window.scrollY > 0);
  });

  const Menu = document.querySelector(".menu-toggle");

  Menu.addEventListener("click", () => {
      Menu.classList.toggle("open");
  });

  function ScroolTop(){
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      })
  }