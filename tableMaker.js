function writeToTable(items){
	var itemList = JSON.parse(items);	
	var MinDiv = document.getElementById('MinDiv');
	var newTable = document.createElement('table');
	newTable.setAttribute('id', 'center');
	var headerRow = document.createElement('tr');
	headerRow.innerHTML = '<th>Vare</th><th>Mængde</th><th>Enhed</th>';
	newTable.appendChild(headerRow);

	for(index = 0; index < itemList.length; index++){
		var newRow = document.createElement('tr');
		var item = itemList[index];
 	        newRow.appendChild(MakeCell(item.name, 'tablename' + item.id));
		newRow.appendChild(MakeCell(item.amount, 'tableamount' + item.id));
		newRow.appendChild(MakeCell(item.unit, 'tableunit' + item.id));
		newRow.appendChild(makeButton(DeleteItem, item.id, "Slet"));
		newRow.appendChild(makeButton(UpdateItem, item.id, 'Opdater vare'));
		newTable.appendChild(newRow);
	}

	while(MinDiv.firstChild){
		MinDiv.removeChild(MinDiv.firstChild);
	}
	MinDiv.appendChild(newTable);	
}


function MakeCell(tagValue, tagId){
	var newCell = document.createElement('td');
	var newBox = document.createElement('input');
	newBox.setAttribute('type', 'text');
	newBox.setAttribute('id', tagId);
	newBox.setAttribute('class', 'border-less');
	newBox.setAttribute('value', tagValue);
	newCell.appendChild(newBox);
	return newCell;
}

function makeButton(onclickMethod, itemId, text){
	var newCell = document.createElement('td');
	var newButton = document.createElement('button');
	newButton.setAttribute('type', 'button');
	newButton.setAttribute('class', 'border-less');
	newButton.onclick = function(){onclickMethod(itemId);};
        newButton.innerHTML = text
	newCell.appendChild(newButton);	
	return newCell;
}
