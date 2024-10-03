/*

Template: LuxurySpa - Spa & Beauty HTML Template
Author: potenzaglobalsolutions
Design and Developed by: potenzaglobalsolutions.com

NOTE: This file contains all scripts for the actual Template.

*/

/*================================================
[  Table of contents  ]
================================================

:: Preloader
:: Menu
:: Sticky
:: Tooltip
:: Popover
:: Counter
:: Owl carousel
:: Slick slider
:: Datetime picker
:: Select2
:: Range Slider
:: Countdown
:: Swiper Animation
:: Back to top
:: Magnific Popup
:: Search bar

======================================
[ End table content ]
======================================*/
//POTENZA var

(function ($) {
  "use strict";
  var POTENZA = {};

  /*************************
  Predefined Variables
*************************/
  var $window = $(window),
    $document = $(document),
    $body = $("body"),
    $countdownTimer = $(".countdown"),
    $counter = $(".counter");
  //Check if function exists
  $.fn.exists = function () {
    return this.length > 0;
  };

  /*************************
        Preloader
  *************************/
  POTENZA.preloader = function () {
    $("#load").fadeOut();
    $("#pre-loader").delay(0).fadeOut("slow");
  };

  /*************************
      Menu
  *************************/
  POTENZA.dropdownmenu = function () {
    if ($(".navbar").exists()) {
      $(".dropdown-menu a.dropdown-toggle").on("click", function (e) {
        if (!$(this).next().hasClass("show")) {
          $(this)
            .parents(".dropdown-menu")
            .first()
            .find(".show")
            .removeClass("show");
        }
        var $subMenu = $(this).next(".dropdown-menu");
        $subMenu.toggleClass("show");
        $(this)
          .parents("li.nav-item.dropdown.show")
          .on("hidden.bs.dropdown", function (e) {
            $(".dropdown-submenu .show").removeClass("show");
          });
        return false;
      });
    }
  };

  /*************************
         Sticky
*************************/

  POTENZA.isSticky = function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 450) {
        $(".header-sticky").addClass("is-sticky");
      } else {
        $(".header-sticky").removeClass("is-sticky");
      }
    });
  };

  /*************************
       Tooltip
  *************************/
  POTENZA.Tooltip = function () {
    var tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  };

  /*************************
        Popover
  *************************/
  POTENZA.Popover = function () {
    var popoverTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="popover"]')
    );
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl);
    });
  };

  /*************************
       Counter
*************************/
  POTENZA.counters = function () {
    var counter = jQuery(".counter");
    if (counter.length > 0) {
      $counter.each(function () {
        var $elem = $(this);
        $elem.appear(function () {
          $elem.find(".timer").countTo();
        });
      });
    }
  };

  /*************************
       Owl carousel
*************************/
  POTENZA.carousel = function () {
    var owlslider = jQuery("div.owl-carousel");
    if (owlslider.length > 0) {
      owlslider.each(function () {
        var $this = $(this),
          $items = $this.data("items") ? $this.data("items") : 1,
          $loop = $this.attr("data-loop") ? $this.data("loop") : true,
          $navdots = $this.data("nav-dots") ? $this.data("nav-dots") : false,
          $navarrow = $this.data("nav-arrow") ? $this.data("nav-arrow") : false,
          $autoplay = $this.attr("data-autoplay")
            ? $this.data("autoplay")
            : true,
          $autospeed = $this.attr("data-autospeed")
            ? $this.data("autospeed")
            : 5000,
          $smartspeed = $this.attr("data-smartspeed")
            ? $this.data("smartspeed")
            : 1000,
          $autohgt = $this.data("autoheight")
            ? $this.data("autoheight")
            : false,
          $space = $this.attr("data-space") ? $this.data("space") : 30,
          $animateOut = $this.attr("data-animateOut")
            ? $this.data("animateOut")
            : false;
        $(this).owlCarousel({
          loop: $loop,
          items: $items,
          responsive: {
            0: {
              items: $this.data("xx-items") ? $this.data("xx-items") : 1,
            },
            480: {
              items: $this.data("xs-items") ? $this.data("xs-items") : 1,
            },
            768: {
              items: $this.data("sm-items") ? $this.data("sm-items") : 2,
            },
            980: {
              items: $this.data("md-items") ? $this.data("md-items") : 3,
            },
            1200: {
              items: $items,
            },
          },
          dots: $navdots,
          autoplayTimeout: $autospeed,
          smartSpeed: $smartspeed,
          autoHeight: $autohgt,
          margin: $space,
          nav: $navarrow,
          navText: [
            "<i class='fas fa-chevron-left'></i>",
            "<i class='fas fa-chevron-right'></i>",
          ],
          autoplay: $autoplay,
          autoplayHoverPause: true,
        });
      });
    }
  };

  /*************************
        Slick slider
*************************/
  POTENZA.slickslider = function () {
    if ($(".slider-for").exists()) {
      $(".slider-for").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        asNavFor: ".slider-nav",
      });
      $(".slider-nav").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: ".slider-for",
        dots: false,
        centerMode: true,
        focusOnSelect: true,
      });
    }
  };

  /*************************
      datetime picker
  *************************/
  POTENZA.datetimepickers = function () {
    if ($(".datetimepickers").exists()) {
      $("#datetimepicker-01, #datetimepicker-02").datetimepicker({
        format: "L",
      });
      $("#datetimepicker-03, #datetimepicker-04").datetimepicker({
        format: "LT",
      });
    }
  };

  /*************************
      Select2
  *************************/
  POTENZA.select2 = function () {
    if ($(".basic-select").exists()) {
      var select = jQuery(".basic-select");
      if (select.length > 0) {
        $(".basic-select").select2({ dropdownCssClass: "bigdrop" });
      }
    }
  };

  /*************************
      Range Slider
*************************/
  POTENZA.rangesliders = function () {
    if ($(".property-price-slider").exists()) {
      var rangeslider = jQuery(".rangeslider-wrapper");
      $("#property-price-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 10000,
        from: 1000,
        to: 8000,
        prefix: "$",
        hide_min_max: true,
        hide_from_to: false,
      });
    }
  };

  /*************************
           Countdown
  *************************/
  POTENZA.countdownTimer = function () {
    if ($countdownTimer.exists()) {
      $countdownTimer.downCount({
        date: "12/31/2024 12:00:00", // Month/Date/Year HH:MM:SS
        offset: -4,
      });
    }
  };

  /*************************
   Swiper Animation
*************************/
  POTENZA.swiperAnimation = function () {
    var siperslider = jQuery(".swiper-container");
    if (siperslider.length > 0) {
      var swiperAnimation = new SwiperAnimation();
      var swiper = new Swiper(".swiper-container", {
        init: true,
        direction: "horizontal",
        effect: "slide",
        loop: true,

        keyboard: {
          enabled: true,
          onlyInViewport: true,
        },
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
          clickable: true,
        },
        // Navigation arrows
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        on: {
          init: function () {
            swiperAnimation.init(this).animate();
          },
          slideChange: function () {
            swiperAnimation.init(this).animate();
          },
        },
      });
    }
  };

  /*************************
     Back to top
*************************/
  POTENZA.goToTop = function () {
    var $goToTop = $("#back-to-top");
    $goToTop.hide();
    $window.scroll(function () {
      if ($window.scrollTop() > 100) $goToTop.fadeIn();
      else $goToTop.fadeOut();
    });
    $goToTop.on("click", function () {
      $("body,html").animate(
        {
          scrollTop: 0,
        },
        1000
      );
      return false;
    });
  };

  /*************************
     Search bar
*************************/
  POTENZA.searchbar = function () {
    if ($("#search").exists()) {
      $('a[href="#search"]').on("click", function (event) {
        event.preventDefault();
        $("#search").addClass("open");
        $('#search > form > input[type="search"]').focus();
      });
      $("#search, #search button.close").on("click keyup", function (event) {
        if (
          event.target == this ||
          event.target.className == "close" ||
          event.keyCode == 27
        ) {
          $(this).removeClass("open");
        }
      });
      //Do not include! This prevents the form from submitting for DEMO purposes only!
      $("form").submit(function (event) {
        event.preventDefault();
        return false;
      });
    }
  };

  /*************************
      Magnific Popup
  *************************/
  POTENZA.mediaPopups = function () {
    if (
      $(".popup-single").exists() ||
      $(".popup-gallery").exists() ||
      $(".modal-onload").exists() ||
      $(".popup-youtube, .popup-vimeo, .popup-gmaps").exists()
    ) {
      if ($(".popup-single").exists()) {
        $(".popup-single").magnificPopup({
          type: "image",
        });
      }
      if ($(".popup-gallery").exists()) {
        $(".popup-gallery").magnificPopup({
          delegate: "a.portfolio-img",
          type: "image",
          tLoading: "Loading image #%curr%...",
          mainClass: "mfp-img-mobile",
          gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
          },
        });
      }
      if ($(".popup-youtube, .popup-vimeo, .popup-gmaps").exists()) {
        $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
          disableOn: 700,
          type: "iframe",
          mainClass: "mfp-fade",
          removalDelay: 160,
          preloader: false,
          fixedContentPos: false,
        });
      }
      var $modal = $(".modal-onload");
      if ($modal.length > 0) {
        $(".popup-modal").magnificPopup({
          type: "inline",
        });
        $(document).on("click", ".popup-modal-dismiss", function (e) {
          e.preventDefault();
          $.magnificPopup.close();
        });
        var elementTarget = $modal.attr("data-target");
        setTimeout(function () {
          $.magnificPopup.open(
            {
              items: {
                src: elementTarget,
              },
              type: "inline",
              mainClass: "mfp-no-margins mfp-fade",
              closeBtnInside: !0,
              fixedContentPos: !0,
              removalDelay: 500,
            },
            0
          );
        }, 1500);
      }
    }
  };

  /*************************
      Animated circle text
  *************************/
  POTENZA.animatedcircletext = function () {
    const text = document.querySelector(".text");
    text.innerHTML = text.innerText
      .split("")
      .map(
        (char, i) =>
          `<span style="transform:rotate(${i * 11.3}deg)">${char}</span>`
      )
      .join("");
  };

  /*************************
     Qty
    *************************/
  POTENZA.qty = function () {
    $(document).ready(function () {
      $(".minus").click(function () {
        var $input = $(this).parent().find("input");
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
      });
      $(".plus").click(function () {
        var $input = $(this).parent().find("input");
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
      });
    });
  };

  /****************************************************
       POTENZA Window load and functions
  ****************************************************/
  //Window load functions
  $window.on("load", function () {
    POTENZA.preloader();
  });
  //Document ready functions
  $document.ready(function () {
    POTENZA.counters(),
      POTENZA.slickslider(),
      POTENZA.datetimepickers(),
      POTENZA.select2(),
      POTENZA.dropdownmenu(),
      POTENZA.isSticky(),
      POTENZA.goToTop(),
      POTENZA.countdownTimer(),
      POTENZA.rangesliders(),
      POTENZA.Tooltip(),
      POTENZA.Popover(),
      POTENZA.swiperAnimation(),
      POTENZA.searchbar(),
      POTENZA.mediaPopups(),
      POTENZA.carousel(),
      POTENZA.animatedcircletext(),
      POTENZA.qty();
  });
})(jQuery);

