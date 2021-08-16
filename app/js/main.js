$(function () {
   $(document).ready(function () {
      $(window).scroll(function () {
         if ($(this).scrollTop() > 0) {
            $("#scroller").fadeIn();
         } else {
            $("#scroller").fadeOut();
         }
      });
      $("#scroller").click(function () {
         $("body,html").animate(
            {
               scrollTop: 0,
            },
            800
         );
         return false;
      });
   });

   $(".burger-anim__menu").on("click", "a", function (event) {
      event.preventDefault();
      var id = $(this).attr("href"),
         top = $(id).offset().top;
      $("body,html").animate({ scrollTop: top }, 1500);
   });


   $(".burger-anim__burger").click(function () {
      $(".burger-anim__burger, .burger-anim__menu").toggleClass("active");
      $("body").toggleClass("lock");
   });

   $(document).mouseup(function (e) {
      var $target = $(e.target);
      if (
         $target.closest(".burger-anim__menu").length == 0 &&
         $target.closest(".burger-anim__burger").length == 0
      ) {
         $(".burger-anim__burger, .burger-anim__menu").removeClass("active");
      }
   });

   $(".banner-discount__slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      fade: true,
      dots: true,
      infinite: false,
      prevArrow:
         '<button class="slick-prev"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" class="svg-inline--fa fa-chevron-left fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg></button>',
      nextArrow:
         '<button class="slick-next"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" class="svg-inline--fa fa-chevron-right fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg></button>',
      responsive: [
         {
            breakpoint: 968,
            settings: {
               arrows: false,
            },
         },
      ],
   });
});
