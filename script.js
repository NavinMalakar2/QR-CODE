const qr_text = document.getElementById("qr-text");
const sizes =document.getElementById("sizes");
const generateBtn =document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");
const qrContainer =document.querySelector(".qr-body")

let size =sizes.value;
generateBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    isEmptyInput();
});
sizes.addEventListener('change',(e)=>{
    size =e.target.value;
    isEmptyInput();
})

downloadBtn.addEventListener('click',()=>{
    let img =document.querySelector('.qr-body img');

    if(img!==null){
        let imgAtrr =img.getAttribute('src');
        downloadBtn.setAttribute("href",imgAtrr)
    }
    else{
        downloadBtn.setAttribute("href",`${document.querySelector('canvas').toDataURL()}`);
    }
})

function generateQRCode(){
    qrContainer.innerHTML ="";
        new QRCode(qrContainer, {
        text: qr_text.value,
        width: size,
        height: size,
        colorDark : "#000000",
        colorLight : "#ffffff",
    });
}

function isEmptyInput(){
    qr_text.value.length > 0 ? generateQRCode() : alert("Enter the text or url")
}