// =======================================================================
// products
const products = [
  {
    id: 1,
    name: "Set of Skincare",
    mrp: 24.99,
    sellingPrice: 12.99,
    images: ["images/shop/01.jpg", "images/shop/01.jpg"],
  },
  {
    id: 2,
    name: "Monstera",
    mrp: 35.9,
    sellingPrice: 28.72,
    images: ["images/shop/02.jpg", "images/shop/02.jpg"],
  },
  {
    id: 3,
    name: "Cinnamon Soap",
    mrp: 12.72,
    sellingPrice: 12.72,
    images: ["images/shop/03.jpg", "images/shop/03.jpg"],
  },
  {
    id: 4,
    name: "Body Care",
    mrp: 13.7,
    sellingPrice: 13.7,
    images: ["images/shop/04.jpg", "images/shop/04.jpg"],
  },
  {
    id: 5,
    name: "Personal Care Kit",
    mrp: 35.9,
    sellingPrice: 17.72,
    images: ["images/shop/05.jpg", "images/shop/05.jpg"],
  },
  {
    id: 6,
    name: "lavender bottle oil",
    mrp: 25.9,
    sellingPrice: 18.72,
    images: ["images/shop/06.jpg", "images/shop/06.jpg"],
  },
  {
    id: 7,
    name: "Body Scrub",
    mrp: 33.99,
    sellingPrice: 18.5,
    images: ["images/shop/07.jpg", "images/shop/07.jpg"],
  },
  {
    id: 8,
    name: "Oil for Face",
    mrp: 33.99,
    sellingPrice: 11.77,
    images: ["images/shop/08.jpg", "images/shop/08.jpg"],
  },
  {
    id: 9,
    name: "Cosmetic Products",
    mrp: 25.9,
    sellingPrice: 18.72,
    images: ["images/shop/09.jpg", "images/shop/09.jpg"],
  },
  {
    id: 10,
    name: "Personal Care",
    mrp: 23.99,
    sellingPrice: 11.7,
    images: ["images/shop/10.jpg", "images/shop/10.jpg"],
  },
  {
    id: 11,
    name: "Brush With Handle",
    mrp: 23.99,
    sellingPrice: 11.7,
    images: ["images/shop/11.jpg", "images/shop/11.jpg"],
  },
  {
    id: 12,
    name: "Set of Skincare",
    mrp: 23.99,
    sellingPrice: 11.7,
    images: ["images/shop/12.jpg", "images/shop/12.jpg"],
  },
];
// =======================================================================
// products

