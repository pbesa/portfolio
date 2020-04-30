$(document).ready(function(){

	var close = $('.close-btn, .modal-overlay'),
		openButton = $('.open-box')

	$.each(openButton, function(index, val){
		$(this).on('click', function(event){
			$(this).parent().siblings('.modal-container').addClass('open');
			$("body").css({'overflow': 'hidden', 'height': '100%'});
			$('.modal-overlay').fadeIn(500);
			event.preventDefault();
		});

	close.on('click', function(){
		$('.modal-container').removeClass('open');
		// close.fadeOut(4000);
		$("body").css({'overflow': 'auto'});
		$('.modal-overlay').fadeOut(500);
		event.preventDefault();
		});

	});




});
