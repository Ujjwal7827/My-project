const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const qrcontainer = document.querySelector('.qr-body');

let size = sizes.value;

generateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    isempty();
});

sizes.addEventListener('change',(e)=>{
    size = e.target.value;
    generateQRCode();
    isempty();
});

downloadBtn.addEventListener('click',()=>{
    let img = document.querySelector('.qr-body img')
    if( img !== null){
        let imgAtrr = img.getAttribute('src');
        downloadBtn.setatttribute("href",imgAtrr);
    }
    else{
        downloadBtn.setAtrribute("href",`${document.querySelector('canvas').toDataurl()}`);
    }
});

function isempty(){
    if(qrText.value.length>0){
        generateQRCode();
    }else{
        alert('Please enter text to generate QR code');
    }
}


function generateQRCode(){
    qrcontainer.innerHTML ="";
    new QRCode(qrcontainer, {
        text:qrText.value,
        height:size,
        width:size,
        colorLight:"#fff",
        colorDark:"#000",
    });
}
