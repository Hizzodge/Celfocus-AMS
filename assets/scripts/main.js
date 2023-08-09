$( document ).ready(function() { 

  $("button.header--menu").click(function () {
    $('.header').toggleClass('header--active');
  });

  $(".header--navbar").on('click', 'a', function (e) { 
    $('.header').removeClass('header--active') 
  });

  $(".header--right-content").on('click', 'li', function (e) { 
    $('.header').removeClass('header--active') 
  });

  $(window).resize(function () {
    if (($(window).width() <= 992)) {
      $('.header').removeClass('header--active');
    }
  });

  $(document).mouseup(function (e) {
    if (($(window).width() > 992)) {
      var container = $(".button--language");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        $('.header--dropdown').removeClass('open');
        $('.button--language').removeClass('active');
      }
    }
  });

  $(document).mousedown(function (e) {
    if (($(window).width() > 992)) {
      var container = $(".test");
      var header = $(".header");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        $('.header').removeClass('header--active');
      }
    }
  });

  $(".nav-contacts").on("click", function (e) {
    e.preventDefault();
    const href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(href).offset().top }, 400);
  });

});

window.addEventListener('scroll', (e) => {
  const nav = document.querySelector('.header');
    if (window.scrollY > 0) {
      nav.classList.add("box-shadow--bottom");
    } else {
      nav.classList.remove("box-shadow--bottom");
    }
});

function languageDropdown() {
  if (($(window).width() > 992)) {
    $('.header--dropdown').toggleClass('open');
    $('.button--language').addClass('active');
  }
}

// document.addEventListener("DOMContentLoaded", function(event) {
//   document.addEventListener("scroll", function(event) {
//       const animatedBoxes = document.getElementsByClassName("animated-box");
//       const windowOffsetTop = window.innerHeight + window.scrollY;

//       Array.prototype.forEach.call(animatedBoxes, (animatedBox) => {
//           const animatedBoxOffsetTop = animatedBox.offsetTop;

//           if (windowOffsetTop >= animatedBoxOffsetTop) {
//               addClass(animatedBox, "fade-in");
//           }
//       });
//   });
// });

document.addEventListener("DOMContentLoaded", function(event) {
  const animatedBoxes = document.getElementsByClassName("animated-box");

  function checkScroll() {
    const windowOffsetTop = window.innerHeight + window.pageYOffset;

    Array.prototype.forEach.call(animatedBoxes, (animatedBox) => {
      const animatedBoxOffsetTop = animatedBox.offsetTop;

      if (windowOffsetTop >= animatedBoxOffsetTop) {
        animatedBox.classList.add("fade-in");
      }
    });
  }

  window.addEventListener("scroll", checkScroll);
  checkScroll();
});



function addClass(element, className) {
  const arrayClasses = element.className.split(" ");
  if (arrayClasses.indexOf(className) === -1) {
      element.className += " " + className;
  }
}