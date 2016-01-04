$('.container > div.basic').on('click', function (){
 scope = $(this);
 if(!scope.hasClass("basic"))return '';
 slide=scope.data("slide");
 topp=100*parseFloat($(this).css("top"))/parseFloat($("body").css("height"));
 $(".active").css("top",topp+"%").addClass(slide+"active allin");
 scope.removeClass("blocks allin")
	.prependTo('.container').hide();
 scope.show().addClass(slide+"active active").siblings()
 	.addClass(slide+'blocks blocks').removeClass("active");
 $('.container > div.basic').removeClass("basic");
});
$(".container").on("click","[class*='blocks']",function(){
	array=$(".active").attr("class").split(" ");
	index=array.indexOf("active");
	active=array[index-1];
	fixactive=active.substr(0,active.length-6);
	$(".active").addClass("allin "+fixactive+"blocks blocks").removeClass(fixactive+"active active");
	scope=$(this);
	scope.addClass(fixactive+"active active").removeClass(fixactive+"blocks blocks");
	setTimeout(function(){scope.prependTo('.container');},50);
});