chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {

    if (request.action === "getImages") {
        const images = document.querySelectorAll("img");
        // choose unique images only
        const urls = [...new Set([...images].map(img => {
            return img.currentSrc || img.src;
        })
        )];

        sendResponse(urls);
    }
});