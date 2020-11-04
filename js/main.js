$(document).ready(function () {
  var tabsItem = $(".install__link");
  var contentItem = $(".content__item")

  tabsItem.on('click', function (event) {
    var activeContent = ($(this).attr("data-target"));
    tabsItem.removeClass("install__link--active");
    contentItem.removeClass("content__item--active");
    $(activeContent).toggleClass("content__item--active");
    $(this).addClass("install__link--active");
  });

  var accordionItem = $(".accordion__header");
  var accordionContent = $(".accordion__content")

  accordionItem.on("click", function (event) {
    var activeAccordion = ($(this).attr("data-collapse"));
    if ($(activeAccordion).hasClass("accordion__content--active")) {
      accordionItem.removeClass("accordion__header--active");
      accordionContent.removeClass("accordion__content--active");
    } else {
      accordionItem.removeClass("accordion__header--active");
      accordionContent.removeClass("accordion__content--active");
      $(activeAccordion).toggleClass("accordion__content--active");
      $(this).addClass("accordion__header--active");
    }
  });

  var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    keyboard: {
      enabled: true,
      onlyInViewport: false,
      pageUpDown: true,
    },
    speed: 500,
    effect: 'coverflow',
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  })

  //Скрытое меню-1
  $(".landings-menu").mouseover(function () {
    $('.menu-1').addClass('drop-down__menu--active');
    $('.menu-2').removeClass('drop-down__menu--active');
  });
  $(".drop-down__menu").mouseout(function () {
    $('.menu-1').removeClass('drop-down__menu--active');
  });
  $(".pages-menu").mouseover(function () {
    $('.menu-2').addClass('drop-down__menu--active');
    $('.menu-1').removeClass('drop-down__menu--active');
  });
  $(".drop-down__menu").mouseout(function () {
    $('.menu-2').removeClass('drop-down__menu--active');
  });

  //Скрытое меню-2
  $(".drop-down__link--company").mouseover(function () {
    $('.menu--company').addClass('menu-company');
  });
  $(".drop-down__link--company").mouseout(function () {
    $('.menu--company').removeClass('menu-company');
  });
  $(".drop-down__link--career").mouseover(function () {
    $('.menu--career').addClass('menu-career');
  });
  $(".drop-down__link--career").mouseout(function () {
    $('.menu--career').removeClass('menu-career');
  });
  $(".drop-down__link--blog").mouseover(function () {
    $('.menu--blog').addClass('menu-blog');
  });
  $(".drop-down__link--blog").mouseout(function () {
    $('.menu--blog').removeClass('menu-blog');
  });
  $(".drop-down__link--sign-in").mouseover(function () {
    $('.menu--sign-in').addClass('menu-sign-in');
  });
  $(".drop-down__link--sign-in").mouseout(function () {
    $('.menu--sign-in').removeClass('menu-sign-in');
  });
  $(".drop-down__link--sign-up").mouseover(function () {
    $('.menu--sign-up').addClass('menu-sign-up');
  });
  $(".drop-down__link--sign-up").mouseout(function () {
    $('.menu--sign-up').removeClass('menu-sign-up');
  });
  $(".drop-down__link--password").mouseover(function () {
    $('.menu--password').addClass('menu-password');
  });
  $(".drop-down__link--password").mouseout(function () {
    $('.menu--password').removeClass('menu-password');
  });
  $(".drop-down__link--error").mouseover(function () {
    $('.menu--error').addClass('menu-error');
  });
  $(".drop-down__link--error").mouseout(function () {
    $('.menu--error').removeClass('menu-error');
  });

  /* Mobile menu */
  $(".navbar__link--landings").mouseover(function () {
    $('.angle-down--landings').addClass('angle-active');
    $('.angle-right--landings').removeClass('angle-active');
    $('.navbar__spisok-2--landings').addClass('navbar__spisok-2--active');
  });
  $(".navbar__link--landings").mouseout(function () {
    $('.angle-right--landings').addClass('angle-active');
    $('.angle-down--landings').removeClass('angle-active');
    $('.navbar__spisok-2--landings').removeClass('navbar__spisok-2--active');
  });
  $(".navbar__link-2--services").mouseover(function () {
    $('.angle-down--services').addClass('angle-active');
    $('.angle-right--services').removeClass('angle-active');
    $('.navbar__spisok-3--services').addClass('navbar__spisok-3--active');
  });
  $(".navbar__link-2--services").mouseout(function () {
    $('.angle-down--services').removeClass('angle-active');
    $('.angle-right--services').addClass('angle-active');
    $('.navbar__spisok-3--services').removeClass('navbar__spisok-3--active');
  });
  $(".navbar__link--pages").mouseover(function () {
    $('.angle-down--pages').addClass('angle-active');
    $('.angle-right--pages').removeClass('angle-active');
  });
  $(".navbar__link--pages").mouseout(function () {
    $('.angle-down--pages').removeClass('angle-active');
    $('.angle-right--pages').addClass('angle-active');
  });
  $(".navbar__link--doc").mouseover(function () {
    $('.angle-down--doc').addClass('angle-active');
    $('.angle-right--doc').removeClass('angle-active');
  });
  $(".navbar__link--doc").mouseout(function () {
    $('.angle-down--doc').removeClass('angle-active');
    $('.angle-right--doc').addClass('angle-active');
  });

  // Остановка слайдера
  $(".swiper-slide").mouseover(function () {
    mySwiper.autoplay.stop();
  });
  $(".swiper-slide").mouseout(function () {
    mySwiper.autoplay.start();
  });

  //Кнопка mobile menu
  var mobileButton = $('[data-toggle=burger]');
  var closeMobileButton = $(".close-cross");
  mobileButton.on('click', openMobile);
  closeMobileButton.on('click', closeMobile);

  function openMobile() {
    var targetMobile = $(this).attr("data-href");
    $(targetMobile).find(".navbar__bottom").addClass('navbar__bottom--visible');
    $('.menu-button').addClass('menu-button--hidden')
  };

  function closeMobile(event) {
    // Функция, с помощью которой нас не перебрасывает наверх страницы (отменяется якорная ссылка)
    event.preventDefault();
    var mobileDialog = $('.navbar__bottom');
    mobileDialog.removeClass('navbar__bottom--visible');
    $('.menu-button').removeClass('menu-button--hidden')
  };

  $(document).keyup(function (e) {
    if (e.key === "Escape") {
      closeMobile(event);
    }
  });

  //Кнопка формы
  var modalButton = $('[data-toggle=modal]');
  var closeModalButton = $(".modal__close");
  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);

  function openModal() {
    var targetModal = $(this).attr("data-href");
    $(targetModal).find(".modal__overlay").addClass('modal__overlay--visible');
    $(targetModal).find(".modal__dialog").addClass('modal__dialog--visible');
  };

  function closeModal(event) {
    // Функция, с помощью которой нас не перебрасывает наверх страницы (отменяется якорная ссылка)
    event.preventDefault();
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
  };

  $(document).keyup(function (e) {
    if (e.key === "Escape") {
      closeModal(event);
    }
  });



  // Настройка формы отправки
  $(".form").each(function () {
    $(this).validate({
      rules: {
        name: {
          required: true,
        },
        email: {
          required: true,
          email: true
        },
        password: {
          required: true,
          minlength: true,
        }
      },
      errorClass: "invalid",
      messages: {
        name: {
          required: "Provide a name",
        },
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com",
        },
        password: {
          minlength: "Provide a password."
        },
      },
    });
  });

});