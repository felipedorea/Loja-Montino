$(window).on('load', function(){
    $(".marketing").css("display", "flex");
});

fechar();

function fechar(){
    $("#fechar").on('click', function(){
        $(".marketing").css("display", "none");
    });
    $("body").on('click', function(){
        $(".marketing").css("display", "none");
    });
}
