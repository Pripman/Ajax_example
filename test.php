<?php
mysql_connect("127.0.0.1", "root", "13211321") or die(mysql_error());
mysql_select_db("indkoeb") or die(mysql_error());

	//Get all the items in the list
        if($_SERVER[REQUEST_METHOD] == "GET"){
               $data = mysql_query("SELECT * from vareliste") or die(mysql_error());
                $objects = array();
                while($info = mysql_fetch_object($data)){
                         array_push($objects, $info);
                }
                echo json_encode($objects);
	}

	//Make new item
        else if($_SERVER[REQUEST_METHOD] == "POST"){
                $name = "'" . $_POST['name'] . "'";
                $amount = $_POST['amount'];
                $unit = "'" . $_POST['unit'] . "'";
		$query = "INSERT into vareliste(name, amount, unit)VALUES(" . $name . "," . $amount . "," . $unit . ")";
	 	mysql_query($query) or die (mysql_error());
	}

	//Delete an item
	else if($_SERVER[REQUEST_METHOD] == "DELETE"){
		$id = file_get_contents("php://input");
		mysql_query("DELETE from vareliste WHERE id=" . $id);
	}

	//Update item with new parameters 
        else if($_SERVER[REQUEST_METHOD] == "PUT"){
		parse_str(file_get_contents("php://input"), $_UPDATE);
                $name = "'" . $_UPDATE['name'] . "'";
                $amount = $_UPDATE['amount'];
                $unit = "'" . $_UPDATE['unit'] . "'";
		$id = $_UPDATE['id']; 	
		$query = "UPDATE vareliste SET name=" . $name . "," . "amount=" . $amount . "," . "unit=" . $unit . " WHERE id=" . $id	;
		mysql_query($query) or die(mysql_error());
	}
	else echo "Request method not found"
?>
