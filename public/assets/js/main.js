(function ($) {
  "use strict";

  /*=============================================
    	=    		 Preloader			      =
    =============================================*/
  function preloader() {
    $("#preloader").delay(0).fadeOut();
  }

  $(window).on("load", function () {
    preloader();
    wowAnimation();
  });

  /*=============================================
    	=    		Mobile Menu			      =
    =============================================*/
  //SubMenu Dropdown Toggle
  if ($(".menu-area li.menu-item-has-children ul").length) {
    $(".menu-area .navigation li.menu-item-has-children").append(
      '<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>'
    );
  }

  //Mobile Nav Hide Show
  if ($(".mobile-menu").length) {
    var mobileMenuContent = $(".menu-area .main-menu").html();
    $(".mobile-menu .menu-box .menu-outer").append(mobileMenuContent);

    //Dropdown Button
    $(".mobile-menu li.menu-item-has-children .dropdown-btn").on(
      "click",
      function () {
        $(this).toggleClass("open");
        $(this).prev("ul").slideToggle(300);
      }
    );
    //Menu Toggle Btn
    $(".mobile-nav-toggler").on("click", function () {
      $("body").addClass("mobile-menu-visible");
    });

    //Menu Toggle Btn
    $(".menu-backdrop, .mobile-menu .close-btn").on("click", function () {
      $("body").removeClass("mobile-menu-visible");
    });
  }

  /*=============================================
    	=     Menu sticky & Scroll to top      =
    =============================================*/
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 245) {
      $("#sticky-header").removeClass("sticky-menu");
      $(".scroll-to-target").removeClass("open");
      $("#header-top-fixed").removeClass("header-fixed-position");
      $("#header-fixed-height").removeClass("active-height");
    } else {
      $("#sticky-header").addClass("sticky-menu");
      $(".scroll-to-target").addClass("open");
      $("#header-top-fixed").addClass("header-fixed-position");
      $("#header-fixed-height").addClass("active-height");
    }
  });

  /*=============================================
    	=    		 Scroll Up  	         =
    =============================================*/
  if ($(".scroll-to-target").length) {
    $(".scroll-to-target").on("click", function () {
      var target = $(this).attr("data-target");
      // animate
      $("html, body").animate(
        {
          scrollTop: $(target).offset().top,
        },
        1000
      );
    });
  }

  /*=============================================
    	=          One page Menu               =
    =============================================*/
  var scrollLink = $(".section-link");
  // Active link switching
  // $(window).on("scroll", function () {
  //   var scrollbarLocation = $(this).scrollTop();

  //   scrollLink.each(function () {
  //     var sectionOffset = $(this.hash).offset().top - 90;

  //     if (sectionOffset <= scrollbarLocation) {
  //       $(this).parent().addClass("active");
  //       $(this).parent().siblings().removeClass("active");
  //     }
  //   });
  // });
  //jQuery for page scrolling feature - requires jQuery Easing plugin
  $(function () {
    $('a.section-link[href*="#"]:not([href="#"])').on("click", function () {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html, body").animate(
            {
              scrollTop: target.offset().top - 80,
            },
            1200,
            "easeInOutExpo"
          );
          return false;
        }
      }
    });
  });

  /*=============================================
    	=           Data Background             =
    =============================================*/
  $("[data-background]").each(function () {
    $(this).css(
      "background-image",
      "url(" + $(this).attr("data-background") + ")"
    );
  });

  /*=============================================
    =     Offcanvas Menu      =
    =============================================*/
  $(".menu-tigger").on("click", function () {
    $(".extra-info,.offcanvas-overly").addClass("active");
    return false;
  });
  $(".menu-close,.offcanvas-overly").on("click", function () {
    $(".extra-info,.offcanvas-overly").removeClass("active");
  });

  /*=============================================
    	=    		Brand Active		      =
    =============================================*/
  $(".brand-active").slick({
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    arrows: false,
    slidesToShow: 7,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });

  /*=============================================
    	=    		roadMap Active		      =
    =============================================*/
  $(".roadMap-active").slick({
    dots: false,
    infinite: true,
    speed: 1000,
    centerMode: true,
    centerPadding: "260px",
    autoplay: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "100px",
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          enterPadding: "0",
          centerMode: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          enterPadding: "0",
          centerMode: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          enterPadding: "0",
          centerMode: false,
        },
      },
    ],
  });

  /*=============================================
    	=    		Team Active		      =
    =============================================*/
  $(".team-active").slick({
    dots: false,
    infinite: true,
    speed: 1000,
    centerMode: true,
    centerPadding: "130px",
    autoplay: false,
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "70px",
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: "0",
          centerMode: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          centerPadding: "0",
          centerMode: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerPadding: "0",
          centerMode: false,
        },
      },
    ],
  });

  /*=============================================
    	=        Faq Active 	       =
    =============================================*/
  $(".accordion-header").on("click", function () {
    $(".accordion-item").removeClass("active"),
      $(this).parent().addClass("active");
  });

  /*=============================================
    	=    	  Countdown Active  	         =
    =============================================*/
  $("[data-countdown]").each(function () {
    var $this = $(this),
      finalDate = $(this).data("countdown");
    $this.countdown(finalDate, function (event) {
      $this.html(
        event.strftime(
          '<div class="time-count day"><span>%D</span>Days</div><div class="time-count hour"><span>%H</span>Hours</div><div class="time-count min"><span>%M</span>Minute</div><div class="time-count sec"><span>%S</span>Second</div>'
        )
      );
    });
  });

  /*=============================================
    	=    		 Wow Active  	         =
    =============================================*/
  function wowAnimation() {
    var wow = new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: false,
      live: true,
    });
    wow.init();
  }
})(jQuery);
