const wrapper = document.querySelector(".wrapper"),
    qrInput = wrapper.querySelector(".form input"),
    genBtn = wrapper.querySelector(".form button"),
    qrImg = wrapper.querySelector(".qr-code img");
    qrMass = wrapper.querySelector("h5");


let tempValue;


genBtn.addEventListener("click", () => {
    let qrValue = qrInput.value.trim();
    if (!qrValue || tempValue === qrValue) return;
    tempValue = qrValue;
    genBtn.innerText = "Generating QR Code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
        genBtn.innerText = "Generate QR Code";
        qrMass.innerText = "Scan the QR to check the massage"
    });
});

qrInput.addEventListener("keyup", () => {
    if (!qrInput.value.trim()) {
        wrapper.classList.remove("active");
        tempValue = "";
        qrMass.innerText = "";
    }
});