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

//   Job Center

const CardFull1 = `<div class="cardFull bottom-5">
<div class="wrapContent">
  <div class="layout-half toCenter CostumTabLayout">
    <div class="WrapperUMKM">
      <h2 style="text-align: start">
        <span>The Largest</span> integrated Fishers commerce in
        indonesia
      </h2>
      <h1 class="hiddenMobile hiddenTab">ARUNA</h1>
      <p class="hiddenMobile hiddenTab">
        Making the Sea a Better Livelihood for All Aruna aims to
        connect the small-scale fishers to the global exposure in
        promoting the delectable seafood of Indonesia; through the
        wholesale deal, retail shopping, and business partnership.
      </p>
      <div class="btn-right">
        <img src="../Image/Button-right.png" width="40" />
      </div>
    </div>
  </div>
  <div class="layout-half imgPenyu">
    <div class="wrapContent">
      <img src="../Image/penyu.png" style="width: 100%" />
      <div class="WrapperUMKM">
        <h1 class="hiddenWeb">ARUNA</h1>
        <p class="hiddenWeb">
          Making the Sea a Better Livelihood for All Aruna aims to
          connect the small-scale fishers to the global exposure in
          promoting the delectable seafood of Indonesia; through the
          wholesale deal, retail shopping, and business partnership.
        </p>
      </div>
      <div class="btn-left">
        <img src="../Image/Button-right.png" width="40" />
      </div>
    </div>
  </div>
  <div class="layout-half imgPenyu">
    <img src="../Image/penyu.png" style="width: 90%" />
  </div>
</div>
</div>`;

const CardFull2 = `<div class="cardFull bottom-5">
<div class="wrapContent">
  <div class="layout-half toCenter CostumTabLayout">
    <div class="WrapperUMKM">
      <h2 style="text-align: start">
        <span>The Largest</span> integrated Fishers commerce in
        indonesia
      </h2>
      <h1 class="hiddenMobile hiddenTab">ARUNA</h1>
      <p class="hiddenMobile hiddenTab">
        Through Halodoc, people can talk to a doctor, buy medicine, and do laboratory tests[3]. Everything is done via smartphone anytime and anywhere for 24/7 . The goal of Halodoc is simplifying healthcare, which facilitates access to healthcare for all Indonesian people.
      </p>
      <div class="btn-right">
        <img src="../Image/Button-right.png" width="40" />
      </div>
    </div>
  </div>
  <div class="layout-half imgPenyu">
    <div class="wrapContent">
      <img src="../Image/doc.png" style="width: 100%" />
      <div class="WrapperUMKM">
        <h1 class="hiddenWeb">ARUNA</h1>
        <p class="hiddenWeb">
          Through Halodoc, people can talk to a doctor, buy medicine, and do laboratory tests[3]. Everything is done via smartphone anytime and anywhere for 24/7 . The goal of Halodoc is simplifying healthcare, which facilitates access to healthcare for all Indonesian people.
        </p>
      </div>
      <div class="btn-left">
        <img src="../Image/Button-right.png" width="40" />
      </div>
    </div>
  </div>
  <div class="layout-half imgPenyu">
    <img src="../Image/doc.png" style="width: 90%" />
  </div>
</div>
</div>`;

const CardFull3 = `<div class="cardFull bottom-5">
<div class="wrapContent">
  <div class="layout-half toCenter CostumTabLayout">
    <div class="WrapperUMKM">
      <h2 style="text-align: start">
        <span>The Largest</span> integrated Fishers commerce in
        indonesia
      </h2>
      <h1 class="hiddenMobile hiddenTab">ARUNA</h1>
      <p class="hiddenMobile hiddenTab">
        Ruangguru mengembangkan berbagai layanan belajar berbasis teknologi, termasuk layanan kelas virtual, platform ujian online, video belajar berlangganan, marketplace les privat, serta konten-konten pendidikan lainnya yang bisa diakses melalui web dan aplikasi Ruangguru.
      </p>
      <div class="btn-right">
        <img src="../Image/Button-right.png" width="40" />
      </div>
    </div>
  </div>
  <div class="layout-half imgPenyu">
    <div class="wrapContent">
      <img src="../Image/rg.png" style="width: 100%" />
      <div class="WrapperUMKM">
        <h1 class="hiddenWeb">ARUNA</h1>
        <p class="hiddenWeb">
          Ruangguru mengembangkan berbagai layanan belajar berbasis teknologi, termasuk layanan kelas virtual, platform ujian online, video belajar berlangganan, marketplace les privat, serta konten-konten pendidikan lainnya yang bisa diakses melalui web dan aplikasi Ruangguru.
        </p>
      </div>
      <div class="btn-left">
        <img src="../Image/Button-right.png" width="40" />
      </div>
    </div>
  </div>
  <div class="layout-half imgPenyu">
    <img src="../Image/rg.png" style="width: 90%" />
  </div>
</div>
</div>`

function setCARD(Start, end){
    let Card = '';
    if(Start == 1){
        for (let i = Start; i <= end; i++){
            Card += eval(`CardFull${i}`)
        }
    } else {
        for (let i = Start; i >= end; i--){
            Card += eval(`CardFull${i}`)
        }
    }
    return Card;
}

let New = 0;
let Old = 1;

function SetAnime(cardFull){
    setTimeout(function(){
        cardFull[0].style.transition = "0.7s"
        cardFull[0].style.transform = "translateY(0%)"
    },100)

    setTimeout(function(){
        cardFull[1].style.transition = "0.7s"
        cardFull[1].style.transform = "translateY(0%)"
    },800)

    setTimeout(function(){
        cardFull[2].style.transition = "0.7s"
        cardFull[2].style.transform = "translateY(0%)"
    },1500)
}

function Oldeset(){
    if(Old == 1){
        const getCard = setCARD(3, 1);
        document.querySelector('.WrapperManipulation').innerHTML = getCard;
    
        const cardFull = document.querySelectorAll('.cardFull');
    
        cardFull.forEach( result => {
            result.style.transform = "translateY(-330%)"
        })
    
        SetAnime(cardFull);

        Old = 0;
        New = 1;
    }
}

function Newest(){
    if(New == 1){
        const getCard = setCARD(1, 3);
        document.querySelector('.WrapperManipulation').innerHTML = getCard;
    
        const cardFull = document.querySelectorAll('.cardFull');
    
        cardFull.forEach( result => {
            result.style.transform = "translateY(-330%)"
        })
    
        SetAnime(cardFull);

        Old = 1;
        New = 0;
    }
}

const menuToggle = document.querySelector('.menu-toggle');

menuToggle.addEventListener('click', function(){
  const NavMobile = document.querySelector('.Nav-Mobile');

  NavMobile.classList.toggle('SlideOpen');
});