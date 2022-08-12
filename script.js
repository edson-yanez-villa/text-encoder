button_encrypt = document.querySelector("[button-encrypt]");

const dataToEnpcrypt = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat"
}

const encrypt = () => {
    const inputEncrypt = document.querySelector("[input-encrypter]");
    message = inputEncrypt.value;
    
}

button_encrypt.addEventListener("click", encrypt);