$(document).ready(function(){

	var close = $('.close-btn'),
		openButton = $('.open-box')
	
	$.each(openButton, function(index, val){
		$(this).on('click', function(event){
			$(this).parent().siblings('.modal-container').addClass('open');
			close.fadeIn(4000);
			$("body").css({'overflow': 'hidden', 'height': '100%'});
			event.preventDefault();
		});
		
	close.on('click', function(){
		$('.modal-container').removeClass('open');
		close.fadeOut(1000);
		$("body").css({'overflow': 'auto'});
		});
		
		
		
	});
		


});