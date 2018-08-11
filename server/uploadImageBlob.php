<?php
var_dump($_REQUEST);
var_dump($_FILES);

copy($_FILES['croppedImage']['tmp_name'], __DIR__ . '/../dest/' . uniqid() . '.jpg');
