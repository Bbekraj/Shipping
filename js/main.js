var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});

$(window).scroll(function(){
    if($(this).scrollTop()>100){
        $("header").addClass("sticky")
        $(".array").show()
    }
    else{
        $("header").removeClass("sticky")
        $(".array").hide()
    }
})
var myCarousel = document.querySelector('#carouselExampleSlidesOnly')
var carousel = new bootstrap.Carousel(myCarousel);