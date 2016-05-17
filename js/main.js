$(document).ready(function(){

	//featured dishes slider initialisation
	$("#dishes").carouFredSel({
		circular: true,
		infinite: false,
		auto 	: false,
		prev	: {
			key		: "left"
		},
		next	: {
			key		: "right"
		},
		pagination	: "#slider_nav"
	});






	//gallery hover effect
	$('.gallery .media img').hover(function(){
		$('.gallery .media img').addClass('inactive');
		$(this).removeClass('inactive').addClass('active');
	}, function(){
		$('.gallery .media img').removeClass('inactive');
	});
});
