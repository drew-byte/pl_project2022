let read = document.getElementById("upload");

upload.addEventListener('change', () => {
    let fr = new FileReader();
    fr.readAsText(upload.files[0]);

    fr.onload = function () {
        var display = fr.result;
        document.getElementById("lexi").textContent = display;
    }
})






