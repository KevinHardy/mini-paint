$(document).ready(function() {
		var color = 'white';
		var colors = 'white green red blue yellow';
	//make pixels turn white when clicked or turn back to black when dblclicked
	$('.box').on('click', function() {
		$(this).addClass(color);
	});
	$('.box').on('dblclick', function() {
		$(this).removeClass(colors);
	});

	//reset button
	$('#reset').on('click', function() {
		$('.box').removeClass(colors);
	});

	//adding color buttons
	$('#red').on('click', function() {
		color = 'red';
	});
	$('#blue').on('click', function() {
		color = 'blue';
	});
	$('#green').on('click', function() {
		color = 'green';
	});
	$('#yellow').on('click', function() {
		color = 'yellow';
	});
	$('#white').on('click', function() {
		color = 'white';
	});
});