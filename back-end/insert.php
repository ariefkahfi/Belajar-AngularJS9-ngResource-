<?php
include "koneksi.php";

$nama = $_POST['nama'];
$alamat = $_POST['alamat'];

$query_insert = "insert into person (nama,alamat) values ('$nama','$alamat')";

$eks = mysqli_query($con,$query_insert);

if($eks){
    echo "Query OK";
}else{
    echo mysqli_error($con);
}