const productsContainer = document.querySelector(".home-product-sec");
const productsShopContainer = document.querySelector(".product.shop-product");
const owlProducts = document.querySelector(".owl-carousel.product");
const allProductsContainer = document.querySelectorAll(".product");
const cartList = document.querySelector(".cart-list");
const cartCount = document.querySelector(".cart-count");
const wishlistCount = document.querySelector(".wishlist-count");
const wishlistProductSec = document.querySelector(".wishlist-product-sec");
const cartTotal = document.querySelector(".cart-total");
const shippingForm = document.getElementById("shippingForm");
const cartDetailsSubtotal = document.querySelector("#cart-details-subtotal");
const cartDetailsTotal = document.querySelector("#cart-details-total");
const productDetailsSec = document.querySelector(".shop-single");

// =======================================================================
// Array to store all added products

// Function to update localStorage with the latest cart data
function getCartProducts() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}
let productAll = getCartProducts();

const saveCartToLocalStorage = () => {
  localStorage.setItem("cart", JSON.stringify(productAll));
};

function updateCartCount() {
  cartCount && (cartCount.innerHTML = productAll.length);
}
updateCartCount();

// =======================================================================
// product content
productsContainer && (productsContainer.innerHTML = "");
productsShopContainer && (productsShopContainer.innerHTML = "");
owlProducts && (owlProducts.innerHTML = "");
cartList && (cartList.innerHTML = "");

function productItem(id, name, images, mrp, sellingPrice) {
  const product = document.createElement("div");
  product.classList = "product-item";
  product.dataset.id = id;
  product.dataset.name = name;
  product.dataset.mrp = mrp;
  product.dataset.sellingPrice = sellingPrice;
  product.dataset.images = images[0];

  const mrpFixed = parseFloat(mrp).toFixed(2);
  const sellingPriceFixed = parseFloat(sellingPrice).toFixed(2);

  const priceDetails =
    mrpFixed === sellingPriceFixed
      ? `<p>$${sellingPriceFixed}</p>`
      : `<p><span class="me-2">$${mrpFixed}</span>$${sellingPriceFixed}</p>`;

  product.innerHTML = `
            <div class="product-image thumbnail-bg">
              <img class="img-fluid" src="${images[0]}" alt="image">
              <div class="custom-icon">
                <ul class="list-unstyled">
                  <li>
                    <a href="#" class="wishlist-btn"><i class="far fa-heart"></i></a>
                  </li>
                  <li>
                    <a href="#" class="cart-btn cart-submit">
                      <span><i class="fas fa-shopping-cart"></i></span>
                      <div class="cart">
                          <svg viewBox="0 0 36 26">
                              <polyline points="1 2.5 6 2.5 10 18.5 25.5 18.5 28.5 7.5 7.5 7.5"></polyline>
                              <polyline points="15 13.5 17 15.5 22 10.5"></polyline>
                          </svg>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="product-content">
              <div class="product-info">
                <div class="product-title">
                  <a href="shop-single.html">${name}</a>
                </div>
                <div class="product-star">
                  <ul class="list-unstyled">
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="far fa-star-half-alt"></i></li>
                    <li><i class="far fa-star-half-alt"></i></li>
                  </ul>
                </div>
              </div>
              <a href="#" class="category">Beauty</a>
              <div class="product-prize">
                  ${priceDetails}
              </div>
            </div>`;

  return product;
}

// =======================================================================
// product content

// =======================================================================
// adding product items
products.slice(0, 10).forEach((currProduct) => {
  const product = productItem(
    currProduct.id,
    currProduct.name,
    currProduct.images,
    currProduct.mrp,
    currProduct.sellingPrice
  );

  productsContainer?.appendChild(product);
});

products.forEach((currProduct) => {
  const product = productItem(
    currProduct.id,
    currProduct.name,
    currProduct.images,
    currProduct.mrp,
    currProduct.sellingPrice
  );

  productsShopContainer?.appendChild(product);
});

// carousel products add
products
  .slice(8, 12)
  .reverse()
  .forEach((currProduct) => {
    const product = productItem(
      currProduct.id,
      currProduct.name,
      currProduct.images,
      currProduct.mrp,
      currProduct.sellingPrice
    );

    const carouselItem = document.createElement("div");
    carouselItem.classList.add("item");
    carouselItem?.appendChild(product);

    owlProducts?.appendChild(carouselItem);
  });

// =======================================================================
// adding product items

// =======================================================================
// add to cart content
function cartItemContent(id, name, images, mrp, sellingPrice, quantity = 1) {
  const cartItem = document.createElement("li");
  cartItem.classList.add("d-flex", "cart-item");
  cartItem.dataset.id = id;
  cartItem.dataset.name = name;
  cartItem.dataset.images = images;
  cartItem.dataset.mrp = mrp;
  cartItem.dataset.sellingPrice = sellingPrice;

  const mrpFixed = parseFloat(mrp).toFixed(2);
  const sellingPriceFixed = parseFloat(sellingPrice).toFixed(2);

  const finalprice =
    mrpFixed === sellingPriceFixed
      ? `$${sellingPriceFixed}`
      : `<del class="me-2">$${mrpFixed}</del>$${sellingPriceFixed}`;

  cartItem.innerHTML = `
              <a class="remove-item" href="#"><i class="fas fa-times"></i></a>
              <img class="img-fluid me-3" src="${images}" alt="">
              <div class="cart-info">
              <a href="shop-single.html">${name}</a>
              <span class="d-block">${finalprice}</span>
              <div class="mt-1 quantity">Qty: ${quantity}</div>
              </div>`;

  return cartItem;
}

