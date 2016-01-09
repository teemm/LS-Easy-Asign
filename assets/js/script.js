	
	$('.container > div.basic').on('click', function(){
 	scope = $(this);
 	$('.content > div').removeClass("main").show('co-text');
 	if(!scope.hasClass("basic"))return '';
 	slide=scope.data("slide");
 	topp=100*parseFloat($(this).css("top"))/parseFloat($("body").css("height"));
 	$(".active").css("top",topp+"%").addClass(slide+"active all");
 	scope.removeClass("blocks all")
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
	$(".active").addClass("all "+fixactive+"blocks blocks").removeClass(fixactive+"active active");
	scope=$(this);
	scope.addClass(fixactive+"active active").removeClass(fixactive+"blocks blocks");
	setTimeout(function(){scope.prependTo('.container');},50);
});

	$('.closse').on('click', function(){
	$('.container > div').removeClass('active leftactive rightactive leftblocks rightblocks blocks');
	setTimeout(function(){$('.container > div').addClass('basic all');},50);

});