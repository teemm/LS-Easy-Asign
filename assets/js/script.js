$('.container > div').on('click', function (){
 topp=100*parseFloat($(this).css("top"))/parseFloat($("body").css("height"));
 $(".left").css("top",topp+"%").removeClass("one-bl two-bl thre-bl four-bl five-bl");
 $(this).removeClass("right").addClass('left').siblings('.transition').addClass('right').removeClass("left");
});