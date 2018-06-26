// Select color input
const $colorInput = $('#colorPicker');
const $canvas = $('#pixelCanvas');

/* 
** When size is submitted by the user, call makeGrid()
** and prevent default buton behavior
*/
$('form').submit(function(event){
	event.preventDefault();
	/*
	** Get the values from the form.
	** parseInt converts the values from text to integer
	*/
	let $height =  parseInt($('#inputHeight').val());
	let $width =  parseInt($('#inputWeight').val());

	//call the makeGrid function with the input parameters
	makeGrid($height, $width);
})


// When a cell is clicked, change the color to the colorPicker value
$('#pixelCanvas').on('click', 'td', function(event){
	$(this).css('background-color', $colorInput.val());
})


function makeGrid(height, width){
	// Remove all rows from the table
	$canvas.find('tr').remove();

	/* pre-process the number of columns and wrap them in a row
	** this eliminates the use of two loops to create the grid
	*/
	let rows = "<tr>" + "<td></td>".repeat(width) + "</tr>";

	//append rows to table, "height" number of times
	for(let y = 1; y <= height; y++) {
		$canvas.append(rows);
	}
}