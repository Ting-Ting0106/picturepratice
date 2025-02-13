document.addEventListener("DOMContentLoaded",() => {
    const gallery = document.getElementById("gallery") as HTMLDivElement;
    if(!gallery) return;

    const imageCount:number = 10;
    const imageFolder = "images/";

    for(let i = 1; i <= imageCount; i ++){
        const imageCard:HTMLDivElement = document.createElement("div");
        imageCard.className = "image-card";

        const img:HTMLImageElement = document.createElement("img");
        img.src = `${imageFolder}image${i}.jpg`;
        img.alt = "Gallery";

        const overlayContainer:HTMLDivElement = document.createElement("div");
        overlayContainer.className = "overlay-container";

        const overlay:HTMLDivElement = document.createElement("div");
        overlay.className = "button-overlay";
        
        const playButton:HTMLButtonElement = document.createElement("button");
        playButton.className = "btn play-btn";
        playButton.textContent = "Click me";
        playButton.addEventListener("click",() => console.log(i));
        
        overlay.appendChild(playButton);
        overlayContainer.appendChild(overlay);
        imageCard.appendChild(img);
        imageCard.appendChild(overlayContainer);
        gallery.appendChild(imageCard);
    }
})
