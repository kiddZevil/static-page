// JavaScript Document
/*$(function(){
 $('.nav_one').hover(function(){
 $(".goods_type").show();
 },function(){
 $(".goods_type").hide();
 })
 })*/


$(function () {
    $(".submenu").find("a").click(function () {
        $(this).parent().parent().find("a").removeClass("this_inner");
        $(this).addClass("this_inner");
    });
    $("#menubox").find(".menuclick").click(function () {
        $(this).next().slideToggle("fast").end().parent().siblings().find(".submenu").end().find("i").addClass("zg_arrow").removeClass("zg_arrow_up");
        var t = $(this).find("i").attr("class");
        /*    alert(t);*/
        $(this).find("i").addClass((t == "zg_arrow" ? "zg_arrow_up" : "zg_arrow")).removeClass(t);
    });
});