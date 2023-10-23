$("#title1").on("click", function(){
    $("#title1").toggleClass("active");
    $("#title1 > i").toggleClass("chevron")
    $("#content1").slideToggle("slow")
})

$("#title2").on("click", function(){
    $("#title2").toggleClass("active");
    $("#title2 > i").toggleClass("chevron")
    $("#content2").slideToggle("slow")
})