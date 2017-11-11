<?php
require('config.php');

$data = json_decode(file_get_contents("php://input"));

$id = mysqli_real_escape_string($con, $data->id);

$query = mysqli_query($con, "update tbl_products set likes=likes-1 where product_id='$id'") or die ('Unable to execute query. '. mysqli_error($con));
?>
