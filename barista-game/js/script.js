$(document).ready(function() {
	
	document.getElementById('bg-music').play();
	
    function reset(){
        $('.down').stop().css({bottom: -550}, 1500, 'swing');
        $('.right').stop().css({right: '-340px'}, 1500, 'swing');
        $('.up').stop().css({top: '-90px'}, 1500, 'swing');
        $('.bg').stop().animate({opacity: 0}, 1500, 'swing');
        $('.button').stop().css({opacity: 0}, 1500, 'swing');
        $('.hidden').stop().animate({opacity: 0}, 1500, 'swing');
        $('.filling').stop().css({opacity: 0}, 1500, 'swing');
        $('#milk-carton').stop().animate({opacity: 0}, 1500, 'swing');
        $('#pot').stop().animate({opacity: 0}, 1500, 'swing');
        $('#creamer').stop().animate({opacity: 0}, 1500, 'swing');
		$('#steamer').stop().css({'left':-350});
		$('#red-btn').stop().css({'left':-350});

        
    };

    function sceneOne(){
        $('#bg').stop().animate({'opacity':1}, 2500, 'swing');
        $('#cap1').stop().animate({'top': 200}, 1500, 'swing');
        $('#cap2').stop().delay(1500).animate({'bottom': -5}, 1500, 'swing');
        $('#cap3').stop().delay(3000).animate({'opacity':1}, 2500, 'swing');
        $('#noclue').stop().delay(1500).animate({'right': 50}, 1500, 'swing');
        $('#cap3').css('cursor','pointer');
            $('#cap3').click(function(){
                $('#cap3').off('click');
                reset();
                sceneTwo();
        });
    };
    
    function sceneTwo(){
        $('#bg2').stop().animate({'opacity':1}, 1500, 'swing');
        $('#mask').stop().delay(2500).animate({'opacity':1}, 1500, 'swing');
        $('#mask2').stop().delay(2500).animate({'opacity':1}, 1500, 'swing');
        $('#milk-carton').delay(1000).stop().animate({'top':0, 'left':20}, 1500, 'swing');
        $('#creamer').stop().delay(1000).animate({'top':0, 'left':100}, 1500, 'swing');
        $('#pot').stop().delay(1000).animate({'top':0, 'left':450}, 1500, 'swing');
        $('#cap4').stop().delay(2000).animate({'bottom':10, 'left':40}, 1500, 'swing');
        $('#pot').css('cursor','pointer');
           
				$("#pot").rotate({bind:{
  					click: function(){
						$(this).rotate({angle: 0,animateTo:-45});
						$(this).animate({top:10, left:400}, 1500, 'swing');
						$(this).delay(500).animate({opacity:0, bottom:-550}, 1500, 'swing');
						
									}
				  				}
							 });
				$('#pot').click(function(){
                $('#pot').off('click');
                $('#espresso1').stop().animate({'opacity':1,'bottom':17, 'left':296}, 1500, 'swing');
                $('#espresso2').stop().animate({'opacity':1, 'bottom':19, 'left':296}, 1500, 'swing');
                $('#cap4').stop().animate({bottom: '-550px'}, 1500, 'swing');
                $('#cap5').stop().animate({'bottom':10, 'left':40}, 2000, 'swing');
                                        });
        
        $('#milk-carton').css('cursor','pointer');
		$("#milk-carton").rotate({bind:{
  					click: function rotateRight(){
						$(this).animate({top:10, left:250}, 1500, 'swing');
						$(this).delay(1000).rotate({angle: 0,animateTo:90}, 2000);
						$(this).delay(500).animate({opacity:0, bottom:-550}, 1500, 'swing');
									}
				  				}
							 });
            $('#milk-carton').click(function(){
                $('#milk-carton').off('click');
                $('#milk1').stop().animate({'opacity':1, 'bottom':60, 'left':296}, 1500, 'swing');
                $('#milk2').stop().animate({'opacity':1, 'bottom':20, 'left':296}, 1500, 'swing'); 
                $('#cap5').stop().animate({bottom: '-550px'}, 1500, 'swing');
                $('#cap6').stop().animate({'bottom':10, 'left':40}, 2000, 'swing');
                });                     
        
        $('#creamer').css('cursor','pointer');
		$("#creamer").rotate({bind:{
  					click: function rotateRight(){
						$(this).animate({top:10, left:250}, 1500, 'swing');
						$(this).delay(1000).rotate({angle: 0,animateTo:90}, 2000);
						$(this).delay(500).animate({opacity:0, bottom:-550}, 1500, 'swing');
									}
				  				}
							 });
            $('#creamer').click(function(){
                $('#creamer').off('click');
                $('#cream').stop().animate({'opacity':1, 'bottom':20, 'left':296}, 1500, 'swing');
                $('#cap6').stop().animate({bottom: '-550px'}, 1500, 'swing');
                $('#cup').stop().delay(1000).animate({'opacity':1}, 3500, 'swing')
                $('#cap7').stop().animate({'bottom':10, 'left':40}, 2000, 'swing');
                });
        
        $('#cup').css('cursor','pointer');
            $('#cup').click(function(){
                $('#cup').off('click');
                reset();
                extraScene();
                 });
        };

	
	 function extraScene (){
		 $('#bg2').stop().animate({'opacity':1}, 1500, 'swing');
         $('#steamer').stop().delay(500).animate({'left': 160}, 1500, 'swing');
         $('#cup').stop().delay(500).animate({'bottom': 20, 'left': 320}, 1500, 'swing');
         $('#cap9').stop().delay(2000).animate({'bottom':10, 'left':40}, 1500, 'swing');
        $('#red-btn').stop().animate({'left':192}, 2500, 'swing');
            $('#red-btn').css({'cursor':'pointer'});
            $('#red-btn').click(function(){
                $('#red-btn').off('click');
				document.getElementById('steamer-s').play();
				
				setTimeout(reset,7000);
				setTimeout(sceneFour,7000)
                 });
        
        };
	
        
        function sceneFour (){
         $('#bg').stop().animate({'opacity':1}, 100, 'swing');
         $('#goodjob').stop().delay(500).animate({'right': 50}, 1500, 'swing');
         $('#done').stop().delay(500).animate({'bottom': 50, 'left': 50}, 1500, 'swing');
         $('#cap8').stop().delay(1000).animate({'bottom':10, 'left':40}, 1500, 'swing');
        $('#restart').stop().delay(3000).animate({'opacity':1}, 2500, 'swing');
            $('#restart').css('cursor','pointer');
            $('#restart').click(function(){
                $('#restart').off('click');
                reset();
                sceneOne();
                 });
        
        };
    



 sceneOne();
});
