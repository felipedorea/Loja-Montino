$(".mobile-btn").click(function(){
    $(".nav-items-mobile").slideToggle();
    $(".nav-items-mobile").css("display", "flex");
    $(".fa-bars").toggleClass("fa-xmark");
});

$("#eletrico").hover(function(){
    $("#eletrico-titulo").css("opacity", "1");
    $("#eletrico-img").css("filter", "blur(3px)")
}, function(){
    $("#eletrico-titulo").css("opacity", "0")
    $("#eletrico-img").css("filter", "blur()")
})

$("#hidraulico").hover(function(){
    $("#hidraulico-titulo").css("opacity", "1");
    $("#hidraulico-img").css("filter", "blur(3px)")
}, function(){
    $("#hidraulico-titulo").css("opacity", "0")
    $("#hidraulico-img").css("filter", "blur()")
});

$("#construcao").hover(function(){
    $("#construcao-titulo").css("opacity", "1");
    $("#construcao-img").css("filter", "blur(3px)")
}, function(){
    $("#construcao-titulo").css("opacity", "0")
    $("#construcao-img").css("filter", "blur()")
});

$(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    center: true,
    margin: 2,
    dots: true,
    nav: false,
    autoplayTimeout: 8000,
    autoplaySpeed: 2000,
    // autoWidth: false
});




    
