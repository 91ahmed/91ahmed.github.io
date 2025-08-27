(function ($) {
  'use strict';

  function stickMenu() {
    $(".stick").scrollToFixed({
      preFixed: function () {
        $(".menu-top").animate({
          height: 83
        }, 400, function () {
          $(this).css("overflow", "visible")
        })
      },
      postFixed: function () {
        $(".menu-top").css("overflow", "hidden").animate({
          height: 0
        }, 400)
      }
    })
  }

  function mobileMenu() {

    $('.menu-toggle-icon').on('click', function (event) {
      $(this).toggleClass('act');
      if ($(this).hasClass('act')) {
        $('.mobi-menu').addClass('act');
      }
      else {
        $('.mobi-menu').removeClass('act');
      }
    });

    $('.mobi-menu .menu-item-has-children').append('<span class="sub-menu-toggle"></span>');

    $('.sub-menu-toggle').on('click', function (event) {
      $(this).parent('li').toggleClass('open-submenu');
    });
  }

  $(function () {
    $('.lazy').Lazy({
      scrollDirection: 'vertical',
      effect: 'fadeIn',
      visibleOnly: true,
    });
  });

  function backToTop() {
    var o = $("body").width();
    o > 450 && $(window).scroll(function () {
      $(this).scrollTop() > 100 ? $(".back-to-top").fadeIn() : $(".back-to-top").fadeOut()
    }), $(".back-to-top").on('click', function () {
      return $("html, body").animate({
        scrollTop: 0
      }, 700), !1
    })
  }

  function searchForm() {
    $(".searh-toggle").on('click', function () {
      $('header .search-form').toggleClass('open-search');
    })
  }

  function scrollBar() {
    $(window).scroll(function () {
      // calculate the percentage the user has scrolled down the page
      var scrollPercent = 100 * $(window).scrollTop() / ($(document).height() - $(window).height());
      $('.top-scroll-bar').css('width', scrollPercent + "%");

    });
  }

  function theiaSticky() {
    $('.sticky-sidebar').theiaStickySidebar({
      additionalMarginTop: 70
    });
  };

  function darkLightToggle() {
    // Check if dark mode is enabled in localStorage
    if (localStorage.getItem('darkMode') === 'enabled') {
      document.body.classList.add('dark-mode');
    }

    // Handle dark/light mode toggle
    $('.dark-light-toggle').on('click', function (e) {
      e.preventDefault();

      if (document.body.classList.contains('dark-mode')) {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', null);
      } else {
        document.body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
      }
    });
  }

  $(window).load(function () {
    backToTop();
    mobileMenu();
    stickMenu();
    searchForm();
    scrollBar();
    theiaSticky();
    darkLightToggle(); // Initialize dark/light mode toggle
  });

})(jQuery);
