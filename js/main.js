let sec3marca = $(".sec3 .marca_list"),
  sec3marcaText = $(".sec3 .marca_text");
let sec3whild = $(".sec3 .whild"),
  sec3whildText = $(".sec3 .whild_text");
let sec3spa = $(".sec3 .spa"),
  sec3spaText1 = $(".sec3 .spa_text1"),
  sec3spaText2 = $(".sec3 .spa_text2");
let sec3pool = $(".sec3 .pool"),
  sec3poolText1 = $(".sec3 .pool_text1"),
  sec3poolText2 = $(".sec3 .pool_text2");

$(window).scroll(function () {
  let sec3marcaSCT = $(this).scrollTop();
  console.log(sec3marcaSCT);
  // marca
  sec3marca.each(function () {
    if ($(this).offset().top - 400 <= sec3marcaSCT) {
      $(this).addClass("move");
    }
  });
  sec3marcaText.each(function () {
    if ($(this).offset().top - 400 <= sec3marcaSCT) {
      $(this).addClass("move");
    }
  });
  // whild
  let sec3whildSCT = $(this).scrollTop();

  sec3whild.each(function () {
    if ($(this).offset().top - 400 <= sec3whildSCT) {
      $(this).addClass("move");
    }
  });
  sec3whildText.each(function () {
    if ($(this).offset().top - 400 <= sec3whildSCT) {
      $(this).addClass("move");
    }
  });
  // spa
  let sec3spaSCT = $(this).scrollTop();

  sec3spa.each(function () {
    if ($(this).offset().top - 400 <= sec3spaSCT) {
      $(this).addClass("move");
    }
  });
  sec3spaText1.each(function () {
    if ($(this).offset().top - 400 <= sec3spaSCT) {
      $(this).addClass("move");
    }
  });
  sec3spaText2.each(function () {
    if ($(this).offset().top - 400 <= sec3spaSCT) {
      $(this).addClass("move");
    }
  });
  // pool
  let sec3poolSCT = $(this).scrollTop();

  sec3pool.each(function () {
    if ($(this).offset().top - 400 <= sec3poolSCT) {
      $(this).addClass("move");
    }
  });
  sec3poolText1.each(function () {
    if ($(this).offset().top - 400 <= sec3poolSCT) {
      $(this).addClass("move");
    }
  });
  sec3poolText2.each(function () {
    if ($(this).offset().top - 400 <= sec3poolSCT) {
      $(this).addClass("move");
    }
  });
  // sec3 애니메이션 종료
});

function sec3_upimg() {
  let screenWidth = $(window).width();
  if (screenWidth <= 970) {
    $(".marca_a").attr("src", "img/tab/sec3_ta_a.png");
    $(".marca_b").attr("src", "img/tab/sec3_ta_b.png");
    $(".marca_c").attr("src", "img/tab/sec3_ta_c.png");
  } else {
    $(".marca_a").attr("src", "img/sec3_Marca_A.png");
    $(".marca_b").attr("src", "img/sec3_Marca_B.png");
    $(".marca_c").attr("src", "img/sec3_Marca_C.png");
  }
}

