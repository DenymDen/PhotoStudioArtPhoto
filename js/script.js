$(document).ready(function () {
   $('.slider').slick({
      dots: true,
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 500,
   });
});

$(document).ready(function () {
   $('.slider2').slick({
      dots: true,
      autoplay: true,
      adaptiveHeight: true,
      autoplaySpeed: 5000,
      speed: 500,
   });
});

function scrollTo(element) {
   window.scroll({
      left: 0,
      top: element.offsetTop,
      behavior: 'smooth'
   })
}

var link = document.querySelector('.hero');
var available_packages = document.querySelector('.available_packages');

var link2 = document.querySelector('.hero');
var social_net = document.querySelector('.social-net');


link.addEventListener('click', () => {
   scrollTo(available_packages)
})

link.addEventListener('click', () => {
   scrollTo(social_net)
})

// const photographer = document.querySelectorAll('input[name="photo"]');
// const photoslide = document.querySelectorAll('div[name="slide2"]');
// const inputs = document.querySelectorAll('input')


// function ShowPhoto() {
//    for (const photo of photographer) {
//       if (photo.checked) {
//          for (const slidep of photoslide) {
//             if (photo.value == 2) {
//                // slidep.classList.add('dn');
//                console.log(slidep.index)
//             }
//          }
//       }
//    }
// }

// ShowPhoto();

// for (const input of inputs) {
//    input.addEventListener('input', function () {
//       ShowPhoto();
//    })
// }