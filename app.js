const previewFile = () => {
    let file = document.querySelector('input[type=file]').files[0];
    let preview = document.getElementById('image');

    let fileReader = new FileReader();
    fileReader.addEventListener('load', () => {
        preview.src = fileReader.result;
        initCropper();
    }, false);
    fileReader.readAsDataURL(file);
};

let cropper;
const initCropper = () => {
    cropper = new Cropper(document.getElementById('image'), {
        viewMode: 2,
        aspectRatio: 1,
    });

    return cropper;
};

$('#btn__getData').on('click', () => {
    console.log(cropper.getData());
});

$('#btn__getCanvasData').on('click', () => {
    console.log(cropper.getCanvasData());
});

$('#btn__getCroppedCanvas').on('click', () => {
    let dataUrl = cropper.getCroppedCanvas().toDataURL();
    $(`<img src="${dataUrl}">`).appendTo($('body'));
    cropper.getCroppedCanvas().toBlob((blob) => {
        const formData = new FormData();
        formData.append('croppedImage', blob);

        $.ajax({
            url: 'http://localhost/test/cropper/',
            method: 'POST',
            data: formData,
            processData: false,
            contentType: false,
        }).done(() => {
            console.log('Success');
        }).fail(() => {
            console.log('Error');
        });
    });
});
