var index=0;
	var speed=665;
	var w=$('.box2').width();
	var n=$('.imgs2').find('li').size();
	$('.imgs').width(w*n).css('left','-'+w+'px');
	function move(direction) {
		direction=='+'?index--:index++;
		$('.imgs2').animate({
			left: direction+'='+w+'px'},
			speed, function() {
			if($('.imgs2').css('left')=='-'+w*(n-1)+'px'){
				$('.imgs2').css('left','-'+w+'px');
				index=0;
			}
			if($('.imgs2').css('left')=='0px'){
				$('.imgs2').css('left','-'+w*(n-2)+'px');
				index=n-3;
			}
		});
	}
	$('.prev').click(function() {
		move('+');
	});
	$('.next').click(function() {
		move('-');
	});


		