$(document).ready(function () {

	// Initialize Select Picker
	$('.selectpicker').selectpicker()

	// Initialize WOW animation
	new WOW().init();

	// Dropdown list
	$('.list-btn').on('click', function () {
		// $('.link-drop-ul').removeClass('active-li-list')
		// if ($(this).find('.link-drop-ul').hasClass('active-li-list')) {
			
		// }
		$(this).find('.link-drop-ul').toggleClass('active-li-list')
	})	

})