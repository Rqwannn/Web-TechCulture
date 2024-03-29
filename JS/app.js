window.addEventListener("scroll", function () {
    const Navbar = document.querySelector(".navbar");
    const WrapperCircleUp= document.querySelector('.WrapperCircleUp');

    if(Navbar != null){
      WrapperCircleUp.classList.toggle('SlideUpOpacity', window.scrollY > 0);
      Navbar.classList.toggle("PassScroll", window.scrollY > 0);
    }

  });

  const Menu = document.querySelector(".menu-toggle");

  if(Menu != null){
    Menu.addEventListener("click", () => {
        Menu.classList.toggle("open");
    });
  }

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
      <a href="detail-umkm1.html">
        <h2 style="text-align: start;">
          Perdagangan Nelayan Terintegrasi <span>Terbesar </span> di Indonesia
        </h2>
        <h1 class="hiddenMobile hiddenTab">ARUNA</h1>
        <p class="hiddenMobile hiddenTab">
          Membuat laut menjadi mata pencaharian yang lebih baik untuk semua. Aruna bertujuan untuk menghubungkan para nelayan skala kecil dengan eksposur global dalam mempromosikan makanan laut Indonesia yang lezat melalui kesepakatan grosir, belanja eceran, dan kemitraan bisnis.
        </p>
        <div class="btn-right">
          <img src="../Image/Button-right.png" width="40" />
        </div>
      </a>
    </div>
  </div>
  <div class="layout-half imgPenyu">
    <div class="wrapContent">
      <img src="../Image/penyu.png" style="width: 100%" />
      <div class="WrapperUMKM">
        <a href="detail-umkm1.html">
          <h1 class="hiddenWeb">ARUNA</h1>
        <p class="hiddenWeb">
          Membuat laut menjadi mata pencaharian yang lebih baik untuk semua. Aruna bertujuan untuk menghubungkan para nelayan skala kecil dengan eksposur global dalam mempromosikan makanan laut Indonesia yang lezat melalui kesepakatan grosir, belanja eceran, dan kemitraan bisnis.
        </p>
        </a>
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
      <a href="detail-umkm2.html">
        <h2 style="text-align: start">
          Pengaruh teknologi dibidang
          <span>kedokteran</span>
        </h2>
        <h1 class="hiddenMobile hiddenTab">Halodoc</h1>
        <p class="hiddenMobile hiddenTab">
          Melalui Halodoc, masyarakat dapat berbicara dengan dokter, membeli obat, dan melakukan pemeriksaan laboratorium[3]. Semuanya dilakukan melalui smartphone kapan saja dan di mana saja selama 24/7. Tujuan Halodoc adalah menyederhanakan layanan kesehatan, yang memfasilitasi akses layanan kesehatan bagi seluruh masyarakat Indonesia.
        </p>
      </a>
      <div class="btn-right">
        <img src="../Image/Button-right.png" width="40" />
      </div>
    </div>
  </div>
  <div class="layout-half imgPenyu">
    <div class="wrapContent">
      <img src="../Image/doc.png" style="width: 100%" />
      <div class="WrapperUMKM">
        <a href="detail-umkm2.html">
          <h1 class="hiddenWeb">Halodoc</h1>
          <p class="hiddenWeb">
            Melalui Halodoc, masyarakat dapat berbicara dengan dokter, membeli obat, dan melakukan pemeriksaan laboratorium[3]. Semuanya dilakukan melalui smartphone kapan saja dan di mana saja selama 24/7. Tujuan Halodoc adalah menyederhanakan layanan kesehatan, yang memfasilitasi akses layanan kesehatan bagi seluruh masyarakat Indonesia.
          </p>
        </a>
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

