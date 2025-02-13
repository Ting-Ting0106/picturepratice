document.addEventListener("DOMContentLoaded", function () {
    var gallery = document.getElementById("gallery");
    if (!gallery)
        return;
    var imageCount = 10;
    var imageFolder = "images/";
    var _loop_1 = function (i) {
        var imageCard = document.createElement("div");
        imageCard.className = "image-card";
        var img = document.createElement("img");
        img.src = "".concat(imageFolder, "image").concat(i, ".jpg");
        img.alt = "Gallery";
        var overlayContainer = document.createElement("div");
        overlayContainer.className = "overlay-container";
        var overlay = document.createElement("div");
        overlay.className = "button-overlay";
        var playButton = document.createElement("button");
        playButton.className = "btn play-btn";
        playButton.textContent = "Click me";
        playButton.addEventListener("click", function () { return console.log(i); });
        overlay.appendChild(playButton);
        overlayContainer.appendChild(overlay);
        imageCard.appendChild(img);
        imageCard.appendChild(overlayContainer);
        gallery.appendChild(imageCard);
    };
    for (var i = 1; i <= imageCount; i++) {
        _loop_1(i);
    }
});