// const cart-item
// function cartItemCheck(){

// }

const cartDetails = document.querySelector("#cart-products-wrap");

function emptyCartContent() {
  const emptyCartLi = document.createElement("li");
  const emptyCartDiv = document.createElement("div");

  emptyCartLi.classList = "d-block text-center empty-content mx-auto";
  emptyCartDiv.classList = "d-block text-center empty-content mx-auto";

  const emptyCart = `
            <svg
                clip-rule="evenodd"
                fill-rule="evenodd"
                height="150"
                stroke-linejoin="round"
                stroke-miterlimit="2"
                viewBox="0 0 64 64"
                width="150"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Exp-1.-O">
                  <g fill="#8ac9b3">
                    <path
                      d="m27.815 20.643c.803-.319 1.717-.539 2.731-.641.275-.027.475-.272.448-.547-.028-.274-.273-.475-.547-.448-1.115.112-2.119.356-3.001.707-.257.101-.382.392-.28.649.102.256.393.382.649.28z"
                    />
                    <path
                      d="m32.996 19.983c1.182.089 2.264.108 3.252.066.276-.011.491-.244.479-.52-.011-.276-.245-.49-.52-.479-.953.04-1.996.021-3.136-.065-.275-.02-.515.186-.536.461-.021.276.186.516.461.537z"
                    />
                    <path
                      d="m38.948 19.753c1.166-.219 2.155-.543 2.986-.942.249-.12.354-.419.234-.667-.119-.249-.418-.354-.667-.235-.762.366-1.669.661-2.738.862-.271.051-.45.312-.399.584.051.271.313.449.584.398z"
                    />
                    <path
                      d="m43.972 17.422c.896-.865 1.422-1.861 1.659-2.874.063-.269-.105-.538-.373-.601-.269-.063-.538.105-.601.373-.196.841-.636 1.665-1.379 2.382-.199.192-.205.509-.013.707.192.199.508.205.707.013z"
                    />
                    <path
                      d="m45.393 11.105c-.397-1.054-1.07-1.949-1.89-2.515-.227-.156-.538-.099-.695.128s-.1.539.128.696c.663.457 1.2 1.189 1.521 2.043.097.258.385.389.644.292.258-.097.389-.386.292-.644z"
                    />
                    <path
                      d="m32.365 8.588c.549-2.576 2.737-3.829 4.315-3.838.518-.003.967.119 1.2.431.138.185.18.433.127.737-.047.272.136.531.408.578s.531-.136.578-.408c.108-.625-.028-1.126-.312-1.505-.397-.533-1.125-.838-2.006-.833-1.921.011-4.62 1.494-5.288 4.63-.058.27.114.535.384.593s.536-.115.594-.385z"
                    />
                    <path
                      d="m31.391 8.59c.677 3.12 3.366 4.596 5.282 4.608.949.005 1.718-.348 2.094-.959.227-.368.326-.837.22-1.41-.13-.705-.594-1.608-1.565-2.68-.185-.205-.502-.221-.706-.036-.205.186-.221.502-.035.707.676.747 1.077 1.384 1.253 1.919.133.408.13.735-.018.976-.134.217-.374.348-.663.42-.363.09-.798.083-1.257-.014-1.467-.31-3.149-1.537-3.627-3.743-.059-.27-.325-.441-.595-.383-.27.059-.441.325-.383.595z"
                    />
                  </g>
                  <path
                    d="m31.744 9.484h6.695c.552 0 1-.448 1-1s-.448-1-1-1h-6.695c-.552 0-1 .448-1 1s.448 1 1 1z"
                    fill="#8ac9b3"
                  />
                  <path
                    d="m11.5 48.52v5.609c0 1.104.724 2.077 1.782 2.394 4.018 1.206 15.32 4.597 18 5.4.468.141.968.141 1.436 0 2.68-.803 13.982-4.194 18-5.4 1.058-.317 1.782-1.29 1.782-2.394 0-2.67 0-7.997 0-7.997 0-.276-.224-.5-.5-.5s-.5.224-.5.5v7.997c0 .662-.435 1.246-1.069 1.437-4.018 1.205-15.321 4.596-18 5.4-.281.084-.581.084-.862 0l-18-5.4c-.634-.191-1.069-.775-1.069-1.437v-5.609c0-.276-.224-.5-.5-.5s-.5.224-.5.5z"
                    fill="#8ac9b3"
                  />
                  <path
                    d="m10.336 37.19s-2.532 3.754-3.826 5.672c-.263.39-.328.882-.174 1.327.153.445.506.793.954.938l17.995 5.847c.636.206 1.331-.032 1.706-.585 1.341-1.98 5.423-8.002 5.423-8.002.088-.13.11-.294.059-.443s-.169-.265-.319-.313l-20-6.49c-.262-.085-.544.059-.63.322-.085.262.059.544.322.63l19.367 6.284s-5.05 7.451-5.05 7.451c-.125.184-.357.264-.569.195 0 0-17.995-5.847-17.995-5.847-.149-.049-.267-.164-.318-.313-.051-.148-.029-.312.058-.442l3.826-5.672c.155-.229.094-.54-.135-.694-.228-.155-.539-.094-.694.135z"
                    fill="#8ac9b3"
                  />
                  <path
                    d="m49.001 36.064-17.155 5.567c-.263.085-.407.367-.322.63.086.262.368.406.63.321l17.155-5.566c.263-.085.407-.368.322-.63-.086-.263-.368-.407-.63-.322z"
                    fill="#8ac9b3"
                  />
                  <path
                    d="m33.002 44.476s2.901 4.28 4.007 5.913c.375.553 1.07.791 1.706.585 2.949-.958 14.196-4.613 17.995-5.847.448-.145.801-.493.954-.938.154-.445.089-.937-.174-1.327-1.568-2.325-5.075-7.525-5.075-7.525-.155-.228-.466-.289-.695-.135-.228.155-.289.466-.135.695 0 0 3.508 5.199 5.076 7.524.087.13.109.294.058.442-.051.149-.169.264-.318.313 0 0-17.995 5.847-17.995 5.847-.212.069-.444-.011-.569-.195l-4.007-5.913c-.155-.229-.466-.288-.695-.133-.228.154-.288.466-.133.694z"
                    fill="#8ac9b3"
                  />
                  <path
                    d="m15.192 35.104 16.963-5.522c.149-.049.267-.165.318-.314s.029-.313-.06-.443c0 0-3.592-5.283-4.841-7.12-.375-.551-1.069-.789-1.704-.583l-17.996 5.847c-.448.146-.801.493-.955.939-.153.445-.088.936.175 1.327 1.444 2.141 4.493 6.662 4.493 6.662.155.228.466.289.695.134.228-.154.289-.465.135-.694 0 0-3.05-4.52-4.494-6.661-.088-.131-.109-.294-.058-.443.051-.148.169-.264.318-.313 0 0 17.996-5.847 17.996-5.847.212-.069.443.011.568.194 0 0 4.467 6.57 4.467 6.57s-16.329 5.316-16.329 5.316c-.263.085-.406.368-.321.63.086.262.368.406.63.321z"
                    fill="#8ac9b3"
                  />
                  <path
                    d="m31.845 29.582 20 6.51c.212.069.445-.01.57-.195 0 0 3.049-4.521 4.493-6.662.263-.391.328-.882.175-1.327-.154-.446-.507-.793-.955-.939l-17.996-5.847c-.635-.206-1.329.032-1.704.583l-3.498 5.144c-.155.229-.096.54.132.695.229.155.54.096.695-.132l3.498-5.145c.125-.183.356-.263.568-.194 0 0 17.996 5.847 17.996 5.847.149.049.267.165.318.313.051.149.03.312-.058.443l-4.283 6.349s-19.641-6.394-19.641-6.394c-.263-.086-.545.058-.63.321-.086.262.058.544.32.63z"
                    fill="#8ac9b3"
                  />
                  <path
                    d="m47.147 35.615-15.147 4.914s-15.147-4.914-15.147-4.914 15.147-4.931 15.147-4.931z"
                    fill="#8ac9b3"
                  />
                  <path
                    d="m26.998 29.06c-.269-.379-.5-.76-.694-1.141-.125-.246-.426-.344-.672-.218-.246.125-.344.426-.219.672.215.423.471.846.77 1.267.16.225.472.277.697.118.225-.16.278-.473.118-.698z"
                    fill="#8ac9b3"
                  />
                  <path
                    d="m25.611 25.839c-.09-.57-.094-1.127-.015-1.661.04-.273-.149-.527-.422-.567s-.527.149-.568.422c-.092.63-.089 1.288.017 1.961.043.273.299.459.572.416.272-.043.459-.299.416-.571z"
                    fill="#8ac9b3"
                  />
                </g>
              </svg>
              <h4 class="mt-4 mb-3">Your Cart is Empty</h4>
              <p>Before proceeding to checkout, you must add some products to your shopping cart. You will find a lot of interesting products on our "Shop" page.</p>
              <a href="shop.html" class="btn btn-primary animated4 appointment fadeInUp animated my-3" data-swiper-animation="fadeInUp" data-duration="3s" data-delay="0.25s" style="visibility: visible; animation-duration: 3s; animation-delay: 0.25s;">Shop Now
                <i class="fas fa-arrow-right ms-2"></i>
              </a>`;

  emptyCartLi.innerHTML = emptyCart;

  emptyCartDiv.innerHTML = emptyCart;

  if (productAll.length === 0) {
    document.querySelector(".cart-footer")?.classList.add("d-none");

    cartList?.appendChild(emptyCartLi);

    cartDetails?.classList.add("px-4", "px-md-5", "py-5");
    cartDetails?.nextElementSibling.classList.add("d-none");

    cartDetails && (cartDetails.innerHTML = "");
    cartDetails && cartDetails.appendChild(emptyCartDiv);
  } else {
    document.querySelector(".cart-footer")?.classList.remove("d-none");

    // Remove empty content if present
    cartDetails?.nextElementSibling.classList.remove("d-none");
    document
      .querySelectorAll(".empty-content")
      .forEach((empty) => empty.remove());
  }
}

