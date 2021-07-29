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
    //1500  время скролла..чем больше тем медленней
  });

  //Анимированный бургер
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
  //

  $(".banner-discount__slider").slick({
    autoplay: true,
    fade: true,
    dots: true,
    prevArrow:
      '<button class="banner-discount__slider-btn banner-discount__slider-btnprev"><img src="images/icons/arrow-left.svg" alt=""></button>',
    nextArrow:
      '<button class="banner-discount__slider-btn banner-discount__slider-btnnext"><img src="images/icons/arrow-right.svg" alt=""></button>',
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
