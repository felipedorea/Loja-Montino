$("#imagemproduto1").on('click', function(){
    $("#imagemproduto1").css("border", "3px solid black");
    $("#imagemproduto2").css("border", "none");
    $("#imagemproduto3").css("border", "none");
    $("#imagemproduto4").css("border", "none");
});

$("#imagemproduto2").on('click', function(){
    $("#imagemproduto2").css("border", "3px solid black");
    $("#imagemproduto1").css("border", "none");
    $("#imagemproduto3").css("border", "none");
    $("#imagemproduto4").css("border", "none");
});

$("#imagemproduto3").on('click', function(){
    $("#imagemproduto3").css("border", "3px solid black");
    $("#imagemproduto2").css("border", "none");
    $("#imagemproduto1").css("border", "none");
    $("#imagemproduto4").css("border", "none");
});

$("#imagemproduto4").on('click', function(){
    $("#imagemproduto4").css("border", "3px solid black");
    $("#imagemproduto2").css("border", "none");
    $("#imagemproduto3").css("border", "none");
    $("#imagemproduto1").css("border", "none");
});