// =======================================================================
// add to cart content

const existingCartProducts = document.querySelectorAll(".cart-item");

// Function to render the product in the cart
const renderCartItem = (productData) => {
  const product = cartItemContent(
    productData.id,
    productData.name,
    productData.images,
    productData.mrp,
    productData.sellingPrice
  );

  // const existingCartProducts = cartList?.children;

  // Array.from(existingCartProducts)?.forEach((currProduct) => {
  //   console.log(currProduct);
  // });
  existingCartProducts.forEach((currCartProduct) => {
    productAll.forEach((currStorageProduct) => {
      if (currCartProduct.dataset.id === currStorageProduct.id) {
        console.log(currCartProduct);

        currCartProduct.remove();
      }
    });
  });

  cartList?.appendChild(product);
};

// add to cart click
allProductsContainer.forEach((currProductSec) => {
  currProductSec.addEventListener("click", (e) => {
    const productItemBtn = e.target.closest(".cart-btn");
    if (!productItemBtn) return;

    e.preventDefault();
    const productItem = e.target.closest(".product-item");

    // Extract product details from the data attributes
    const productData = {
      id: productItem.dataset.id,
      name: productItem.dataset.name,
      images: productItem.dataset.images,
      mrp: productItem.dataset.mrp,
      sellingPrice: parseFloat(productItem.dataset.sellingPrice),
      quantity: 1,
    };

    productAll = getCartProducts();
    // Check if the product is already in the cart
    const existingProduct = productAll.find(
      (item) => item.id === productData.id
    );

    // cartList.querySelector(`[data-id="${existingProduct.id}"`).remove();
    if (existingProduct) {
      // If the product is already in the cart, increase the quantity
      existingProduct.quantity += 1;

      // Update the quantity in the DOM
      const cartItem = cartList.querySelector(
        `.cart-item[data-id="${existingProduct.id}"] .quantity`
      );
      cartItem.textContent = `Qty: ${existingProduct.quantity}`;
    } else {
      // If the product is not in the cart, add it to the cart
      renderCartItem(productData);
      productAll.push(productData);
    }

    calculateCartTotal();
    updateCartCount();
    emptyCartContent();
    shippingCalc();
    saveCartToLocalStorage();
    cleanuUpDom();
  });
});

function cleanuUpDom() {
  productAll = getCartProducts();
  wishlistAll = getWishlistProducts();
  let cartPIds = productAll.map(function (prd) {
    return prd.id;
  });
  let wishlistPIds = wishlistAll.map(function (prd) {
    return prd.id;
  });

  cartList.querySelectorAll(".cart-item").forEach(function (el) {
    let cartProdId = el.dataset.id;
    if (!cartPIds.includes(cartProdId)) {
      el.remove();
    }
  });

  document.querySelectorAll(".product-item").forEach(function (el) {
    let prodId = el.dataset.id;
    if (!wishlistPIds.includes(prodId)) {
      el.querySelector(".wishlist-btn").classList.remove("wishlist-active");
    } else {
      el.querySelector(".wishlist-btn").classList.add("wishlist-active");
    }
  });
}

