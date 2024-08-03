/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav_toggle'),
  navClose = document.getElementById('nav__close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}



/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {

  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}



/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById('header_')
  if (this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList
    .remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
/*=============== HOME SWIPER ===============*/

var swiper = new Swiper(".home-swiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// the second for ad 

// const progressCircle = document.querySelector(".autoplay-progress svg");
// const progressContent = document.querySelector(".autoplay-progress span");
// var swiper = new Swiper(".mySwiper", {
//   spaceBetween: 30,
//   centeredSlides: true,
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev"
//   },
//   on: {
//     autoplayTimeLeft(s, time, progress) {
//       progressCircle.style.setProperty("--progress", 1 - progress);
//       progressContent.textContent = `${Math.ceil(time / 1000)}s`;
//     }
//   }
// });


/*=============== SERVICES TAB ===============*/
const tabs = document.querySelectorAll('[data-target]'),
  tabContent = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target)

    tabContent.forEach(tabContents => {
      tabContents.classList.remove('services__active')
    })
    target.classList.add('services__active')


    tabs.forEach(tab => {
      tab.classList.remove('services__active')
    })
    tab.classList.add('services__active')
  })
})


/*=============== LIGHTBOX GALLERY ===============*/
const portfolioItems = document.querySelectorAll('.work__content'),
  totalPortfolioItem = portfolioItems.length;
lightbox = document.querySelector('.lightbox'),
  lightboxImg = document.querySelector('.lightbox__img'),
  lightboxCounter = document.querySelector('.caption__counter');
lightboxClose = document.querySelector('.lightbox__close');
let itemIndex = 0;

for (let i = 0; i < totalPortfolioItem; i++) {
  portfolioItems[i].addEventListener('click', function () {
    itemIndex = i;
    changeItem();
    toggleLightbox();

  })
}

function nextItem() {
  if (itemIndex === totalPortfolioItem - 1) {
    itemIndex = 0
  }

  else {
    itemIndex++
  }
  changeItem()
}

function prevItem() {
  if (itemIndex === 0) {
    itemIndex = totalPortfolioItem - 1
  }

  else {
    itemIndex--
  }
  changeItem()
}

function toggleLightbox() {
  lightbox.classList.toggle('open');

}
function changeItem() {
  imgSrc = portfolioItems[itemIndex].querySelector('.work__content img').getAttribute('src');
  lightboxImg.src = imgSrc;
  lightboxCounter.innerHTML = (itemIndex + 1) + 'of' + totalPortfolioItem
}
lightbox.addEventListener('click', function (event) {
  if (event.target === lightboxClose || event.target === lightbox) {
    toggleLightbox();
  }
})

// ScrollReveal library  allows you to easily animate elements as they enter the viewport during a scroll
ScrollReveal({
  distance: '80px',
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal('.home__data,.home__details,.about__img,.work__content,.services,.contact', { origin: 'left' });
ScrollReveal().reveal('.home__images,.experience__img,.mid-right,.about__data,.adv', { origin: 'right' });
// ScrollReveal().reveal('.services,.adv,.contact ',{origin:'top'});



// /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
// // get all sections that have an id defined
// const sections = document.querySelectorAll('section[id]');

// // add an event listener listening for scroll
// window.addEventListener('scroll', navHighlighter);

// function navHighlighter() {
//   // get current scroll position
//   let scrollY = window.pageYOffset;

//   // now we loop through sections to get height, top and ID value for each
//   sections.forEach(current => {
//     const sectionHeight = current.offsetHeight;
//     const sectionTop = current.offsetTop - 10;
//     const sectionId = current.getAttribute('id');

//     // check if current scroll position is within the section
//     if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//       document.querySelector('.nav__menu a[href*="' + sectionId + '"]').classList.add('active__link');
//     } else {
//       document.querySelector('.nav__menu a[href*="' + sectionId + '"]').classList.remove('active__link');
//     }
//   });
// }


