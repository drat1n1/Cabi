$(document).ready(function () {
  // 각 탭 버튼을 클릭했을 때 해당 탭의 최상단 위치로 부드럽게 스크롤 이동하는 함수
  $(".tab-button").click(function () {
    const targetPart = $(this).data("target");
    const targetOffset =
      $(".table." + targetPart).offset().top -
      $(".price_container").offset().top;
    $(".price_container").animate(
      {
        scrollTop: targetOffset + $(".price_container").scrollTop(),
      },
      800
    );
  });
});
