jQuery(document).ready(function($){
	"use strict";

	//Add class if retina detected
	var retina = window.devicePixelRatio > 1;
	if (retina) {
	   $('body').addClass('retina');
	}

	//menu li href implementantion
	/*$('.menu li').click(function(){
		document.location = $('a',this).attr('href');
	});*/

	//bootstrap tooltip script
	$('.menu li, .share_expand .buttons li, .comments span').tooltip();

	//background image fade script

	var bgimage = new Image();      
	bgimage.src="../img/background3.jpg";       
	$(bgimage).load(function(){
	    $('#bgmimick').animate({
			opacity:1
			},0);
		});

// portfolio page
if($(".container.portfolio").length > 0){
		//share select start
		/*$('.copy').click(function(){
			$(this).parent('.share_expand').children('input').select();
		});*/
		//share select end
		//share click start
		var isshare = 0;
		var marginTop = 0;

		$('.hover_bg .share a').click(function(){
			$(this).parents('.hover_bg').children('.share_expand').animate({
				marginTop: "-238px", 
			},400,function(){
				if(isshare===0){
					isshare = 1;
				}
			});
		});
		//share click end

		//colorbox script start
		//$('.hover_bg .preview a').colorbox();

		//the hover effect:
		$('.portfolio .span3 .slideshow').hover(function() {
            $('.container ', this).stop().animate({ marginTop: 0 }, 400);
            $('.hover_bg .share_expand', this).stop().animate({ marginTop: '-238px' }, 400);
        }, function() {
            $('.container ', this).stop().animate({ marginTop: '-78px' }, 400);
            $('.hover_bg .share_expand', this).stop().animate({ marginTop: '-476px' }, 400);
        });
		/*$('.portfolio .span3 .slideshow').hover(function(){
			//hover in script
			marginTop = $('.container ',this).css('marginTop');
			var xthis = this;
			$('.container ',this).animate({
				marginTop: "0", 
			},400);

			$('.hover_bg .share_expand',xthis).animate({
				marginTop: "-238px", 
			},400);
		},function(){
			//hover out script
			var xthis = this;
			$('.hover_bg .share_expand',xthis).animate({
				marginTop: "-476px", 
			},400);
			
			$('.container ',this).animate({
				marginTop: '-78px', 
			},400);
		});*/
		//the hover effect end
	}
	// portfolio page script end
});