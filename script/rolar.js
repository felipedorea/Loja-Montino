$(window).on("scroll", function(){
    if($(this).scrollTop() > 300){
    $(".voltar-cima").fadeIn()
    }else{
        $(".voltar-cima").fadeOut();
    }
});