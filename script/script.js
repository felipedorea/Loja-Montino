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

    
