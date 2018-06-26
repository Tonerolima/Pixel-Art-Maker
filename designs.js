// Select color input
let $colorInput = $('#colorPicker');

// When size is submitted by the user, call makeGrid() and prevent default buton behavior
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

	//pre-process the number of columns and wrap them in a row
	let rows = "<tr>" + "<td></td>".repeat($w) + "</tr>";

	//append rows to table "height" number of times
	for(var y = 1; y <= $h; y++) {
		$('#pixelCanvas').append(rows);
	}
}