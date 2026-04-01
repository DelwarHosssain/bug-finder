"use strict";

// toggleSideMenu start
const toggleSideMenu = () => {
  document.body.classList.toggle("toggle-sidebar");
};
// toggleSideMenu end

// add bg to nav
if ($("nav").length) {
  const header = document.querySelector("nav");

  function toggleHeaderActive() {
    header.classList.toggle("active", window.scrollY >= 10);
  }

  // Run once on scroll
  window.addEventListener("scroll", toggleHeaderActive);

  // Run once on page load
  window.addEventListener("load", toggleHeaderActive);
}

$(document).ready(function () {
  $(".partner-carousel").owlCarousel({
    // loop: true,
    // autoplay: true,
    margin: 20,
    autoplayTimeout: 2000,
    // rtl: true,
    navText: [
      "<i class='fa-regular fa-arrow-left-long'></i>",
      "<i class='fa-regular fa-arrow-right-long'></i>",
    ],
    responsive: {
      0: {
        items: 3,
        nav: false,
        dots: false,
        dotsEach: 3,
      },
      576: {
        items: 4,
        nav: false,
        dots: false,
        dotsEach: 3,
      },
      768: {
        items: 5,
        nav: false,
        dots: false,
      },
      992: {
        items: 3,
        nav: false,
        dots: false,
      },
      1200: {
        items: 4,
        nav: true,
        dots: false,
      },
    },
  });
  // partner carousel end

  // team carousel start
  $(".team-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 30,
    autoplayTimeout: 2000,
    // rtl: true,
    navText: [
      "<i class='fa-regular fa-arrow-left-long'></i>",
      "<i class='fa-regular fa-arrow-right-long'></i>",
    ],
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: false,
        dotsEach: 3,
      },
      576: {
        items: 2,
        nav: false,
        dots: false,
        margin: 15,
      },
      768: {
        items: 2,
        nav: false,
        dots: false,
        margin: 15,
      },
      992: {
        items: 3,
        nav: false,
        dots: false,
      },
      1200: {
        items: 4,
        nav: false,
        dots: false,
      },
    },
  });
  // team carousel end

  // gallery carousel start
  $(".gallery-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 30,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    autoplaySpeed: 5500,
    slideTransition: "linear",

    navText: [
      "<i class='fa-regular fa-arrow-left-long'></i>",
      "<i class='fa-regular fa-arrow-right-long'></i>",
    ],
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: false,
        dotsEach: 3,
      },
      576: {
        items: 2,
        nav: false,
        dots: false,
        margin: 15,
      },
      768: {
        items: 2,
        nav: false,
        dots: false,
        margin: 15,
      },
      992: {
        items: 3,
        nav: false,
        dots: false,
      },
      1200: {
        items: 4,
        nav: false,
        dots: false,
      },
    },
  });
  // gallery carousel end

  // consultation swiper start
  if ($(".consultation-swiper").length) {
    var swiper = new Swiper(".consultation-swiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      grabCursor: true,
      loop: true,
      autoplay: {
        delay: 2000,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 1.5,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
        },

        992: {
          slidesPerView: 2.5,
        },

        1200: {
          slidesPerView: 2.7,
        },

        1400: {
          slidesPerView: 3,
        },
      },
    });
  }
  // consultation swiper end

  // Service swiper Start
  if ($(".service-slider-active").length) {
    var swiper = new Swiper(".service-slider-active", {
      slidesPerView: 1,
      grabCursor: true,
      loop: true,
      autoplay: {
        delay: 2000,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
  // Service swiper end

  // Installation swiper start
  if ($(".installation-swiper").length) {
    var swiper = new Swiper(".installation-swiper", {
      slidesPerView: "auto",
      spaceBetween: 118,
      grabCursor: true,
      // loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        0: {
          spaceBetween: 20,
        },
        576: {
          spaceBetween: 30,
        },
        768: {
          spaceBetween: 40,
        },
        992: {
          spaceBetween: 60,
        },
        1200: {
          spaceBetween: 118,
        },
      },
    });
  }
  // Installation swiper end

  //  Wow Animation Js Start
  new WOW().init();
  //  Wow Animation Js Start

  // Faq swiper start
  if ($(".faq-swiper").length) {
    var swiper = new Swiper(".faq-swiper", {
      slidesPerView: "auto",
      spaceBetween: 20,
      grabCursor: true,
      // loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
  // Faq swiper end

  // Testimonial swiper start
  if ($(".testimonial-swiper").length) {
    var swiper = new Swiper(".testimonial-swiper", {
      slidesPerView: 1,
      grabCursor: true,
      loop: true,
      autoplay: {
        delay: 2000,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }

  if ($(".testimonial-slider-active").length) {
    var swiper = new Swiper(".testimonial-slider-active", {
      slidesPerView: 1,
      grabCursor: true,
      loop: true,
      autoplay: {
        delay: 2000,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
  // Testimonial swiper end

  if ($(".working-process-swiper-active").length) {
    var swiper = new Swiper(".working-process-swiper-active", {
      slidesPerView: 1,
      grabCursor: true,
      loop: true,
      autoplay: {
        delay: 2000,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }

  // Hero box swiper swiper start
  if ($(".hero-box-swiper").length) {
    var swiper = new Swiper(".hero-box-swiper", {
      slidesPerView: 1,
      grabCursor: true,
      loop: true,
      autoplay: {
        delay: 2000,
      },
    });
    // Pause on hover
    $(".hero-box-swiper").on("mouseenter", function () {
      swiper.autoplay.stop();
    });
    // start on hover
    $(".hero-box-swiper").on("mouseleave", function () {
      swiper.autoplay.start();
    });
  }
  // Hero box swiper swiper end
  const verticalSwiper = new Swiper(".promo-swiper-slide", {
    direction: "vertical",
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 0,
    allowTouchMove: false,

    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },

    speed: 4000,
    freeMode: true,
    freeModeMomentum: false,
  });

  // Promo banner swiper end

  // Nice select start
  if ($(".nice-select").length) {
    $(".nice-select").niceSelect();
  }
  // Nice select end

  // cmn select2 start
  $(".cmn-select2").select2();
  // cmn select2 end

  // cmn select2 modal start
  $(".modal-select2").select2({
    dropdownParent: $("#formModal"),
  });
  // cmn select2 modal start

  // odommeter start
if ($(".odometer").length) {
  var odo = $(".odometer");

  odo.each(function () {
    $(this).appear(function () {
      var countNumber = $(this).attr("data-odometer-final");
      $(this).html(countNumber);
    });
  });
}
  // odommeter end

  // Round btn animation start
  $(function () {
    $(".round-btn")
      .on("mouseenter", function (e) {
        var parentOffset = $(this).offset(),
          relX = e.pageX - parentOffset.left,
          relY = e.pageY - parentOffset.top;
        $(this).find(".fill").css({ top: relY, left: relX });
      })
      .on("mouseout", function (e) {
        var parentOffset = $(this).offset(),
          relX = e.pageX - parentOffset.left,
          relY = e.pageY - parentOffset.top;
        $(this).find(".fill").css({ top: relY, left: relX });
      });
  });
  // Round btn animation end

  // Filepond start
  if ($(".my-pond").length) {
    $(".my-pond").filepond({
      allowMultiple: true,
      maxFiles: 5,
      maxFileSize: "5MB",
    });
  }
  // Filepond end

  // ::Todo my code
  // Wow type gsap animation Start
  if ($(".bf_fade_anim").length > 0) {
    gsap.utils.toArray(".bf_fade_anim").forEach((item) => {
      let zf_fade_offset = item.getAttribute("data-fade-offset") || 40,
        zf_duration_value = item.getAttribute("data-duration") || 0.75,
        zf_fade_direction = item.getAttribute("data-fade-from") || "bottom",
        zf_onscroll_value = item.getAttribute("data-on-scroll") || 1,
        zf_delay_value = item.getAttribute("data-delay") || 0.15,
        zf_ease_value = item.getAttribute("data-ease") || "power2.out",
        zf_anim_setting = {
          opacity: 0,
          ease: zf_ease_value,
          duration: zf_duration_value,
          delay: zf_delay_value,
          x:
            zf_fade_direction == "left"
              ? -zf_fade_offset
              : zf_fade_direction == "right"
              ? zf_fade_offset
              : 0,
          y:
            zf_fade_direction == "top"
              ? -zf_fade_offset
              : zf_fade_direction == "bottom"
              ? zf_fade_offset
              : 0,
        };
      if (zf_onscroll_value == 1) {
        zf_anim_setting.scrollTrigger = {
          trigger: item,
          start: "top 85%",
        };
      }
      gsap.from(item, zf_anim_setting);
    });
  }
});

// Tooltip
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);
// Copy text start
function copyTextFunc() {
  const element = document.querySelector(".docs-code");
  const storage = document.createElement("textarea");
  storage.value = element.innerHTML;
  element.appendChild(storage);
  storage.select();
  storage.setSelectionRange(0, 99999);
  document.execCommand("copy");
  element.removeChild(storage);
}
// Copy text end

// curved-circle start
$(window).on("load", function () {
  if ($(".curved-circle").length) {
    $(".curved-circle").circleType({
      position: "absolute",
      dir: 1,
      radius: 88,
      forceHeight: true,
      forceWidth: true,
    });
  }
});
// curved-circle end

// curved-circle2 start

$(window).on("load", function () {
  if ($(".curved-circle2").length) {
    $(".curved-circle2").circleType({
      position: "absolute",
      dir: 1,
      radius: 79,
      forceHeight: true,
      forceWidth: true,
    });
  }
});
// curved-circle2 end

// filter btn
document.addEventListener("DOMContentLoaded", function () {
  const filterBtn = document.querySelector(".product-filter-btn");
  const filterOffcanvas = document.querySelector(".filter-offcanvas");
  const closeBtn = document.querySelector(".close-brn button");
  const overlay = document.querySelector(".filter-overlay");

  function openFilter() {
    filterOffcanvas.classList.add("active");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeFilter() {
    filterOffcanvas.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  if (filterBtn) filterBtn.addEventListener("click", openFilter);
  if (closeBtn) closeBtn.addEventListener("click", closeFilter);
  if (overlay) overlay.addEventListener("click", closeFilter);
});

// input field show hide password start
if (document.querySelector(".login-register-form")) {
  const passwordBoxes = document.querySelectorAll(".password-box");
  passwordBoxes.forEach((passwordBox) => {
    const passwordInput = passwordBox.querySelector(".password");
    const passwordIcon = passwordBox.querySelector(".password-icon");

    passwordIcon.addEventListener("click", function () {
      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        passwordIcon.classList.add("fa-eye-slash");
        passwordIcon.classList.remove("fa-eye");
      } else {
        passwordInput.type = "password";
        passwordIcon.classList.add("fa-eye");
        passwordIcon.classList.remove("fa-eye-slash");
      }
    });
  });
}
// input field show hide password end

// Custom dropdown start
document.addEventListener("DOMContentLoaded", function () {
  function toggleDropdownAttributes() {
    const dropdowns = document.querySelectorAll(".custom-dropdown > a"); // Select all dropdown links

    dropdowns.forEach((dropdown) => {
      if (window.innerWidth >= 992) {
        dropdown.removeAttribute("role");
        dropdown.removeAttribute("data-bs-toggle");
        dropdown.removeAttribute("aria-expanded");
      } else {
        dropdown.setAttribute("role", "button");
        dropdown.setAttribute("data-bs-toggle", "dropdown");
        dropdown.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Run on page load
  toggleDropdownAttributes();

  // Run on window resize
  window.addEventListener("resize", toggleDropdownAttributes);
});
// Custom dropdown end

/////////////////////////////////  //
//  //////////////////////////////////
// ::Todo my code
// ScrollSmoother
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

if ($("#smooth-wrapper").length && $("#smooth-content").length) {
  gsap.config({
    nullTargetWarn: false,
  });

  let smoother = ScrollSmoother.create({
    smooth: 2,
    effects: true,
    smoothTouch: false,
    normalizeScroll: false,
    ignoreMobileResize: true,
  });
}
// ::Todo rsp
//Text Animation-1
// Disable animation below 768px
if (window.innerWidth >= 768) {
  let splitTitleLines = gsap.utils.toArray(".title-anim");

  splitTitleLines.forEach((splitTextLine) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: splitTextLine,
        start: "top 90%",
        end: "bottom 60%",
        scrub: false,
        markers: false,
        toggleActions: "play none none none",
      },
    });

    const itemSplitted = new SplitText(splitTextLine, {
      type: "words, lines",
    });

    gsap.set(splitTextLine, { perspective: 400 });

    itemSplitted.split({ type: "lines" });

    tl.from(itemSplitted.lines, {
      duration: 1,
      delay: 0.3,
      opacity: 0,
      rotationX: -80,
      force3D: true,
      transformOrigin: "top center -50",
      stagger: 0.1,
    });
  });
}

// ::Todo rsp
// Text Animation-1
if (window.innerWidth >= 768) {
  if (document.querySelectorAll(".title-anim-1").length > 0) {
    let titles = document.querySelectorAll(".title-anim-1");

    titles.forEach((title) => {
      let split = new SplitText(title, { type: "chars, words" });

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: title,
          start: "top bottom",
          toggleActions: "play none none reverse",
          onEnter: () => tl.timeScale(2.3),
          onLeaveBack: () => tl.timeScale(2.3).reverse(),
        },
      });

      tl.from(split.chars, {
        opacity: 0,
        y: 50,
        rotation: 1,
        duration: 2,
        ease: "back",
        stagger: 0.06,
      });
    });
  }
}

window.addEventListener("load", () => {
  const mdd = gsap.matchMedia();

  mdd.add("(min-width: 768px)", () => {
    let tHero = gsap.timeline();

    let heading_title = new SplitText(".sec-title-1", { type: "chars" });
    let heading_char = heading_title.chars;

    tHero.from(heading_char, {
      rotate: 20,
      ease: "back.out",
      opacity: 0,
      duration: 2,
      stagger: 0.1,
    });
  });
});

// ::Todo my code
// Hover Animation image spill
// <------------hover-effect.umd.js--------------->
if ($(".tp--hover-item").length) {
  let hoverAnimation__do = function (t, n) {
    let a = new hoverEffect({
      parent: t.get(0),
      intensity: t.data("intensity") || void 0,
      speedIn: t.data("speedin") || void 0,
      speedOut: t.data("speedout") || void 0,
      easing: t.data("easing") || void 0,
      hover: t.data("hover") || void 0,
      image1: n.eq(0).attr("src"),
      image2: n.eq(0).attr("src"),
      displacementImage: t.data("displacement"),
      imagesRatio: n[0].height / n[0].width,
      hover: !1,
    });
    t.closest(".tp--hover-item")
      .on("mouseenter", function () {
        a.next();
      })
      .on("mouseleave", function () {
        a.previous();
      });
  };
  let hoverAnimation = function () {
    $(".tp--hover-img").each(function () {
      let n = $(this);
      let e = n.find("img");
      let i = e.eq(0);
      i[0].complete
        ? hoverAnimation__do(n, e)
        : i.on("load", function () {
            hoverAnimation__do(n, e);
          });
    });
  };
  hoverAnimation();
}

// About Page sticky
let about_thumb = gsap.matchMedia();
about_thumb.add("(min-width: 992px)", () => {
  if ($(".bf-sticky-wrap").length > 0) {
    ScrollTrigger.create({
      trigger: ".bf-sticky-wrap",
      start: "top 100px",
      end: "42%",
      pin: ".bf-sticky",
      pinSpacing: true,
    });
  }
});

let feature_thumb = gsap.matchMedia();
feature_thumb.add("(min-width: 992px)", () => {
  if ($(".bf-sticky-wrap-2").length > 0) {
    ScrollTrigger.create({
      trigger: ".bf-sticky-wrap-2",
      start: "top 50px",
      end: "20%",
      pin: ".bf-sticky-2",
      pinSpacing: true,
    });
  }
});

// scroll eliment move
if (
  document.querySelectorAll(".bf-element-move-area").length > 0 &&
  window.innerWidth > 767
) {
  const boxes = document.querySelectorAll(
    ".bf-element-move-area .bf-element-move-box"
  );

  gsap.from(boxes, {
    x: "100%",
    opacity: 0,
    stagger: 0.5,
    duration: 1,
    ease: "none",
    scrollTrigger: {
      trigger: ".bf-element-move-wrapper-box",
      start: "top 125%",
      end: "bottom 80%",
      scrub: 3,
    },
  });
}

// scale Image Zoom Out Animation
let mg = gsap.matchMedia();

mg.add("(min-width: 1024px)", () => {
  var scale = document.querySelectorAll(".scale");
  var image = document.querySelectorAll(".scale img");

  scale.forEach((item) => {
    gsap.to(item, {
      scale: 1,
      duration: 1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: item,
        start: "top bottom",
        end: "bottom top",
        toggleActions: "play reverse play reverse",
      },
    });
  });

  image.forEach((image) => {
    gsap.set(image, { scale: 1.3 });
    gsap.to(image, {
      scale: 1,
      duration: 1,
      scrollTrigger: {
        trigger: image,
        start: "top bottom",
        end: "bottom top",
        toggleActions: "play reverse play reverse",
      },
    });
  });
});

mg.add("(min-width: 1024px)", () => {
  var pin_fixed = document.querySelector(".pin-element");
  if (pin_fixed && device_width > 991) {
    gsap.to(".pin-element", {
      scrollTrigger: {
        trigger: ".pin-area",
        pin: ".pin-element",
        start: "top top",
        end: "bottom bottom",
        pinSpacing: false,
      },
    });
  }

  // grow animation
  var grow = document.querySelectorAll(".grow");
  grow.forEach((item) => {
    gsap.to(item, {
      width: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: item,
        scrub: 2,
        start: "top 90%",
        end: "bottom 50%",
      },
    });
  });
});

//  Fun Fact Panel
// let my = gsap.matchMedia();
// my.add("(min-width: 1200px)", () => {
//   const wrap = document.querySelector(".gt-funfact-panel-wrap");
//   if (!wrap) return;

//   const sections = gsap.utils.toArray(".gt-funfact-panel");

//   const cardWidth = sections[0].offsetWidth + 150;
//   const visibleCards = 2;
//   const totalScrollWidth = cardWidth * (sections.length - visibleCards);

//   gsap.to(sections, {
//     x: -totalScrollWidth,
//     ease: "none",
//     scrollTrigger: {
//       trigger: wrap,
//       pin: true,
//       scrub: 1,
//       start: "top 150px",
//       end: () => "+=" + totalScrollWidth,
//     },
//   });
// });

//tp-text-invert-2 //
$(function () {
  gt_text_invert_3();
});

function gt_text_invert_2() {
  const split_2 = new SplitText(".gt_text_invert_2", { type: "lines" });
  split_2.lines.forEach((target) => {
    gsap.to(target, {
      backgroundPositionX: 0,
      ease: "none",
      scrollTrigger: {
        trigger: target,
        scrub: 1,
        start: "top 85%",
        end: "bottom center",
      },
    });
  });
}

// 40. tp-text-invert-3 //
function gt_text_invert_3() {
  const split_3 = new SplitText(".gt_text_invert_3", { type: "lines" });
  split_3.lines.forEach((target) => {
    gsap.to(target, {
      backgroundPositionX: 0,
      ease: "none",
      scrollTrigger: {
        trigger: target,
        scrub: 1,
        start: "top 85%",
        end: "bottom center",
      },
    });
  });
}

function gt_text_invert_4() {
  const split_3 = new SplitText(".gt_text_invert_4", { type: "lines" });
  split_3.lines.forEach((target) => {
    gsap.to(target, {
      backgroundPositionX: 0,
      ease: "none",
      scrollTrigger: {
        trigger: target,
        scrub: 1,
        start: "top 85%",
        end: "bottom center",
      },
    });
  });
}

// career animation
let tl = gsap.timeline();
let hr = gsap.matchMedia();

// Animation only for width >= 1200px
hr.add("(min-width: 1199px)", () => {
  let panels = document.querySelectorAll(".bf-hero-2-area");

  panels.forEach((section, index) => {
    tl.to(section, {
      scrollTrigger: {
        trigger: ".bf-hero-2-wrapper",
        pin: ".bf-hero-2-area",
        scrub: 1,
        start: "top 0",
        end: "bottom 130%",
        endTrigger: ".bf-hero-2-wrapper",
        pinSpacing: false,
        markers: false,
      },
    });
  });
});

// Hover Move Animation
const btnWraps = document.querySelectorAll(
  ".gt-hover-btn-wrapper, .gt-hover-btn-wrapper-two"
);
const strength = 0.25;
const maxMove = 60;
btnWraps.forEach((btnWrap) => {
  const container = btnWrap.closest(".move-btn");

  if (!container) return;

  container.addEventListener("mousemove", (e) => {
    const rect = container.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;

    let moveX = relX * strength;
    let moveY = relY * strength;

    moveX = Math.max(-maxMove, Math.min(maxMove, moveX));
    moveY = Math.max(-maxMove, Math.min(maxMove, moveY));

    gsap.to(btnWrap, {
      x: moveX,
      y: moveY,
      duration: 0.3,
      ease: "power3.out",
    });
  });

  container.addEventListener("mouseleave", () => {
    gsap.to(btnWrap, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "power3.out",
    });
  });
});

$(".gt-hover-btn").on("mouseenter", function (e) {
  var x = e.pageX - $(this).offset().left;
  var y = e.pageY - $(this).offset().top;

  $(this).find(".gt-btn-circle-dot").css({
    top: y,
    left: x,
  });
});

$(".gt-hover-btn").on("mouseout", function (e) {
  var x = e.pageX - $(this).offset().left;
  var y = e.pageY - $(this).offset().top;

  $(this).find(".gt-btn-circle-dot").css({
    top: y,
    left: x,
  });
});

// Toggle on sm-icon click
$(".sm-icon").on("click", function (e) {
  e.stopPropagation();
  $(".easy-contact").toggle();

  // Hide the button when panel shows
  if ($(".easy-contact").is(":visible")) {
    $(".sm-icon").hide();
  }
});

// Close button
$(".close-btn").on("click", function (e) {
  e.stopPropagation();
  $(".easy-contact").hide();

  // Show button again when panel closes
  $(".sm-icon").show();
});

// Window click hide only when screen < 576
$(document).on("click", function (e) {
  if (window.innerWidth < 576) {
    if (
      !$(e.target).closest(".easy-contact").length &&
      !$(e.target).closest(".sm-icon").length
    ) {
      $(".easy-contact").hide();

      // Show button again
      $(".sm-icon").show();
    }
  }
});
