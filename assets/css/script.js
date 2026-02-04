$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  items: 1,
  dots: true,
  nav: true,
  autoplay: true,
  autoplayTimeout: 5000,
  navText: [
    `<span class="custom-prev"></span>`,
    `<span class="custom-next"></span>`,
  ],
});
// owl-carousel

// Header Active
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll > 0) {
    $("#header").addClass("active");
  } else {
    $("#header").removeClass("active");
  }
});
// Header Active

// AOS
AOS.init();
// AOS

// Side Nav
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
// Side Nav

// Component creator
let includes = document.getElementsByTagName("include");
for (var i = 0; i < includes.length; i++) {
  let include = includes[i];
  load_file(includes[i].attributes.src.value, function (text) {
    include.insertAdjacentHTML("afterend", text);
    include.remove();
  });
}
function load_file(filename, callback) {
  fetch(filename)
    .then((response) => response.text())
    .then((text) => callback(text));
}
// <include src="header.html"></include>
// Component creator

jQuery(document).ready(function () {
  equalizer();
});

jQuery(window).resize(function () {
  equalizer();
});

jQuery(window).resize(function () {
  equalizer();
});

function equalizer() {
  var max = -1;
  $(".diff_btn_click_req").css("min-height", "auto");
  $(".diff_btn_click_req").each(function () {
    var minHeight = $(this).innerHeight();
    max = minHeight > max ? minHeight : max;
  });
  $(".diff_btn_click_req").css("min-height", max);
}

var max = -1;
$(".diff_btn_num").css("min-height", "auto");
$(".diff_btn_num").each(function () {
  var minHeight = $(this).innerHeight();
  max = minHeight > max ? minHeight : max;
});
$(".diff_btn_num").css("min-height", max);

var max = -1;
$("li.txt_center").css("min-height", "auto");
$("li.txt_center").each(function () {
  var minHeight = $(this).innerHeight();
  max = minHeight > max ? minHeight : max;
});
$("li.txt_center").css("min-height", max);

mobileOnlySlider(".why_choose_slide", false, false, 1.2, 1, 767);

function mobileOnlySlider(
  $slidername,
  $dots,
  $arrows,
  $slidestoShow,
  $slidestoScroll,
  $breakpoint
) {
  var slider = $($slidername);
  var settings = {
    mobileFirst: true,
    dots: true,
    arrows: true,
    slidesToShow: $slidestoShow,
    slidesToScroll: $slidestoScroll,
    infinite: false,
    responsive: [
      {
        breakpoint: $breakpoint,
        settings: "unslick",
      },
    ],
  };

  slider.slick(settings);

  $(window).on("resize", function () {
    if ($(window).width() > $breakpoint) {
      return;
    }
    if (!slider.hasClass("slick-initialized")) {
      return slider.slick(settings);
    }
  });
}
