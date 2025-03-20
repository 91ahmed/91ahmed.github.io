$(document).ready(function () {

	// Initialize Select Picker
	$('.selectpicker').selectpicker()

	// Initialize WOW animation
	new WOW().init();

	// Dropdown list
	$('.list-l').on('click', function () {
		if ($('.list-drop-ul').hasClass('active-li-list')) {
			$('.list-drop-ul').removeClass('active-li-list')
		} else {
			$(this).find('.list-drop-ul').addClass('active-li-list')
		}
	})

	$('.list-l ul li').on('focusout', function () {
		$('.list-drop-ul').removeClass('active-li-list')
	})

})