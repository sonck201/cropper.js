$('#btn__clearUploadedImage').on('click', () => {
    $.ajax({
        url: 'server/clearUploadedImage.php',
        method: 'POST',
    }).done(() => {
        $('.img__cropped').remove();
    });
});

let cropper;
const previewFile = () => {
    let file = document.querySelector('input[type=file]').files[0];
    let preview = document.getElementById('image');

    let fileReader = new FileReader();
    fileReader.addEventListener('load', async () => {
        let img = new Image();
        img.src = fileReader.result;

        await img.addEventListener('load', () => {
            preview.src = fileReader.result;

            cropper = initCropper();
        });

        if (img.width === 0 || img.height === 0) {
            console.error('Not valid image');
        } else {
            console.log(img.width, img.height);
        }
    }, false);
    fileReader.readAsDataURL(file);
};

const initCropper = () => {
    if (cropper) {
        cropper.destroy();
    }

    return new Cropper(document.getElementById('image'), {
        viewMode: 2,
        aspectRatio: 1,
    });
};

$('#btn__getData').on('click', () => {
    console.log(cropper.getData());
});

$('#btn__getCanvasData').on('click', () => {
    console.log(cropper.getCanvasData());
});

$('#btn__getCroppedCanvas').on('click', () => {
    let cropperCanvasOption = {
        width: 800,
        height: 800,
        maxWidth: 1920,
        maxHeight: 1920,
        fillColor: '#fff',
    };

    let dataUrl = cropper.getCroppedCanvas(cropperCanvasOption).toDataURL('image/jpeg');
    $(`<img src="${dataUrl}" class="img__cropped">`).appendTo($('body'));
    $.ajax({
        url: 'server/uploadImage.php',
        method: 'POST',
        data: {image: dataUrl},
    }).done(() => {
        console.log('Success DataUrl');
    }).fail(() => {
        console.log('Error DataUrl');
    });

    cropper.getCroppedCanvas(cropperCanvasOption).toBlob((blob) => {
        const formData = new FormData();
        formData.append('croppedImage', blob);

        $.ajax({
            url: 'server/uploadImageBlob.php',
            method: 'POST',
            data: formData,
            processData: false,
            contentType: false,
        }).done(() => {
            console.log('Success Blob');
        }).fail(() => {
            console.log('Error Blob');
        });
    }, 'image/jpeg');
});
