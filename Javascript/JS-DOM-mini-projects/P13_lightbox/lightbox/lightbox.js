//function to include html popup code

function includePopupHtml(){
    let html = '<div id="vis-popup"><span id="close"><img id="npop" src="lightbox/images/c.png" alt=""></span><img id="leftarrow" src="lightbox/images/l.png" alt=""><img id="rightarrow" src="lightbox/images/r.png" alt=""><img id="mainPopImage"src="./images/img2.avif" alt=""></div>';

    let popdiv = document.createElement("div");
    popdiv.innerHTML = html;
    document.body.insertBefore(popdiv, document.body.firstChild);
}

includePopupHtml()