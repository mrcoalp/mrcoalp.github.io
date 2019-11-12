$(window).scroll(() => {
  AOS.init();

  const scrollTop = $(window).scrollTop();

  if (scrollTop >= 20) {
    $(".arrow-scroll").css("display", "none");
  } else if (scrollTop < 20) {
    $(".arrow-scroll").css("display", "block");
  }
});

function scrollToMain() {
  $("html, body").animate(
    {
      scrollTop: $(window).height()
    },
    "slow",
    "swing"
  );
}
