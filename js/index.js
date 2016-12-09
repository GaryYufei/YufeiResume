$(document).ready(function(){
    
    $('.nailthumb-container').nailthumb({width:180,height:170});
    $('.nailthumb-experiment-container').nailthumb({width:100,height:85});
    $('.nailthumb-paper-container').nailthumb({width:280,height:200});
    
    $('#undergarduate_node').click(function(){
    	$('.undergarduate').toggle("quick");
    	if($('.undergarduate').is(":visible")) {
    		$('.undergarduate').removeAttr('style');
    	}
    });

    $('.undergarduate').hide();
});