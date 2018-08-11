<?php
var_dump($_REQUEST);

copy($_REQUEST['image'], '../dest/' . uniqid() . '.jpg');