// =======================================================================
// calculate total price of the cart
function calculateCartTotal() {
  const total = productAll.reduce((sum, product) => {
    return sum + product.sellingPrice * product.quantity;
  }, 0);

  cartTotal && (cartTotal.innerHTML = `$${total.toFixed(2)}`);
  cartDetailsSubtotal &&
    (cartDetailsSubtotal.innerHTML = `$${total.toFixed(2)}`);

  return total;
}

function shippingCalc() {
  const total = calculateCartTotal();

  const selectedShipping = document.querySelector(
    'input[name="shippingMethod"]:checked'
  )?.value;

  const newTotalPrice = total + parseFloat(selectedShipping);

  cartDetailsTotal &&
    (cartDetailsTotal.textContent =
      productAll.length === 0 ? "$0.00" : `$${newTotalPrice.toFixed(2)}`);
}

shippingForm?.addEventListener("change", shippingCalc);

// =======================================================================
// remove from cart
function productRemove(e, removeBtnName) {
  const removeBtn = e.target.closest(`.${removeBtnName}`);

  if (!removeBtn) return;

  e.preventDefault();

  const selectedItem = e.target.closest(".cart-item");
  selectedItem.remove();

  productAll = productAll.filter((item) => item.id !== selectedItem.dataset.id);
  updateCartCount();
  calculateCartTotal();
  saveCartToLocalStorage();
  emptyCartContent();
  shippingCalc();
}

cartList?.addEventListener("click", function (e) {
  productRemove(e, "remove-item");
});

// ==========================================================================
// Cart page
const cartTableBody = document.querySelector(".table.table-bordered tbody");
cartTableBody && (cartTableBody.innerHTML = "");

productAll.forEach((currProduct) => {
  function tableCartAdd() {
    const id = currProduct.id;
    const name = currProduct.name;
    const images = currProduct.images;
    const mrp = parseFloat(currProduct.mrp);
    const sellingPrice = currProduct.sellingPrice;
    const quantity = currProduct.quantity;

    const tableCartItem = document.createElement("tr");

    tableCartItem.classList.add("cart-item");

    tableCartItem.dataset.id = id;
    tableCartItem.dataset.name = name;
    tableCartItem.dataset.images = images;
    tableCartItem.dataset.mrp = mrp;
    tableCartItem.dataset.sellingPrice = sellingPrice;

    const finalprice =
      sellingPrice === mrp
        ? `<span class="amount">$${sellingPrice}</span>`
        : `<del class="amount me-2">$${mrp}</del>
           <span class="amount">$${sellingPrice}</span>`;

    tableCartItem.innerHTML = `
                        <td class="product-remove">
                          <a href="#"><i class="far fa-trash-alt"></i></a>
                        </td>
                        <td class="product-thumbnail">
                          <a href="#"><img src="${images}" alt=""></a>
                        </td>
                        <td class="product-name">
                          <a href="#">${name}</a>
                        </td>
                        <td class="product-price">
                          ${finalprice}
                        </td>
                        <td class="product-quantity">
                          <form>
                            <div>
                              <input type="number" class="form-control" id="number" min="0" max="10" value="${quantity}">
                            </div>
                          </form>
                        </td>
                        <td class="product-subtotal">
                          <span class="subtotal">$${(
                            sellingPrice * quantity
                          ).toFixed(2)}</span>
                        </td>`;

    calculateCartTotal();
    cartTableBody?.appendChild(tableCartItem);
  }
  tableCartAdd();
});

// remove product
cartTableBody?.addEventListener("click", function (e) {
  productRemove(e, "product-remove");
  calculateCartTotal();
  saveCartToLocalStorage();
});
// tableCartAdd();
// ==========================================================================
// Cart page

// =======================================================================
// Restore cart from localStorage on page load
window.addEventListener("DOMContentLoaded", () => {
  productAll = getCartProducts();
  productAll.forEach((productData) => {
    renderCartItem(productData);
  });
  updateCartCount();
  calculateCartTotal();
  getWishlistProducts();
  emptyCartContent();
  shippingCalc();
  saveWishlistToLocalStorage();
  emptyWishlistContent();
});

// ==============================================================================
// product quantity
const productQuantity = document.querySelector(".qty");
const quantityInput = document.querySelector(".count.qty");

productQuantity?.addEventListener("click", function (e) {
  const quantityMinus = e.target.classList.contains("minus");
  const quantityPlus = e.target.classList.contains("plus");

  if (quantityMinus) {
    quantityInput.stepDown();
  } else if (quantityPlus) {
    quantityInput.stepUp();
  }
});

// =================================================================================
// animate button
document.querySelectorAll(".cart-submit").forEach((button) =>
  button.addEventListener("click", (e) => {
    if (!button.classList.contains("loading")) {
      button.classList.add("loading");

      setTimeout(() => button.classList.remove("loading"), 2500);
    }
    e.preventDefault();
  })
);

// =========================================================================================
// Add wishlist
function getWishlistProducts() {
  return JSON.parse(localStorage.getItem("wishlist")) || [];
}
let wishlistAll = getWishlistProducts();

const saveWishlistToLocalStorage = () => {
  localStorage.setItem("wishlist", JSON.stringify(wishlistAll));
};

function updateWishlistCount() {
  wishlistCount && (wishlistCount.innerHTML = wishlistAll.length);
}
updateWishlistCount();

allProductsContainer.forEach((currProductSec) => {
  currProductSec.addEventListener("click", function (e) {
    const wishlistBtn = e.target.closest(".wishlist-btn");

    if (!wishlistBtn) return;
    e.preventDefault();

    wishlistAll = getWishlistProducts();

    const currProduct = e.target.closest(".product-item");

    const currProductDetails = {
      id: currProduct.dataset.id,
      name: currProduct.dataset.name,
      mrp: currProduct.dataset.mrp,
      sellingPrice: currProduct.dataset.sellingPrice,
      images: currProduct.dataset.images,
    };

    // Check if the product already exists in the wishlist
    const productExistsInWishlist = wishlistAll.find(
      (item) => item.id === currProductDetails.id
    );

    if (productExistsInWishlist) {
      // Remove the product if it's already in the wishlist
      wishlistBtn.classList.remove("wishlist-active");
      removeWishlist(currProductDetails.id);
    } else {
      // Add to wishlist if not already present
      wishlistBtn.classList.add("wishlist-active");
      wishlistAll.push(currProductDetails);
    }

    getWishlistProducts();
    updateWishlistCount();
    saveWishlistToLocalStorage();
    cleanuUpDom();
  });
});

