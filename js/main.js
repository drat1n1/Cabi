// auto slide

$(".header-slider").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
});

//슬라이더

let slide = document.querySelector(".slide");
let slideWidth = slide.clientWidth;

const prevBtn = document.querySelector(".slide_prev_button");
const nextBtn = document.querySelector(".slide_next_button");

let slideItems = document.querySelectorAll(".slide_item");
const maxSlide = slideItems.length;
let currSlide = 1;

const pagination = document.querySelector(".slide_pagination");

for (let i = 0; i < maxSlide; i++) {
  if (i === 0) pagination.innerHTML += `<li class="active">•</li>`;
  else pagination.innerHTML += `<li>•</li>`;
}

const paginationItems = document.querySelectorAll(".slide_pagination > li");

// 무한 슬라이드를 위해 start, end 슬라이드 복사하기

const startSlide = slideItems[0];
const endSlide = slideItems[slideItems.length - 1];
const startElem = document.createElement("div");
const endElem = document.createElement("div");

endSlide.classList.forEach((c) => endElem.classList.add(c));
endElem.innerHTML = endSlide.innerHTML;

startSlide.classList.forEach((c) => startElem.classList.add(c));
startElem.innerHTML = startSlide.innerHTML;

// 각 복제한 엘리먼트 추가하기
slideItems[0].before(endElem);
slideItems[slideItems.length - 1].after(startElem);

// 슬라이드 전체를 선택해 값을 변경해주기 위해 슬라이드 전체 선택하기

slideItems = document.querySelectorAll(".slide_item");

let offset = slideWidth + currSlide;

slideItems.forEach((i) => {
  i.setAttribute("style", `left: ${-offset}px`);
});

function nextMove() {
  currSlide++;
  if (currSlide < maxSlide) {
    // 슬라이드를 이동시키기 위한 offset 계산
    const offset = slideWidth * currSlide;
    // 각 슬라이드 아이템의 left에 offset 적용
    slideItems.forEach((i) => {
      i.setAttribute("style", `left:${-offset}px`);
    });

    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems;
    [(cirrSlide = 1)].classList.add("active");
  } else {
    // 무한 슬라이드 기능 - currSlide 값만 변경해줘도 되지만 시각적으로 자연스럽게 하기 위해 아래 코드 작성
    currSlide = 0;
    let offset = slideWidth * currSlide;
    slideItems.forEach((i) => {
      i.setAttribute("style", `transition:${0}s; left: ${-offset}px`);
    });

    currSlide++;
    offset = slideWidth * currSlide;

    setTimeout(() => {
      slideItems.forEach((i) => {
        i.setAttribute("style", `transition: ${0.15}s; left: ${-offset}px`);
      });
    }, 0);
    pagination.forEach((i) => i.classList.remove("active"));
    pagination[currSlide - 1].classList.add("active");
  }
}

function prevMove() {
  currSlide--;
  if (currSlide > 0) {
    const offset = slideWidth * currSlide;
  }
}

slide.addEventListener("mouseover", () => {
  clearInterval(loopInterval);
});

// 슬라이드에서 마우스가 나온 경우 루프 재시작하기
slide.addEventListener("mouseout", () => {
  loopInterval = setInterval(() => {
    nextMove(); // 다음 슬라이드를 보여주는 함수
  }, 3000);
});
