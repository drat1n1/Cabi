let currentPage = 10, //리스트 몇개씩 보여줌
page = $('.notion_table tbody tr'), //리스트 담고
pages = page.length,//리스트 숫자 세고
pgCount = Math.ceil(pages/currentPage), //리스트 10 올림
numbers = $('.numbers')//
   
for(let i=1;i<=pgCount;i++){
  numbers.append(`<li><a href="">${i}</a></li>`);
}

let numberBtn = numbers.find('li');
let maxPage = 1,
currentPGIdx = 0,
prevButton = $('.prevBtn'),  
nextButton = $('.nextBtn')  

function displayPG(idx){
    numberBtn.hide()
    let start = idx * maxPage;
    let end = start + maxPage;
    numberBtn.slice(start, end).show()
    
    if(currentPGIdx === 0){
      prevButton.hide();
    }else {
      prevButton.show();
    }
  
    if(currentPGIdx === pgCount - 1){
      nextButton.hide();
    }else {
      nextButton.show();
    }
  }
  displayPG(0)
  
  prevButton.click(function(){
    currentPGIdx--;
    display(maxPage * currentPGIdx);
    displayPG(currentPGIdx);
  })
  
  nextButton.click(function(){
    currentPGIdx++;
    display(maxPage * currentPGIdx);
    displayPG(currentPGIdx)
  })
  numberBtn.click(function(e){
    e.preventDefault();
    display($(this).index());
  });

  function display(idx){
    let start = idx * currentPage;
    let end = start + currentPage ;
    page.hide();
    page.slice(start, end).show();
    numberBtn.find('a').removeClass('active');
    numberBtn.eq(idx).find('a').addClass('active');  
}
display(0)