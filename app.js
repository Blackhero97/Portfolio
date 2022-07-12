  window.addEventListener('scroll', function(){
   const header = document.querySelector('header');
   header.classList.toggle('sticky', window.scrollY > 0)
  });

  const sr = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 1500,
    delay: 300,
    reset: true
    })
    sr.reveal(`.twoo ,.onee ,.skills-description, .about-img,   .portfolio, .footer-one,.footer-three, .footer-two,.footer-four, .home, .tajriba-card`)
    sr.reveal(`.category-data,.about-info,.discount-date, .trick-content, .footer__content `,{interval: 100})
    sr.reveal(` `,{origin: 'left'})
    sr.reveal(`  `,{origin: 'right'})
    sr.reveal(`.three `,{origin: 'bottom'})
  

// modal animation
const serModal = document.querySelectorAll('.service-modal');
const learnbtn = document.querySelectorAll('.learn-more');
const closebtn = document.querySelectorAll('.modal-close-btn');

var modal = function(modalclik){
  serModal[modalclik].classList.add('active');
}
learnbtn.forEach((learnbtn, i) =>{
  learnbtn.addEventListener('click',()=>{
    modal(i);
  })
})
closebtn.forEach((closebtn, i) =>{
closebtn.addEventListener('click',()=>{
  serModal.forEach((modalView)=>{
    modalView.classList.remove('active')
  })
})
})

// Portfoli Animation
// const portfoliomodal = document.querySelectorAll('.portfolio-modal');
// const portfoiobody = document.querySelectorAll('.img-card');
// const portfolioclose = document.querySelectorAll('.portfolio-close-btn');

// var Portmodal = function(portclik){
//   portfoliomodal[portclik].classList.add('active');
// }
// portfoiobody.forEach((portfoiobody, i) =>{
//   portfoiobody.addEventListener('click',()=>{
//     Portmodal(i);
//   })
// })
// portfolioclose.forEach((portfolioclose, i) =>{
//   portfolioclose.addEventListener('click',()=>{
//     portfoliomodal.forEach((PortView)=>{
//     PortView.classList.remove('active')
//   })
// })
// })

const menubtn = document.querySelector('.nav-menu-btn');
const navclose = document.querySelector('.nav-close-btn');
const navigation = document.querySelector('.navigation');

menubtn.addEventListener('click', ()=>{
  navigation.classList.add('active')
});
navclose.addEventListener('click', ()=>{
  navigation.classList.remove('active')
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});