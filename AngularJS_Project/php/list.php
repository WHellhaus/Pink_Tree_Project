<?php
require('config.php');

$query = mysqli_query($con, 'select * from tbl_products');

$name_list = array();
while($rows = mysqli_fetch_assoc($query)){
	$product_list[] = $rows;
}

print json_encode($product_list);
?>