const CardFull3 = `            <div class="cardFull bottom-5">
<div class="wrapContent">
  <div class="layout-half toCenter CostumTabLayout">
    <div class="WrapperUMKM">
      <a href="detail-umkm3.html">
        <h2 style="text-align: start">
          <span>Belajar</span>
          sekarang lebih mudah! Dimana saja kapan saja!
        </h2>
        <h1 class="hiddenMobile hiddenTab">Ruang Guru</h1>
        <p class="hiddenMobile hiddenTab">
          Ruangguru mengembangkan berbagai layanan belajar berbasis teknologi, termasuk layanan kelas virtual, platform ujian online, video belajar berlangganan, marketplace les privat, serta konten-konten pendidikan lainnya yang bisa diakses melalui web dan aplikasi Ruangguru.
        </p>
      </a>
      <div class="btn-right">
        <img src="../Image/Button-right.png" width="40" />
      </div>
    </div>
  </div>
  <div class="layout-half imgPenyu">
    <div class="wrapContent">
      <img src="../Image/rg.png" style="width: 100%" />
      <div class="WrapperUMKM">
        <a href="detail-umkm3.html">
          <h1 class="hiddenWeb">Ruang Guru</h1>
          <p class="hiddenWeb">
            Ruangguru mengembangkan berbagai layanan belajar berbasis teknologi, termasuk layanan kelas virtual, platform ujian online, video belajar berlangganan, marketplace les privat, serta konten-konten pendidikan lainnya yang bisa diakses melalui web dan aplikasi Ruangguru.
          </p>
        </a>
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

function Oldeset(e){
    if(Old == 1){
      
        if(e.target.classList.value != "Btn-primary-active"){
          e.target.classList.add("Btn-primary-active");
          e.target.parentNode.childNodes[1].classList.remove("Btn-primary-active");
        } 

        const getCard = setCARD(3, 1);
        document.querySelector('.WrapperManipulation').innerHTML = getCard;
    
        const cardFull = document.querySelectorAll('.cardFull');
    
        cardFull.forEach( result => {
            result.style.transform = "translateY(-350%)"
        })
    
        SetAnime(cardFull);

        Old = 0;
        New = 1;
    }
}

function Newest(e){
    if(New == 1){
        if(e.target.classList.value != "Btn-primary-active"){
          e.target.classList.add("Btn-primary-active");
          e.target.parentNode.childNodes[3].classList.remove("Btn-primary-active");
        }

        const getCard = setCARD(1, 3);
        document.querySelector('.WrapperManipulation').innerHTML = getCard;
    
        const cardFull = document.querySelectorAll('.cardFull');
    
        cardFull.forEach( result => {
            result.style.transform = "translateY(-350%)"
        })
    
        SetAnime(cardFull);

        Old = 1;
        New = 0;
    }
}

const menuToggle = document.querySelector('.menu-toggle');

if(menuToggle != null){
  menuToggle.addEventListener('click', function(){
    const NavMobile = document.querySelector('.Nav-Mobile');
  
    NavMobile.classList.toggle('SlideOpen');
  });
}


let HardSkill = 1;
let Technology = 1;
let SoftSkill = 0;

const CardEdu1 = `<div class="CardTwoPart">
      <a href="../Component/detail-edu1.html">
        <h1>
          <span>7 Kebiasaan</span><br />
          Orang Sukses
        </h1>
        <p>
          Dibalik kesuksesan seseorang,mereka memiliki kebiasaan yang baik.
          Dengan memiliki habit yang baik hidup akan lebih bermakna
        </p>
        <img src="../Image/Button-right.png" />
      </a>
    </div>`;

const CardEdu2 = `<div class="CardTwoPart">
      <a href="../Component/detail-edu3.html">
        <h1>
          Tips Menjadi<br />
          <span>FullStack</span>Developer
        </h1>
          
        <p>
          Berbagi tips mengenai bagaimana cara menjadi fullstack developer pemula.
        </p>
        <img src="../Image/Button-right.png" />
      </a>
    </div>`;

const CardEdu3 = `<div class="cardFull eduFullCard">
      <a href="../Component/detail-edu2.html">
        <h1>
          Bagaimana Cara Menjadi
          <span>FullStack</span> Developer
        </h1>
        <p>
          Berbagi pengetahuan bagaimana cara menjadi seorang fullstack developer yang handal di mulai dari nol
        </p>
        <img src="../Image/Button-right.png" />

      </a>
    </div>`;

  function setCARDEdu(Start, end){
    let Card = '';
    let CardContent = '';
    if(Start == 3){
      for (let i = Start; i >= end; i--){
        
        if(i <= 2){
          CardContent += eval(`CardEdu${i}`)
        } else {
          Card += eval(`CardEdu${i}`)
        }
      }
      Card += `<div class="wrapContent WrapCardTwo">
        ${CardContent}
      </div>`
    } else if(Start == 2){
      for (let i = Start; i >= end; i--){        
          CardContent += eval(`CardEdu${i}`)
      }
      Card += `<div class="wrapContent WrapCardTwo">
        ${CardContent}
      </div>`
      Card += CardEdu3;
    } else if (Start == 1){
      for (let i = Start; i <= end; i++){
        if(i <= 2){
          CardContent += eval(`CardEdu${i}`)
        } else {
          Card += `<div class="wrapContent WrapCardTwo">
            ${CardContent}
          </div>`
          Card += eval(`CardEdu${i}`)
        }
      }
    }
    return Card;
  }

function SetAnimeEdu(CardTwoPart, WrapCardTwo, EduFullCard, Status){
  let TimeOne = 0
  let TimeTwo = 0;
  let TimeThree = 0;
  let TimeFour = 0;

  if(Status == 1){
    TimeOne = 100;
    TimeTwo = 700;
    TimeThree = 1400;
    TimeFour = 100;
  } else if (Status == 2){
    TimeOne = 1400;
    TimeTwo = 100;
    TimeThree = 700;
    TimeFour = 100;
  } else if (Status == 3){
    TimeOne = 1400;
    TimeTwo = 100;
    TimeThree = 700;
    TimeFour = 100;
  }

  setTimeout(function(){
    EduFullCard.style.transition = '0.7s';
    EduFullCard.style.transform = 'translateY(0%)';
  }, TimeOne)  

  setTimeout(function(){
    CardTwoPart[0].style.transition = '0.7s';
    CardTwoPart[0].style.transform = 'translateY(0%)';
  }, TimeTwo);

  setTimeout(function(){
    CardTwoPart[1].style.transition = '0.7s';
    CardTwoPart[1].style.transform = 'translateY(0%)';
  }, TimeThree);

  setTimeout(function(){
    WrapCardTwo.style.transition = '0.7s';
    WrapCardTwo.style.transform = 'translateY(0%)';
  }, TimeFour);
}

function getClass(){
  const data = {
    'CardTwoPart' : document.querySelectorAll('.CardTwoPart'),
    'WrapCardTwo' : document.querySelector('.WrapCardTwo'),
    'EduFullCard' : document.querySelector('.eduFullCard')
  }

  return data;
}

function HardSkillEvent(e){
  if(HardSkill == 1){
    if(e.target.parentNode.classList.value != "ActiveEduBtn"){
      const ActiveEduBtn = document.querySelectorAll('.ActiveEduBtn');

      [...ActiveEduBtn].forEach(result => {
        result.classList.remove('ActiveEduBtn');
      });

      e.target.parentNode.classList.add("ActiveEduBtn");
      e.target.childNodes[1].classList.add("ActiveEduBtn");
    }

    const getCard = setCARDEdu(3, 1);
    document.querySelector('.WrapperManipulation').innerHTML = getCard;
    
    const getNode = getClass(); 
    
    getNode.CardTwoPart.forEach(result => {
      result.style.transform = 'translateY(-300%)';
    });
    getNode.EduFullCard.style.transform = 'translateY(-300%)';
    getNode.WrapCardTwo.style.transform = 'translateY(-300%)';

    SetAnimeEdu(getNode.CardTwoPart, getNode.WrapCardTwo, getNode.EduFullCard, Status=1);

    HardSkill = 0;
    Technology = 1;
    SoftSkill = 1;
  }
}

function TechnologyEvent(e){
  if(Technology == 1){
    if(e.target.parentNode.classList.value != "ActiveEduBtn"){
      const ActiveEduBtn = document.querySelectorAll('.ActiveEduBtn');

      [...ActiveEduBtn].forEach(result => {
        result.classList.remove('ActiveEduBtn');
      });

      e.target.parentNode.classList.add("ActiveEduBtn");
      e.target.childNodes[1].classList.add("ActiveEduBtn");
    }

    const getCard = setCARDEdu(2, 1);
    document.querySelector('.WrapperManipulation').innerHTML = getCard;
    
    const getNode = getClass(); 
    
    getNode.CardTwoPart.forEach(result => {
      result.style.transform = 'translateY(-300%)';
    });
    getNode.EduFullCard.style.transform = 'translateY(-300%)';
    getNode.WrapCardTwo.style.transform = 'translateY(-300%)';

    SetAnimeEdu(getNode.CardTwoPart, getNode.WrapCardTwo, getNode.EduFullCard, Status=2);

    HardSkill = 1;
    Technology = 0;
    SoftSkill = 1;
  }
}

function SoftSkillEvent(e){
  if(SoftSkill == 1){
    if(e.target.parentNode.classList.value != "ActiveEduBtn"){
      const ActiveEduBtn = document.querySelectorAll('.ActiveEduBtn');

      [...ActiveEduBtn].forEach(result => {
        result.classList.remove('ActiveEduBtn');
      });

      e.target.parentNode.classList.add("ActiveEduBtn");
      e.target.childNodes[1].classList.add("ActiveEduBtn");
    }
    const getCard = setCARDEdu(1, 3);
    document.querySelector('.WrapperManipulation').innerHTML = getCard;
    
    const getNode = getClass(); 
    
    getNode.CardTwoPart.forEach(result => {
      result.style.transform = 'translateY(-300%)';
    });
    getNode.EduFullCard.style.transform = 'translateY(-300%)';
    getNode.WrapCardTwo.style.transform = 'translateY(-300%)';

    SetAnimeEdu(getNode.CardTwoPart, getNode.WrapCardTwo, getNode.EduFullCard, Status=2);

    HardSkill = 1;
    Technology = 1;
    SoftSkill = 0;
  }
}

function DisableLink(e){
  e.preventDefault();
}

const IconDarkInitial = document.querySelector('.Dark');

if(IconDarkInitial != null){
  IconDarkInitial.style.color = '#f0b028'
}

if(JSON.parse(localStorage.getItem('Mode'))){
  const GetData = JSON.parse(localStorage.getItem('Mode'));
  document.documentElement.style.setProperty('--primaryColor', `${GetData.ColorPrimary}`);
  document.documentElement.style.setProperty('--white', `${GetData.ColorText}`);

  if(GetData.Status == 'Light'){
    const IconLight = document.querySelector('.Light');
    IconLight.classList.remove('far');
    IconLight.classList.add('fas');
    IconLight.style.color = '#f0b028'

    const IconDark = document.querySelector('.Dark');
    IconDark.classList.remove('fas');
    IconDark.classList.add('far');
    IconDark.style.color = '#000'
  } else {

    const IconLight = document.querySelector('.Light');
    IconLight.classList.remove('fas');
    IconLight.classList.add('far');
    IconLight.style.color = '#fff'

    const IconDark = document.querySelector('.Dark');
    IconDark.classList.remove('far');
    IconDark.classList.add('fas');
    IconDark.style.color = '#f0b028'
  }
}

function LightMode(e){
  document.documentElement.style.setProperty('--primaryColor', '#f1f1f1');
  document.documentElement.style.setProperty('--white', '#000');

  e.target.classList.remove('far');
  e.target.classList.add('fas');
  e.target.style.color = '#f0b028'

  const IconDark = document.querySelector('.Dark');
  IconDark.classList.remove('fas');
  IconDark.classList.add('far');
  IconDark.style.color = '#000'

  const setData = {
    'ColorPrimary': '#f1f1f1',
    'ColorText' : '#000',
    'SunClass': 'fas fa-sun',
    'MoonClass': 'far fa-moon',
    'Status': 'Light'
  }

  localStorage.setItem('Mode', JSON.stringify(setData))
}

function DarkMode(e){
  document.documentElement.style.setProperty('--primaryColor', '#151b22');
  document.documentElement.style.setProperty('--white', '#fff');

  e.target.classList.remove('far');
  e.target.classList.add('fas');
  e.target.style.color = '#f0b028'

  const IconLight = document.querySelector('.Light');
  IconLight.classList.remove('fas');
  IconLight.classList.add('far');
  IconLight.style.color = '#fff'

  const setData = {
    'ColorPrimary': '#151b22',
    'ColorText' : '#fff',
    'SunClass': 'far fa-sun',
    'MoonClass': 'fas fa-moon',
    'Status': 'Dark'
  }

  localStorage.setItem('Mode', JSON.stringify(setData)) 
}