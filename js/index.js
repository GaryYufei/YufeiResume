$(document).ready(function(){
	$('.timelineitem').mouseenter(function(){
		$(this).addClass('change');
	});

	$('.timelineitem').mouseleave(function(){
		$(this).removeClass('change');
	});
    
    $('.nailthumb-container').nailthumb({width:180,height:170});
});