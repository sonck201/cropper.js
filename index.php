<?php 
var_dump($_REQUEST);
var_dump($_FILES);

copy($_FILES['croppedImage']['tmp_name'], 'dest/'. uniqid() .'.png');
