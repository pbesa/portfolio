$(document).ready(function($) {
	$('.automatic-slider').unslider({
		autoplay: true,
		arrows: {
			prev: '<a class="unslider-arrow prev">&#8249;</a>',
			next: '<a class="unslider-arrow next">&#8250;</a>',
		}
	});
	

    $('.toggle-nav').click(function(e) {
        $(this).toggleClass('icon-menu-icon icon-close-icon white');
        $('.menu ul').slideToggle();
		
        e.preventDefault();
    });

	


    $('.desc').hide();

    $('.open').on('click', function(e){	
        $(".desc").slideUp("fast");
        $(".desc", this).stop().slideToggle("fast");
    });

	
	
	
	
//	Parallax
	$(window).scroll(function(){
		var wScroll = $(this).scrollTop();
		
		$('.head-wine').css({
			'transform' : 'translate(0, '+ wScroll /4 +'%)'
		});
		
		$('.corkscrew').css({
			'transform' : 'rotate(-'+ wScroll /2 +'deg)'
		});
		
		$('.slogan').css({
			'transform' : 'translate(0, '+ wScroll /14 +'%)'
		});
	});
	
});