function sec3updateImage() {
  let screenWidth = $(window).width();
  if (screenWidth <= 768) {
    $(".whild_b").attr("src", "img/tab/sec3_ta_f.png");
    $(".whild_a").attr("src", "img/tab/sec3_ta_d.png");
    $(".whild_d").attr("src", "img/tab/sec3_ta_g.png");
    $(".whild_c").attr("src", "img/tab/sec3_ta_e.png");
    $(".zone_a").attr("src", "img/tab/sec3_ta_h.png");
    $(".zone_b").attr("src", "img/tab/sec3_ta_i.png");
    $(".zone_c").attr("src", "img/tab/sec3_ta_j.png");
    $(".spa_a").attr("src", "img/tab/sec3_ta_k.png");
    $(".spa_b").attr("src", "img/tab/sec3_ta_l.png");
    $(".dj_a").attr("src", "img/tab/sec3_ta_o.png");
    $(".dj_b").attr("src", "img/tab/sec3_ta_m.png");
    $(".dj_c").attr("src", "img/tab/sec3_ta_n.png");

    $(".sec3 .content").css("display", "none");
    $(".sec3 br").css("display", "none");
  } else {
    $(".marca_a").attr("src", "img/sec3_Marca_A.png");
    $(".marca_b").attr("src", "img/sec3_Marca_B.png");
    $(".marca_c").attr("src", "img/sec3_Marca_C.png");
    $(".whild_b").attr("src", "img/sec_3Whild_B.png");
    $(".whild_a").attr("src", "img/sec_3Whild_A.png");
    $(".whild_d").attr("src", "img/sec_3Whild_D.png");
    $(".whild_c").attr("src", "img/sec_3Whild_C.png");
    $(".zone_a").attr("src", "img/sec3_Photo_Zone_A.png");
    $(".zone_b").attr("src", "img/Sec3_Photo_B.png");
    $(".zone_c").attr("src", "img/sec3_Photo_Zone_C.png");
    $(".spa_a").attr("src", "img/sec3_Cave_Spa.png");
    $(".spa_b").attr("src", "img/sec3_Cave Spa_Back.png");
    $(".dj_a").attr("src", "img/sec3_DJ_A.png");
    $(".dj_b").attr("src", "img/sec3_DJ_B.png");
    $(".dj_c").attr("src", "img/sec3_DJ_C.png");

    $(".sec3 .content").css("display", "block");
  }
}

// 480스크립트

function toggleContent() {
  let screenWidth = $(window).width();

  if (screenWidth <= 480) {
    $(".pc").hide();
    $(".mobile").show();
  } else {
    $(".pc").show();
    $(".mobile").hide();
  }
}
toggleContent();

$(window).resize(function () {
  toggleContent();
});

sec3updateImage();

$(window).resize(function () {
  sec3updateImage();
  sec3_upimg();
});

function sec3rotateSlider() {
  const activeSlide = $(".slider-item.active");
  const nextSlide = activeSlide.next();

  if (nextSlide.length === 0) {
    $(".slider-item").first().addClass("active");
  } else {
    nextSlide.addClass("active");
  }
  activeSlide.removeClass("active");
}
setInterval(sec3rotateSlider, 3000);

// sec6
let sec6Vod = $(".sec6 .frame"),
  sec6On = $(".sec6 .modal_vod");

sec6Vod.click(function () {
  sec6On.addClass("active");
});
sec6On.click(function () {
  sec6On.removeClass("active");
});

function chanSec6() {
  let screenWidth = $(window).width();
  if (screenWidth <= 768) {
    $(".sec6 .frame img").attr("src", "img/Sec6_Video_mo.png");
  } else {
    $(".sec6 .frame img").attr("src", "img/Sec6_Video_Img.png");
  }
}

