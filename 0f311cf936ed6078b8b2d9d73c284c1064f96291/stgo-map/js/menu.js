$(document).ready(function(){
	
	document.getElementById('music').play();
//-----------------Menu-------------------
	
    function openMenu() {
        $('#menu-box').animate({right: '0px'}, 800, 'swing');
      $('#menu-go a').css({color: '#fff'}, 800, 'swing');
        $('#menu-go').off('click');
        $('#menu-go').click(function(){closeMenu();});
    };
    
    function closeMenu() {
        $('#menu-box').animate({right: '-320px'}, 800, 'swing');
		$('#menu-go a').css({color: '#639'}, 800, 'swing');
        $('#menu-go').off('click');
        $('#menu-go').click(function(){openMenu();});
    
    };
	
    $('#menu-go').click(function(){openMenu();});

    $('#map .mapBox1').draggable({
		stop: function() {
			resetPosition(this);
		}
	});
	
//	info boxes
	
	function openBox1() {
        $('#one, #nmnh').animate({left: '10px'}, 800, 'swing');
		$('#nmnh').css({'zIndex': '500'}, 800, 'swing');
        $('#one, #nmnh').off('click');
        $('#one, #nmnh').click(function(){closeBox1();});
    };
    
    function closeBox1() {
        $('#one, #nmnh').animate({left: '-300px'}, 800, 'swing');
        $('#one, #nmnh').off('click');
        $('#one, #nmnh').click(function(){openBox1();});
    
    };
	
    $('#set1').click(function(){openBox1();});
	
	
	function openBox2() {
        $('#two, #mr').animate({left: '10px'}, 800, 'swing');
		$('#mr').css({'zIndex': '500'});
        $('#two, #mr').off('click');
        $('#two, #mr').click(function(){closeBox2();});
    };
    
    function closeBox2() {
        $('#two, #mr').animate({left: '-300px'}, 800, 'swing');
        $('#two, #mr').off('click');
        $('#two, #mr').click(function(){openBox2();});
    
    };
	
    $('#set2').click(function(){openBox2();});
	
	function openBox3() {
        $('#three, #pda').animate({left: '10px'}, 800, 'swing');
		$('#pda').css({'zIndex': '500'});
        $('#three, #pda').off('click');
        $('#three, #pda').click(function(){closeBox3();});
    };
    
    function closeBox3() {
        $('#three, #pda').animate({left: '-300px'}, 800, 'swing');
        $('#three, #pda').off('click');
        $('#three, #pda').click(function(){openBox3();});
    
    };
	
    $('#set3').click(function(){openBox3();});
	
	function openBox4() {
        $('#four, #sch').animate({left: '10px'}, 800, 'swing');
		$('#sch').css({'zIndex': '500'});
        $('#four, #sch').off('click');
        $('#four, #sch').click(function(){closeBox4();});
    };
    
    function closeBox4() {
        $('#four, #sch').animate({left: '-300px'}, 800, 'swing');
        $('#four, #sch').off('click');
        $('#four, #sch').click(function(){openBox4();});
    
    };
	
    $('#set4').click(function(){openBox4();});
	
	
	function openBox5() {
        $('#five, #lmp').animate({left: '10px'}, 800, 'swing');
		$('#lmp').css({'zIndex': '500'});
        $('#five, #lmp').off('click');
        $('#five, #lmp').click(function(){closeBox5();});
    };
    
    function closeBox5() {
        $('#five, #lmp').animate({left: '-300px'}, 800, 'swing');
        $('#five, #lmp').off('click');
        $('#five, #lmp').click(function(){openBox5();});
    
    };
	
    $('#set5').click(function(){openBox5();});
	
	
	function openBox6() {
        $('#six, #op').animate({left: '10px'}, 800, 'swing');
		$('#op').css({'zIndex': '500'});
        $('#six, #op').off('click');
        $('#six, #op').click(function(){closeBox6();});
    };
    
    function closeBox6() {
        $('#six, #op').animate({left: '-300px'}, 800, 'swing');
        $('#six, #op').off('click');
        $('#six, #op').click(function(){openBox6();});
    
    };
	
    $('#set6').click(function(){openBox6();});
	
	
	function openBox7() {
        $('#seven, #ns').animate({left: '10px'}, 800, 'swing');
		$('#ns').css({'zIndex': '500'});
        $('#seven, #ns').off('click');
        $('#seven, #ns').click(function(){closeBox7();});
    };
    
    function closeBox7() {
        $('#seven, #ns').animate({left: '-300px'}, 800, 'swing');
        $('#seven, #ns').off('click');
        $('#seven, #ns').click(function(){openBox7();});
    
    };
	
    $('#set7').click(function(){openBox7();});
	
	
	function openBox8() {
        $('#eight, #nmfa').animate({left: '10px'}, 800, 'swing');
		$('#nmfa').css({'zIndex': '500'});
        $('#eight, #nmfa').off('click');
        $('#eight, #nmfa').click(function(){closeBox8();});
    };
    
    function closeBox8() {
        $('#eight, #nmfa').animate({left: '-300px'}, 800, 'swing');
        $('#eight, #nmfa').off('click');
        $('#eight, #nmfa').click(function(){openBox8();});
    
    };
	
    $('#set8').click(function(){openBox8();});
	
	
	function openBox9() {
        $('#nine, #slh').animate({left: '10px'}, 800, 'swing');
		$('#slh').css({'zIndex': '500'});
        $('#nine, #slh').off('click');
        $('#nine, #slh').click(function(){closeBox9();});
    };
    
    function closeBox9() {
        $('#nine, #slh').animate({left: '-300px'}, 800, 'swing');
        $('#nine, #slh').off('click');
        $('#nine, #slh').click(function(){openBox9();});
    
    };
	
    $('#set9').click(function(){openBox9();});
	
	
	function openBox10() {
        $('#ten, #lc').animate({left: '10px'}, 800, 'swing');
		$('#lc').css({'zIndex': '500'});
        $('#ten, #lc').off('click');
        $('#ten, #lc').click(function(){closeBox10();});
    };
    
    function closeBox10() {
        $('#ten, #lc').animate({left: '-300px'}, 800, 'swing');
        $('#ten, #lc').off('click');
        $('#ten, #lc').click(function(){openBox10();});
    
    };
	
    $('#set10').click(function(){openBox10();});
	
	
//	--------Menu functions--------------
	
    $('#5normal').click(function() {
        $('.mapBox1').stop().animate({top: '-300px', left: '-100px'}, 200, 'swing');
    });
    $('#moneda').click(function() {
        $('.mapBox1').stop().animate({left: '-654px', top:'-383px'}, 200, 'swing');
    });
    $('#bellasart').click(function() {
        $('.mapBox1').stop().animate({top: '-89px', left:'-1023'}, 200, 'swing');
    });
    $('#chascona').click(function() {
        $('.mapBox1').stop().animate({left: '-1256px', top:'-55px'}, 200, 'swing');
    });
	$('#mapocho').click(function() {
        $('.mapBox1').stop().animate({top:'-0px', left: '-359px'}, 200, 'swing');
    });
	$('#stlucia').click(function() {
        $('.mapBox1').stop().animate({top:'-163px', left: '-1023px'}, 200, 'swing');
    });
	$('#stcris').click(function() {
        $('.mapBox1').stop().animate({top:'-12px', left: '-1291'}, 200, 'swing');
    });
	$('#plarmas').click(function() {
        $('.mapBox1').stop().animate({top:'-44px', left: '-821px'}, 200, 'swing');
    });
	$('#estadio').click(function() {
        $('.mapBox1').stop().animate({top:'-849px', left: '-1876px'}, 200, 'swing');
    });
	$('#ohiggings').click(function() {
        $('.mapBox1').stop().animate({top:'-894px', left: '-644px'}, 200, 'swing');
    });
    

	
//	---------------highlights---------------------
	
$('.highlight').draggable();
	
	
//	----------reset position----------
	
	function resetPosition(target){
		if($(target).css('top').substring(0, $(target).css('top').length - 2) > 0){
			$(target).animate({top: '0px'}, { duration: 500, queue: false } , 'swing');
		} else if($(target).css('top').substring(0, $(target).css('top').length - 2) < -1693){
			$(target).animate({top: '-1693px'}, { duration: 500, queue: false } , 'swing');
		};
		if($(target).css('left').substring(0, $(target).css('left').length - 2) > 0){
			$(target).animate({left: '0px'}, { duration: 500, queue: false } , 'swing');
		} else if($(target).css('left').substring(0, $(target).css('left').length - 2) < -2142){
			$(target).animate({left: '-2142px'}, { duration: 500, queue: false } , 'swing');
		};
	};
	
    

});