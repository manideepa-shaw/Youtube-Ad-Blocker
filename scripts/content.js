
setInterval(() => {
    // console.log("Printing")
    const skip = document.getElementsByClassName("ytp-ad-skip-button-slot")[0]
    if(skip)
    {
        console.log("Ad detected");
        skip.style.display="block";
        document.getElementsByClassName("ytp-ad-skip-button-container-detached")[0].style.display="block";
        skip.click();
        console.log("Ad removed");
    }
    else{
        // console.log("No ad detecetd");
    }
}, 500);