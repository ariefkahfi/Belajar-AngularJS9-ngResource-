<?php
include "koneksi.php";

$id = $_POST['id'];
$nama = $_POST['nama'];
$alamat = $_POST['alamat'];

$query_update = mysqli_query($con
,"update person p set p.nama = '$nama' , p.alamat = '$alamat' where p.id = '$id' ");

if($query_update){
   echo "Query OK" ;
}else{
    echo mysqli_error($con);
}
