var index=0;
	var speed=938;
	var w=$('.lunbo3').width();
	var n=$('.imgs3').find('li').size();
	$('.imgs3').width(w*n).css('left','-'+w+'px');
	function move(direction) {
		direction=='+'?index--:index++;
		$('.imgs3').animate({
			left: direction+'='+w+'px'},
			speed, function() {
			if($('.imgs3').css('left')=='-'+w*(n-1)+'px'){
				$('.imgs3').css('left','-'+w+'px');
				index=0;
			}
			if($('.imgs3').css('left')=='0px'){
				$('.imgs3').css('left','-'+w*(n-2)+'px');
				index=n-3;
			}
		});
	}
	$('.pv').click(function() {
		move('+');
	});
	$('.nt').click(function() {
		move('-');
	});