$(window).resize(function () {
  chanSec6();
});
// 지희
function sec2_slide() {
  let sec2_slideContainer = document.querySelector(".sec2_slider_container"),
    sec2_sliderWrap = sec2_slideContainer.querySelector(".sec2_slide_wrapper"),
    sec2_slides = sec2_sliderWrap.querySelectorAll(".sec2_slides"),
    sec2_slideLine = sec2_sliderWrap.querySelectorAll(".sec2_slideLine line"),
    sec2_slideCount = sec2_slides.length,
    sec2_slideWidth = 324,
    sec2_slideMargin = 8,
    sec2_slideToShow = 4,
    sec2_currentIdx = 0,
    Sec2_autoSet = undefined,
    sec2_prevBtn = document.querySelector(".sec2 #sec2_prev"),
    sec2_nextBtn = document.querySelector(".sec2 #sec2_next");

  for (let i = 0; i < sec2_slideCount; i++) {
    let sec2_cloneSlide = sec2_slides[i].cloneNode(true);
    sec2_cloneSlide.classList.add("clone");
    sec2_sliderWrap.appendChild(sec2_cloneSlide);
  }
  for (let i = sec2_slideCount - 1; i >= 0; i--) {
    let sec2_cloneSlide = sec2_slides[i].cloneNode(true);
    sec2_cloneSlide.classList.add("clone");
    sec2_sliderWrap.prepend(sec2_cloneSlide);
  }

  let sec2_allSlide = sec2_sliderWrap.querySelectorAll(".sec2_slides");
  sec2_allSlide.forEach((item, idx) => {
    item.style.left =
      (sec2_slideWidth * sec2_slideToShow +
        sec2_slideMargin * (sec2_slideToShow - 1)) *
        idx +
      "px";
  });

  function sec2_setSlide() {
    let sec2_MoveAmt =
      -(
        sec2_slideWidth * sec2_slideToShow +
        sec2_slideMargin * (sec2_slideToShow - 1)
      ) + "px";
    sec2_sliderWrap.style.transform = `translateX(${sec2_MoveAmt})`;
    sec2_sliderWrap.classList.add("animated");
  }
  sec2_setSlide();

  function sec2_moveSlide(SlideNumber) {
    sec2_sliderWrap.style.left =
      -SlideNumber * (sec2_slideWidth + sec2_slideMargin) + "px";
    sec2_currentIdx = SlideNumber;

    if (
      sec2_currentIdx == -sec2_slideToShow ||
      sec2_currentIdx == sec2_slideToShow
    ) {
      setTimeout(() => {
        sec2_sliderWrap.classList.remove("animated");
        sec2_sliderWrap.style.left = "0px";
        sec2_currentIdx = 0;
      }, 500);
      setTimeout(() => {
        sec2_sliderWrap.classList.add("animated");
      }, 600);
    }
  }

  function slideCheck(callback, time) {
    let Sec2_Switch = true;
    return () => {
      if (Sec2_Switch) {
        callback();
        Sec2_Switch = false;
        setTimeout(() => {
          Sec2_Switch = true;
        }, time);
      }
    };
  }

  sec2_nextBtn.addEventListener(
    "click",
    slideCheck(() => {
      sec2_moveSlide(sec2_currentIdx + 1);
    }, 500)
  );
  sec2_prevBtn.addEventListener(
    "click",
    slideCheck(() => {
      sec2_moveSlide(sec2_currentIdx - 1);
    }, 500)
  );

  function Sec2_autoSlide() {
    Sec2_autoSet = setInterval(() => {
      sec2_moveSlide(sec2_currentIdx + 1);
    }, 3000);
  }
  sec2_slideContainer.addEventListener("mouseenter", function (e) {
    clearInterval(Sec2_autoSet);
    Sec2_autoSet = undefined;
  });
  sec2_slideContainer.addEventListener("mouseleave", function (e) {
    if (Sec2_autoSet == undefined) {
      setTimeout(() => {
        Sec2_autoSlide();
      }, 20);
    }
  });
  Sec2_autoSlide();
}
$(window).resize(function () {
  if ($(this).width() >= 768) {
    sec2_slide();
  }
});

$(window).trigger("resize");
//지희

const Sec7_swiper = new Swiper(".sec7_swiper", {
  autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true,
  },
  direction: "horizontal",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".sec7_switch_next",
    prevEl: ".sec7_switch_prev",
  },
});

// document 실행 시
// header 정석

// 구직용 포트폴리오용 팝업 안내 스크립트
let noticePopup = document.querySelector(".cabi_portfolio"),
  popupClose = noticePopup.querySelector(".popup_close"),
  dontSee = noticePopup.querySelector("#dont_see");
//쿠키 생성 함수
function setCookie(name, value, day) {
  let date = new Date();
  date.setDate(date.getDate() + day);
  document.cookie = `${name}=${value};expires=${date.toUTCString()}`;
}
// 쿠키 확인 함수
function cookieCheck(name) {
  let cookieArr = document.cookie.split(";");
  let visited = false;
  for (let cookie of cookieArr) {
    if (cookie.search(name) > -1) {
      visited = true;
      break;
    }
  }
  //만약 visited의 값이 false라면 dialog 노출
  if (!visited) {
    noticePopup.setAttribute("open", "");
  }
}
cookieCheck();
/* 
popupClose 클릭 시, 
  팝업 display none
  dontSee에 체크 되어있다면,
    쿠키 생성,아니라면 쿠키 만료.
*/
popupClose.addEventListener("click", () => {
  noticePopup.style.display = "none";
  if (dontSee.checked) {
    setCookie("CGV", "home", 1);
  } else {
    setCookie("CGV", "home", -1);
  }
});

