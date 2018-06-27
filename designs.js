// Select color input
const $colorInput = $('#colorPicker');
const $canvas = $('#pixelCanvas');

//When size is submitted by the user, call makeGrid()
$('form').submit(function(event){
	//prevent default buton behavior
	event.preventDefault();

	//Get the values from the form.
	let $height =  $('#inputHeight').val();
	let $width =  $('#inputWeight').val();

	//call the makeGrid function with the input parameters
	makeGrid($height, $width);
})


// When a cell is clicked, change the color to the colorPicker value
$('#pixelCanvas').on('click', 'td', function(event){
	$(this).css('background-color', $colorInput.val());
})


function makeGrid(height, width){
	// Remove existing grid, if any
	$('tbody').remove();

	/* create a new tbody element that will hold the rows
	** this improves overall performance as we only have to remove one
	** element when clearing the grid (especially a large grid)
	*/
	$canvas.append("<tbody></tbody>");

	/* pre-process the number of columns and wrap them in a row
	** this eliminates the use of two loops to create the grid
	*/
	let rows = "<tr>" + "<td></td>".repeat(width) + "</tr>";

	//append rows to tbody, "height" number of times
	for(let y = 1; y <= height; y++) {
		$('tbody').append(rows);
	}
}