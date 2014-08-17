/*global document: false*/
function makeButton(onclickMethod, itemId, text){
	var newCell = document.createElement('td');
	var newButton = document.createElement('button');
	newButton.setAttribute('type', 'button');
	newButton.setAttribute('class', 'tableItem');
	newButton.onclick = function(){onclickMethod(itemId);};
        newButton.innerHTML = text;
	newCell.appendChild(newButton);	
	return newCell;
}

function MakeCell(tagValue, tagId){
	var newCell = document.createElement('td');
	var newBox = document.createElement('input');
	newBox.setAttribute('type', 'text');
	newBox.setAttribute('id', tagId);
	newBox.setAttribute('class', 'tableItem');
	newBox.setAttribute('value', tagValue);
	newCell.appendChild(newBox);
	return newCell;
}

function writeToTable(itemsList){
	var items = JSON.parse(itemsList);	
	var MinDiv = document.getElementById('MinDiv');
	var newTable = document.createElement('table');

	newTable.setAttribute('class', 'center');
	if(items.length !== 0){
		var headerRow = document.createElement('tr');
		headerRow.innerHTML = '<th>Vare</th><th>Mængde</th><th>Enhed</th>';
		newTable.appendChild(headerRow);
	}

	var i;
	var newRow;
	for(i = 0; i < items.length; i += 1){
		newRow = document.createElement('tr');
 	        newRow.appendChild(MakeCell(items[i].name, 'tablename' + items[i].id));
		newRow.appendChild(MakeCell(items[i].amount, 'tableamount' + items[i].id));
		newRow.appendChild(MakeCell(items[i].unit, 'tableunit' + items[i].id));
		newRow.appendChild(makeButton(DeleteItem, items[i].id, "Slet"));
		newRow.appendChild(makeButton(UpdateItem, items[i].id, 'Opdater vare'));
		newTable.appendChild(newRow);
	}

	while(MinDiv.firstChild){
		MinDiv.removeChild(MinDiv.firstChild);
	}
	MinDiv.appendChild(newTable);	
}



