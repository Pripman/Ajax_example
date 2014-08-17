/*global document:false*/
/*global window:false*/
function MakeApi(action, requestType, args){
	var api = new XMLHttpRequest();
	api.onreadystatechange = function(){
		if(api.readyState == 4 && api.status == 200){
			action(api.responseText);
		}
	};
	api.open(requestType, "test.php" , true);
	api.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	api.send(args);
}



function makeIngridient(){
	var nameInput = document.getElementById("name").value;
	var amountInput = document.getElementById("amount").value;
	var unitInput = document.getElementById("unit").value;
	var urlArguments = "name=" + nameInput + "&amount=" + amountInput + "&unit=" + unitInput;
	var api = MakeApi(GetItemList, "POST", urlArguments);	
}

function GetItemList(){
	var api = MakeApi(writeToTable, "GET", null);
}

function DeleteItem(itemId){
	var api = new MakeApi(GetItemList, "DELETE", itemId);
}

function UpdateItem(itemId){
	var nameInput = document.getElementById("tablename" + itemId).value;
	var amountInput = document.getElementById("tableamount" + itemId).value;
	var unitInput = document.getElementById("tableunit" + itemId).value;
	var urlArguments = "id=" + itemId +"&name=" + nameInput + "&amount=" + amountInput + "&unit=" + unitInput;
	var api = MakeApi(GetItemList, "PUT", urlArguments); 
}

window.onload = function(){GetItemList()};
