$(".down-icon").click(function(){
    $('.down-popup').addClass('block');
});
$(".close-btn").click(function(){
    $('.down-popup').removeClass('block');
});

$(".small").click(function(){
    $('.mobile-popup').addClass('none');
});

$(".header-Btn").click(function(){
    $('.display-nav').toggleClass('block');
    $('.line').toggleClass('click');
});