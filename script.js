// function to show images in ui
function showImages(images){
    const cont = document.getElementById("imageContainer");
    const loading = document.getElementById("loading");
    loading.style.display = "none";

    images.forEach(image=> {
        const wrapper = document.createElement("div");
        wrapper.className = "image-wrapper";

        const img = document.createElement("img");
        img.src=image;

        const downloadBtn = document.createElement("button");
        downloadBtn.className = "download-icon";
        const img_svg = document.createElement("img");
        img_svg.src = "img/download.svg";
        img_svg.alt = "Download";
        downloadBtn.appendChild(img_svg);
        downloadBtn.title = "Download";

        downloadBtn.onclick = (e) =>{
            e.stopPropagation();
            chrome.downloads.download({
                url: image
            });
        };

        wrapper.appendChild(img);
        wrapper.appendChild(downloadBtn);
        cont.appendChild(wrapper);
    });
}


// Identify Active pages, Send action message, Wait for answer
chrome.tabs.query({active: true, currentWindow: true}, (tabs)=>{
    document.getElementById("loading").style.display = "block";

    chrome.tabs.sendMessage( tabs[0].id, {action: "getImages"},(response)=>{
        showImages(response);
    });

});
