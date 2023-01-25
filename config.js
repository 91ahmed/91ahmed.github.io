const config = new Map()

// Menu Links text
config.set('home', 'Who I am?')
config.set('resume', 'Resume')
config.set('portfolio', 'Portfolio')
config.set('contact', 'Contact')





$(function(){
	// Menu Links text
	$('#about').text(config.get('home'))
	$('#resume').text(config.get('resume'))
	$('#portfolio').text(config.get('portfolio'))
	$('#contact').text(config.get('contact'))
})

//alert(link)

/*
if (location.hostname === "localhost" || location.hostname === "127.0.0.1" || location.hostname == '')
{
    // Local host
}
else
{
    // Live host
}
*/
