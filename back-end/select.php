<?php
include "koneksi.php";

$arr = array();

$sql = mysqli_query($con,"select * from person");


while($rs = mysqli_fetch_array($sql,MYSQLI_ASSOC)){
    array_push($arr,$rs);
}

echo json_encode(array('person'=>$arr));
