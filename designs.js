// Set color input and table constants
const COLOR_INPUT = $('#colorPicker');
const CANVAS = $('#pixelCanvas');

/* 
** initialize Grid height and width variables globally
** this will be needed to modify grid later
*/
let height = 0;
let width = 0;

// When the form submitted by the user, call makeGrid()
$('#sizePicker').submit(function(event){
    //prevent default buton behavior
    event.preventDefault();

    //Get the values from the form.
    height =  parseInt($('#inputHeight').val());
    width =  parseInt($('#inputWeight').val());

    //call the makeGrid function with the input parameters
    makeGrid(height, width);
})


// Event listener for the adjustGrid form
$('#adjustGrid').submit(function(event){
	//prevent default buton behavior
	event.preventDefault();

    // get values from form input 
    let size = parseInt($('#size').val());
    let axis = $('#axis').val();
    let mode = $('#mode').val();
    let pos = $('#pos').val();

    // call functions depending on input values
    if(axis === 'x' && mode === 'add'){
        addColumns(size, pos);
    }
    else if(axis === 'x' && mode === 'remove'){
        removeColumns(size, pos);
    }
    else if(axis === 'y' && mode === 'add'){
        addRows(size, pos);
    }
    else if(axis === 'y' && mode === 'remove'){
        removeRows(size, pos);
    }
    else if(axis === 'z' && mode === 'add'){
        addColumns(size, pos);
        addRows(size, pos);
    }
    else if(axis === 'z' && mode === 'remove'){
        removeColumns(size), pos;
        removeRows(size, pos);
    }
})


// When a cell is clicked, change the color to the colorPicker value
$('#pixelCanvas').on('click', 'td', function(event){
    $(this).css('background-color', COLOR_INPUT.val());
})


// When a cell is right-clicked, change the color to white
$('#pixelCanvas').on('contextmenu', 'td', function(event){
    event.preventDefault();
    $(this).css('background-color', 'rgb(255, 255, 255)');
})



// Function to create a new Grid
function makeGrid(h, w){
	// Remove existing grid, if any
	$('tbody').remove();

	/* create a new tbody element that will hold the rows
	** this improves overall performance as we only have to remove one
	** element when clearing the grid (especially a large grid)
	*/
	CANVAS.append('<tbody></tbody>');

	/* pre-process the number of columns and wrap them in a row
	** this eliminates the use of two loops to create the grid
	*/
	let rows = '<tr>' + '<td></td>'.repeat(w) + '</tr>';

	//append rows to tbody, "height" number of times
	for(let y = 1; y <= h; y++) {
		$('tbody').append(rows);
	}
}


// function to append new columns to existing Grid
function addColumns(count, pos){
    width += count;
    if(pos === 'start'){
        return $('tr').prepend('<td></td>'.repeat(count));
    }
    $('tr').append('<td></td>'.repeat(count));
}


// function to remove columns from existing Grid
function removeColumns(count, pos){
    width -= count;
    if(pos === 'start'){
        for(let j=count; j>0; j--){
            $('tr td:first-child').remove();
        }
        return;
    }
    for(let j=count; j>0; j--){
        $('tr td:last-child').remove();
    }
}


// function to append new rows to existing Grid
function addRows(count, pos){
    height += count;
    if(pos === 'start'){
        for(let j=count; j>0; j--){
            $('tbody').prepend('<tr>'+'<td></td>'.repeat(width)+'</tr>');
        }
        return;
    }
    for(let j=count; j>0; j--){
        $('tbody').append('<tr>'+'<td></td>'.repeat(width)+'</tr>');
    }
}


// function to remove rows from existing Grid
function removeRows(count, pos){
    height -= count;
    if(pos === 'start'){
        for(let j=count; j>0; j--){
            $('tbody tr:first-child').remove();
        }
        return;
    }
    for(let j=count; j>0; j--){
        $('tbody tr:last-child').remove();
    }
}