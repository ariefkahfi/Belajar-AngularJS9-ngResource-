<?php
include "koneksi.php";

$id = $_GET['id'];


$query_delete = "delete from person where id = '$id'";

$eks = mysqli_query($con,$query_delete);

if($eks){
    echo "Query OK";
}else{
    echo mysqli_error($con);
}