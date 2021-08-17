window.addEventListener("scroll", function () {
    const Navbar = document.querySelector(".navbar");
  
    Navbar.classList.toggle("PassScroll", window.scrollY > 0);
  });

  $(document).ready(function () {
    $('.menu-toggle').on('click', function () {
        $(this).toggleClass('open');
    });
});