$(".mobile-btn").click(function(){
    $(".nav-items-mobile").slideToggle();
    $(".nav-items-mobile").css("display", "flex");   
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
})

$("#construcao").hover(function(){
    $("#construcao-titulo").css("opacity", "1");
    $("#construcao-img").css("filter", "blur(3px)")
}, function(){
    $("#construcao-titulo").css("opacity", "0")
    $("#construcao-img").css("filter", "blur()")
})

    
