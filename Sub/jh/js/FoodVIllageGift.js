/* ----------------- button_list------------------- */
$.getJSON("../../../data/content.json", initList)
let allData = [],
    filtered = [],
    list= $('.list');
    let buttons = $('.list_item button')

function initList(data){
  allData = data

  addItems('type', '푸드코트');
}

function addItems(sort, value){
  let listHtml = '';
  
  if(value == '' || value == '전체보기'){
    filtered = allData
  }else {
    filtered = allData.filter(lst => lst[sort] == value)
  }

  $.each(filtered, (i, item)=>{
    listHtml += `
    <li>
      <h6 class="detail_tt">${item.title}</h6>
      <p>${item.type}</p>
      <a href="#"><img src="${item.image}" alt="${item.title}"></a>
    </li>
    `
  })
  list.html(listHtml)

  buttons.click(function(){
    let value = $(this).attr("data-filter");
    let type = $(this).attr("data-type");
    addItems(type, value)
  })
 
}


/* ----------------- food slide ------------------- */
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
  navigation: {
    nextEl: '.sec7_switch_next',
    prevEl: '.sec7_switch_prev',
  },
})

/* ----------------- s_ani ------------------- */
let animation = $(".animation");


  $(window).scroll(function(){
    let windowOST = $(this).scrollTop();

    animation.each(function(){
      if($(this).offset().top - 1000 <= windowOST){
        $(this).addClass('active')  
      }else {
        $(this).removeClass('active')
      }
    })
  })