// 최상단 텍스트 슬릭 슬라이드 최상단 실행
$("header .test-slider").slick({
  variableWidth: true, //텍스트 글자가 서로다를 경우
  slidesToShow: 4, //보여질 갯수
  autoplay: true, //자동실행
  autoplaySpeed: 0, //자동실행 속도
  speed: 5000, //돌아가는 속도
  cssEase: "linear", //속도 방식
  infinite: true, // 무한반복
  focusOnSelect: false,
  loop: true,
  infinite: true,
  arrows: false,
});

// 각 아이콘 클릭시 스크립트
let lang_btn = $("header .lang_btn");
let search_btn = $("header .search_btn");
let hamburger_btn = $("header .hamburger_btn");
let lang_dropdown = $(".lang_dropdown");
let search_modal = $(".search_modal");
let hamburger_modal = $(".hamburger_modal");

search_btn.click(function () {
  search_modal.slideToggle();
});

hamburger_btn.click(function () {
  hamburger_modal.slideToggle();
});
lang_btn.click(function () {
  lang_dropdown.slideToggle();
});

// 나이트모드
/* 
헤더 토글버튼 클릭시 자식요소이미지의 속성이 day.png이면
이미지의 속성을 night.png<->day.png로 바꾸고
헤더의 배경에 클래스 흰<->검으로 바꾼다
*/
let toggle_btn = $("header .toggle_btn");
let header_navbar = $("header .bottom_menu");
let header_logo = $("header .navbar-brand");
let nav_item = $("header .nav-item,.nav-link");

toggle_btn.click(function (e) {
  e.preventDefault();
  header_navbar.toggleClass("dark_mode");
});

let mainmenu = $("header .menu_list > li");
let bottom_menu = $("header .bottom_menu");
let bottomsct = bottom_menu.offset().top;

mainmenu.hover(
  function (e) {
    bottom_menu.css({
      height: `300px`,
    });
  },
  function () {
    bottom_menu.css({
      height: `85px`,
    });
  }
);

$(window).scroll(function () {
  let sct = $(this).scrollTop();

  console.log(bottomsct);
  if (bottomsct < sct) {
    bottom_menu.addClass("fixed");
  } else {
    bottom_menu.removeClass("fixed");
  }
});

$('input[type="radio"]').change(function () {
  // 현재 선택된 라디오 버튼의 value 값 (예: "ENGLISH")
  var selectedLanguage = $(this).next().text().trim();

  // menu_list의 첫 번째 <a> 엘리먼트 찾기
  var firstMenuItem = $(".menu_list li:first-child a:first-child");
  // menu_list의 마지막 <a> 엘리먼트 찾기
  var lastMenuItem = $(".menu_list li:last-child a:last-child");

  // 첫 번째 메뉴 아이템의 텍스트 변경
  firstMenuItem.text(selectedLanguage);

  // 마지막 메뉴 아이템의 텍스트 변경
  lastMenuItem.text(selectedLanguage);
});
//정석 스크립트 끝
//Sec 1- 민용

$(".video-slider").slick({
  slidesToShow: 1,
  // initialSlide: 2,
  centerMode: true,
  centerPadding: "100px",
  arrows: true,
  dots: true,
  infinite: true,
  cssEase: "linear",
  autoplay: true,
  pauseOnHover: false,
  autoplaySpeed: 6000,
});

function playVideo() {
  $(".full-bg video").each(function () {
    $(this).get(0).pause();
  });
  console.log("비디오재생");

  console.log($(".full-bg video"));
  $(".slick-active .full-bg video ").get(0).play();
}

playVideo();

$(".video-slider").on("afterChange", function () {
  playVideo();
});

// 비디오가 전체면을 차지

let container = $(".full-bg");
let imgRatio = 1920 / 1080;

$(window).resize(function () {
  let winWidth = $(window).width();
  let winHeight = $(window).height();
  let browserRatio = winWidth / winHeight;

  if (browserRatio < imgRatio) {
    container.css({
      height: "100%",
      width: winHeight * imgRatio,
      top: 0,
      left: (winWidth - winHeight * imgRatio) / 2,
    });
  } else {
    container.css({
      width: "100%",
      height: winWidth / imgRatio,
      left: 0,
      top: (winHeight - winWidth / imgRatio) / 2,
    });
  }
});
$(window).trigger("resize");

//Sec 5- 민용

$(".sec5_slider1_container").slick({
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
});
