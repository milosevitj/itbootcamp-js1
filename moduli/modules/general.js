function generateImage (src){
    let img = document.createElement ("img");
    img.src=src;
    img.alt = "Image can not be loaded"
    return img;
}
export default generateImage;