// function updateClasslist(){
//   const activeWishlistIcon = document.querySelectorAll(".wishlist-active");
//   const activeWishlistProduct = activeWishlistIcon.closest(".product-item");

//   wishlistAll.find(currWishlistProduct => {

//   })
// }

// Function to remove the wishlist product
function removeWishlist(productId) {
  wishlistAll = wishlistAll.filter((item) => item.id !== productId);
  updateWishlistCount();
  saveWishlistToLocalStorage();
}

// Wishlist product HTML rendering
function wishlistProductContent(currProduct) {
  const wishlistProduct = document.createElement("div");

  wishlistProduct.className = "product-item";

  wishlistProduct.dataset.id = currProduct.id;
  wishlistProduct.dataset.name = currProduct.name;
  wishlistProduct.dataset.mrp = currProduct.mrp;
  wishlistProduct.dataset.sellingPrice = currProduct.sellingPrice;
  wishlistProduct.dataset.images = currProduct.images;

  const finalPrice =
    currProduct.mrp === currProduct.sellingPrice
      ? `$${currProduct.sellingPrice}`
      : `<span class="me-2">$${currProduct.mrp}</span> $${currProduct.sellingPrice}`;

  wishlistProduct.innerHTML = `
            <div class="product-image thumbnail-bg">
              <img class="img-fluid" src="${currProduct.images}" alt="image" />
              <div class="custom-icon wishlist-btn-wrap">
                <ul class="list-unstyled">
                  <li>
                    <a href="#" class="wishlist-remove-btn">Remove</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="product-content">
              <div class="product-info">
                <div class="product-title">
                  <a href="shop-single.html">${currProduct.name}</a>
                </div>
                <div class="product-star">
                  <ul class="list-unstyled">
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="far fa-star-half-alt"></i></li>
                    <li><i class="far fa-star-half-alt"></i></li>
                  </ul>
                </div>
              </div>
              <a href="#" class="category">Beauty</a>
              <div class="product-prize">
                <p>${finalPrice}</p>
              </div>
            </div>`;

  return wishlistProduct;
}

// Load and display wishlist products when page loads
wishlistProductSec && (wishlistProductSec.innerHTML = "");
wishlistAll.forEach((currProduct) => {
  function loadWishlist() {
    const wishlistProduct = wishlistProductContent(currProduct);
    wishlistProductSec?.appendChild(wishlistProduct);

    // Add wishlist-active class for items in the wishlist
    const wishlistBtns = document.querySelectorAll(".wishlist-btn");
    wishlistBtns.forEach((btn) => {
      const productItem = btn.closest(".product-item");
      const productId = productItem.dataset.id;

      if (wishlistAll.some((item) => item.id === productId)) {
        btn.classList.add("wishlist-active");
      }
    });
  }
  loadWishlist();
});

// Event listener to remove items from wishlist
wishlistProductSec?.addEventListener("click", function (e) {
  const removeBtn = e.target.classList.contains("wishlist-remove-btn");

  if (!removeBtn) return;
  e.preventDefault();
  const currProduct = e.target.closest(".product-item");
  // getWishlistProducts();
  wishlistAll = getWishlistProducts();

  removeWishlist(currProduct.dataset.id);
  currProduct.remove();
  emptyWishlistContent();
});

