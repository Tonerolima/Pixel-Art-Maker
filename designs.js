// Select color input
let $colorInput = $('#colorPicker');

// When size is submitted by the user, call makeGrid()
$('form').submit(function(event){
	makeGrid();
	event.preventDefault();
})

// When a cell is clicked, change the color to the colorPicker value
$('#pixelCanvas').on('click', 'td', function(event){
	$(this).css('background-color', $colorInput.val());
});

function makeGrid(){
	// Get the values from the form
	let $h =  parseInt($('#inputHeight').val());
	let $w =  parseInt($('#inputWeight').val());

	// Remove all table rows
	$('#pixelCanvas').find('tr').remove();

	// Create new rows
	let cols = "<td></td>".repeat($w);
	let rows = "<tr>" + cols + "</tr>";
	for(var y = 1; y <= $h; y++) {
		$('#pixelCanvas').append(rows);
	}
 
	// $('tr').each(function(index){
	// 	for (var x = 0; x < $w; x++) {
	// 		$(this).append('<td></td>');
	// 	}
	// })
}