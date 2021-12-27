$(".mobile-toggler").click(function () {
  $(this).toggleClass("close");
  $(".menu-wrapper").toggleClass("opened");
});

$(document).mouseup(function (e) {
  var container = $(".menu-wrapper");
  var MobileToggler = $(".mobile-toggler");

  if (
    !container.is(e.target) &&
    container.has(e.target).length === 0 &&
    !MobileToggler.is(e.target) &&
    MobileToggler.has(e.target).length === 0
  ) {
    container.removeClass("opened");
    MobileToggler.removeClass("close");
  }
});

$(window).on("resize load", function(){
    if($( window ).width() < 768){
        $(".menu-list li").appendTo(".navbar-collapse .navbar-nav");
    } else{
        $(".navbar-nav li:not(.nav-item)").appendTo(".menu-list");
    }
});


window.onscroll = () => {
    const Header = document.querySelector("header");
    if(window.scrollY >= 20){
        Header.classList.add("sticked");
    } else {
        Header.classList.remove("sticked");
    }
}