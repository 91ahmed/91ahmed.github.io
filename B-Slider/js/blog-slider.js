$(document).ready(function()
{
	/** Bs Slider **/
	$('.bs-child-post-content').on('click', function(){
		$('.bs-child-post-content').removeClass('bs-content-active');
		$(this).addClass('bs-content-active');
		
		var bs_id = $(this).attr('data-id'); // post id
		
		$('.bs-main-post-content').fadeOut(400);
		$("div[data-id='"+bs_id+"']").fadeIn(400); // select element by data-id attribute
	});
	
	/** Nice Scroll **/
	$('.bs-child-post-overflow').niceScroll({
		horizrailenabled:false,
		cursorcolor: '#222627',
		cursoropacitymin:0.4,
		cursoropacitymax:0.8,
		cursorborder:'1px solid transparent',
		touchbehavior: true,
		preventmultitouchscrolling: false, 
	});
	
});