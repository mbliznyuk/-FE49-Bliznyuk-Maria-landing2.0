
const swiper = new Swiper ('.swiper-container', {
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        
      loop: true,
  });

$ (document).ready(function() {
$('.burger').click(function(event) {
  $('.burger, .navigation, .logo-title').toggleClass('active');

})
})

// const burger = document.querySelector('.burger');

// burger.addEventListener('click', () => {
//   toggleBurger(
//     burger,
//     document.querySelector('.navigation'),
//     document.querySelector('.logo-title')
//   );
// });


// const toggleBurger = (...params) => {
//   params.forEach((elem) => {
//     if(elem.className.includes('active')) {
//       elem.classList.remove('active');
//     }
//     else {
//       elem.classList.add('active');
//     }
//   })
// };
