//(Owl Carousel)======================================================\\
// $(document).ready(function(){

//     $('.team-list').owlCarousel({
//         loop:true,
//         margin:20,
//         nav:false,
//         responsive:{
//             0:{
//                 items:1
//             },
//             600:{
//                 items:1
//             },
//             1000:{
//                 items:3
//             }
//         }
//     })
// })
//=====================================================================\\


//=====================================================================\\
$(document).ready(function () {
    Shery.mouseFollower({
        //Parameters are optional.
        skew: true,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: .2
    });
})
//=====================================================================\\


//=====================================================================\\
$(document).ready(function () {
    Shery.makeMagnet(".magnet");
})
//=====================================================================\\


//=====================================================================\\
$(document).ready(function () {
    Shery.hoverWithMediaCircle('.hover', { videos: ['./img/0.mp4', './img/2.mp4', './img/3.mp4'] })
})
//=====================================================================\\

//=====================================================================\\
gsap.to('.fleftelm', {
    scrollTrigger: {
        trigger: '#fimages',
        pin: true,
        start: 'top top',
        end: 'bottom bottom',
        endTrigger: '.last',
        scrub: 1,
    },
    y: '-300%',
    ease: Power1,
})
//=====================================================================\\

//=====================================================================\\

let sections = document.querySelectorAll(".fleftelm");
Shery.imageEffect("#images", {
  style: 4,
  config: { onMouse: { value: 1 } },
  slideStyle: (setScroll) => {
    sections.forEach(function (section, index) {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        scrub: 1,
        onUpdate: function (prog) {
          setScroll(prog.progress + index);
        },
      });
    });
  },
});

//=====================================================================\\


//(wow.js)=====================================================================\\
$(document).ready(function () {
    new WOW().init();
})
//=====================================================================\\