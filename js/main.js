// auto slide

$(".header-slider").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
});

//슬라이더

let slideWrapper = document.querySelector(".mainslide_wrapper"),
  slideContainer = slideWrapper.querySelector(".slide_container"),
  slides = slideContainer.querySelectorAll(".slide_item"),
  slideCount = slides.length,
  currentSlideIdx = 0,
  pager = slideWrapper.querySelector(".pager"),
  pagerHTML = "",
  prevBtn = slideWrapper.querySelector("#prev"),
  nextBtn = slideWrapper.querySelector("#next");

console.log(slideCount);

// 슬라이드가 있으면 가로로 배열하기, 페이저 생성하기
// 슬라이드 첫번째의 left 0%

if (slideCount > 1) {
  slides.forEach((item, idx) => {
    item.style.left = `${idx * 100}%`;

    pagerHTML += `<a href="">${idx}</a>`;
  });
}

pager.innerHTML = pagerHTML;
let pagerBtn = pager.querySelectorAll("a");

//슬라이드 이동 함수(이동, 페이저 업데이트, 슬라이드 활성화)

function moveSlide(num) {
  slideContainer.style.left = `${-num * 100}%`;
  currentSlideIdx = num;

  for (let sl of slides) {
    sl.classList.remove("active");
  }
  slides[currentSlideIdx].classList.add("active");

  for (let pb of pagerBtn) {
    pb.classList.remove("active");
  }
  pagerBtn[num].classList.add("active");
}

//좌우 버튼 클릭으로 슬라이드 이동시키기
//next Btn버튼을 클릭하면 할일, 현재 슬라이드 번호에 +1한 숫자를 moveSlide에 넘긴다.

moveSlide(0);

nextBtn.addEventListener("click", () => {
  if (currentSlideIdx < slideCount - 1) {
    moveSlide(currentSlideIdx + 1);
  }
});

prevBtn.addEventListener("click", () => {
  if (currentSlideIdx > 0) {
    moveSlide(currentSlideIdx - 1);
  }
});

//pager

// pagerBtn를 클릭하면 할일
// 링크의 기본 속성 막기
// moveSlide에 클릭한 그 요소의 인덱스 번호를 넘긴다.

pagerBtn.forEach((item, idx) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    moveSlide(idx);
  });
});

//자동 슬라이드

let timer = setInterval(() => {
  let nextIdx = (currentSlideIdx + 1) % slideCount;
  moveSlide(nextIdx);
}, 3000);

clearINterval();
