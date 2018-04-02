var $line = $('.img1');
var $win = $(window);

$win.on('scroll', function() {
	var top = $win.scrollTop();
	console.log(top);
	$line.css('transform', 'rotate(' + top + 'deg)');
});