// add empty wishlist content if it is empty
function emptyWishlistContent() {
  const emptyWishlist = document.createElement("div");

  emptyWishlist.classList = "empty-wishlist d-block text-center mx-auto";

  emptyWishlist.innerHTML = `
            <svg
                clip-rule="evenodd"
                fill-rule="evenodd"
                height="150"
                stroke-linejoin="round"
                stroke-miterlimit="2"
                viewBox="0 0 64 64"
                width="150"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Exp-1.-O">
                  <g fill="#8ac9b3">
                    <path
                      d="m27.815 20.643c.803-.319 1.717-.539 2.731-.641.275-.027.475-.272.448-.547-.028-.274-.273-.475-.547-.448-1.115.112-2.119.356-3.001.707-.257.101-.382.392-.28.649.102.256.393.382.649.28z"
                    />
                    <path
                      d="m32.996 19.983c1.182.089 2.264.108 3.252.066.276-.011.491-.244.479-.52-.011-.276-.245-.49-.52-.479-.953.04-1.996.021-3.136-.065-.275-.02-.515.186-.536.461-.021.276.186.516.461.537z"
                    />
                    <path
                      d="m38.948 19.753c1.166-.219 2.155-.543 2.986-.942.249-.12.354-.419.234-.667-.119-.249-.418-.354-.667-.235-.762.366-1.669.661-2.738.862-.271.051-.45.312-.399.584.051.271.313.449.584.398z"
                    />
                    <path
                      d="m43.972 17.422c.896-.865 1.422-1.861 1.659-2.874.063-.269-.105-.538-.373-.601-.269-.063-.538.105-.601.373-.196.841-.636 1.665-1.379 2.382-.199.192-.205.509-.013.707.192.199.508.205.707.013z"
                    />
                    <path
                      d="m45.393 11.105c-.397-1.054-1.07-1.949-1.89-2.515-.227-.156-.538-.099-.695.128s-.1.539.128.696c.663.457 1.2 1.189 1.521 2.043.097.258.385.389.644.292.258-.097.389-.386.292-.644z"
                    />
                    <path
                      d="m32.365 8.588c.549-2.576 2.737-3.829 4.315-3.838.518-.003.967.119 1.2.431.138.185.18.433.127.737-.047.272.136.531.408.578s.531-.136.578-.408c.108-.625-.028-1.126-.312-1.505-.397-.533-1.125-.838-2.006-.833-1.921.011-4.62 1.494-5.288 4.63-.058.27.114.535.384.593s.536-.115.594-.385z"
                    />
                    <path
                      d="m31.391 8.59c.677 3.12 3.366 4.596 5.282 4.608.949.005 1.718-.348 2.094-.959.227-.368.326-.837.22-1.41-.13-.705-.594-1.608-1.565-2.68-.185-.205-.502-.221-.706-.036-.205.186-.221.502-.035.707.676.747 1.077 1.384 1.253 1.919.133.408.13.735-.018.976-.134.217-.374.348-.663.42-.363.09-.798.083-1.257-.014-1.467-.31-3.149-1.537-3.627-3.743-.059-.27-.325-.441-.595-.383-.27.059-.441.325-.383.595z"
                    />
                  </g>
                  <path
                    d="m31.744 9.484h6.695c.552 0 1-.448 1-1s-.448-1-1-1h-6.695c-.552 0-1 .448-1 1s.448 1 1 1z"
                    fill="#8ac9b3"
                  />
                  <path
                    d="m11.5 48.52v5.609c0 1.104.724 2.077 1.782 2.394 4.018 1.206 15.32 4.597 18 5.4.468.141.968.141 1.436 0 2.68-.803 13.982-4.194 18-5.4 1.058-.317 1.782-1.29 1.782-2.394 0-2.67 0-7.997 0-7.997 0-.276-.224-.5-.5-.5s-.5.224-.5.5v7.997c0 .662-.435 1.246-1.069 1.437-4.018 1.205-15.321 4.596-18 5.4-.281.084-.581.084-.862 0l-18-5.4c-.634-.191-1.069-.775-1.069-1.437v-5.609c0-.276-.224-.5-.5-.5s-.5.224-.5.5z"
                    fill="#8ac9b3"
                  />
                  <path
                    d="m10.336 37.19s-2.532 3.754-3.826 5.672c-.263.39-.328.882-.174 1.327.153.445.506.793.954.938l17.995 5.847c.636.206 1.331-.032 1.706-.585 1.341-1.98 5.423-8.002 5.423-8.002.088-.13.11-.294.059-.443s-.169-.265-.319-.313l-20-6.49c-.262-.085-.544.059-.63.322-.085.262.059.544.322.63l19.367 6.284s-5.05 7.451-5.05 7.451c-.125.184-.357.264-.569.195 0 0-17.995-5.847-17.995-5.847-.149-.049-.267-.164-.318-.313-.051-.148-.029-.312.058-.442l3.826-5.672c.155-.229.094-.54-.135-.694-.228-.155-.539-.094-.694.135z"
                    fill="#8ac9b3"
                  />
                  <path
                    d="m49.001 36.064-17.155 5.567c-.263.085-.407.367-.322.63.086.262.368.406.63.321l17.155-5.566c.263-.085.407-.368.322-.63-.086-.263-.368-.407-.63-.322z"
                    fill="#8ac9b3"
                  />
                  <path
                    d="m33.002 44.476s2.901 4.28 4.007 5.913c.375.553 1.07.791 1.706.585 2.949-.958 14.196-4.613 17.995-5.847.448-.145.801-.493.954-.938.154-.445.089-.937-.174-1.327-1.568-2.325-5.075-7.525-5.075-7.525-.155-.228-.466-.289-.695-.135-.228.155-.289.466-.135.695 0 0 3.508 5.199 5.076 7.524.087.13.109.294.058.442-.051.149-.169.264-.318.313 0 0-17.995 5.847-17.995 5.847-.212.069-.444-.011-.569-.195l-4.007-5.913c-.155-.229-.466-.288-.695-.133-.228.154-.288.466-.133.694z"
                    fill="#8ac9b3"
                  />
                  <path
                    d="m15.192 35.104 16.963-5.522c.149-.049.267-.165.318-.314s.029-.313-.06-.443c0 0-3.592-5.283-4.841-7.12-.375-.551-1.069-.789-1.704-.583l-17.996 5.847c-.448.146-.801.493-.955.939-.153.445-.088.936.175 1.327 1.444 2.141 4.493 6.662 4.493 6.662.155.228.466.289.695.134.228-.154.289-.465.135-.694 0 0-3.05-4.52-4.494-6.661-.088-.131-.109-.294-.058-.443.051-.148.169-.264.318-.313 0 0 17.996-5.847 17.996-5.847.212-.069.443.011.568.194 0 0 4.467 6.57 4.467 6.57s-16.329 5.316-16.329 5.316c-.263.085-.406.368-.321.63.086.262.368.406.63.321z"
                    fill="#8ac9b3"
                  />
                  <path
                    d="m31.845 29.582 20 6.51c.212.069.445-.01.57-.195 0 0 3.049-4.521 4.493-6.662.263-.391.328-.882.175-1.327-.154-.446-.507-.793-.955-.939l-17.996-5.847c-.635-.206-1.329.032-1.704.583l-3.498 5.144c-.155.229-.096.54.132.695.229.155.54.096.695-.132l3.498-5.145c.125-.183.356-.263.568-.194 0 0 17.996 5.847 17.996 5.847.149.049.267.165.318.313.051.149.03.312-.058.443l-4.283 6.349s-19.641-6.394-19.641-6.394c-.263-.086-.545.058-.63.321-.086.262.058.544.32.63z"
                    fill="#8ac9b3"
                  />
                  <path
                    d="m47.147 35.615-15.147 4.914s-15.147-4.914-15.147-4.914 15.147-4.931 15.147-4.931z"
                    fill="#8ac9b3"
                  />
                  <path
                    d="m26.998 29.06c-.269-.379-.5-.76-.694-1.141-.125-.246-.426-.344-.672-.218-.246.125-.344.426-.219.672.215.423.471.846.77 1.267.16.225.472.277.697.118.225-.16.278-.473.118-.698z"
                    fill="#8ac9b3"
                  />
                  <path
                    d="m25.611 25.839c-.09-.57-.094-1.127-.015-1.661.04-.273-.149-.527-.422-.567s-.527.149-.568.422c-.092.63-.089 1.288.017 1.961.043.273.299.459.572.416.272-.043.459-.299.416-.571z"
                    fill="#8ac9b3"
                  />
                </g>
              </svg>
              <h4 class="mt-4 mb-3">Your Wishlist is Empty</h4>
              <p>Looks like you haven't added anything to your wishlist yet.</p>
              <a href="shop.html" class="btn btn-primary animated4 appointment fadeInUp animated my-3" data-swiper-animation="fadeInUp" data-duration="3s" data-delay="0.25s" style="visibility: visible; animation-duration: 3s; animation-delay: 0.25s;">Shop Now
                <i class="fas fa-arrow-right ms-2"></i>
              </a>`;

  if (wishlistAll.length === 0) {
    wishlistProductSec?.appendChild(emptyWishlist);
  } else {
    document.querySelector(".empty-wishlist")?.remove();
  }
}
