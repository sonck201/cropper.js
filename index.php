<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Cropper test</title>
    <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="node_modules/cropperjs/dist/cropper.min.css">
    <link rel="stylesheet" href="app.css">
    <base href="http://localhost<?= $_SERVER['REQUEST_URI']?>">
</head>
<body>

<div class="btn btn--group">
    <input type="file" id="btn_file" onchange="previewFile()" accept="image/*">
    <button id="btn__clearUploadedImage">Clear uploaded image</button>
    <button id="btn__getData">Get data</button>
    <button id="btn__getCanvasData">Get canvas data</button>
    <button id="btn__getCroppedCanvas">Get cropped canvas</button>
</div>
<img src="" id="image">

<?php include_once 'component/modal.php'?>

<script src="node_modules/jquery/dist/jquery.min.js"></script>
<script src="node_modules/popper.js/dist/umd/popper.min.js"></script>
<script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
<script src="node_modules/cropperjs/dist/cropper.min.js"></script>
<script src="app.js"></script>
</body>
</html>