<?php
include "koneksi.php";

$id = $_GET['id'];

$person = null;

$queryGetOne = mysqli_query($con,"select * from person where id = '$id'");

$rs = mysqli_fetch_assoc($queryGetOne);
$person['person'] = $rs;

echo json_encode($person);