button_encrypt = document.querySelector("[button-encrypt]");
button_decrypt = document.querySelector("[button-decrypt]");
button_copy = document.querySelector("[copy-text]");

const dataToEnpcrypt = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat"
}

const dataToDepcrypt = {
    ai: "a",
    enter: "e",
    imes: "i",
    ober: "o",
    ufat: "u"
}

const displayMessage = document.querySelector("[display-message]");
const displayEmpty = document.querySelector("[display-empty]");
const inputEncrypt = document.querySelector("[input-encrypter]");
const textMessage = document.querySelector("[write-message]");

const displayMessajeEncrypted = (hasMessage) =>{
    if(hasMessage){
        displayEmpty.classList.remove("show__element");
        displayEmpty.classList.add("hide__element");
        displayMessage.classList.remove("hide__element");
        displayMessage.classList.add("display__message");
    } else {
        displayEmpty.classList.remove("hide__element");
        displayEmpty.classList.add("show__element");
        displayMessage.classList.remove("display__message");
        displayMessage.classList.add("hide__element");
    }
    
};

const encrypt = () => {
    expresion = /[aeiou]/g
    const message = inputEncrypt.value;
    let encrypted = "";
    index = 0
    while ((result = expresion.exec(message))) {
        encrypted +=  message.substring(index, expresion.lastIndex-1) + dataToEnpcrypt[result[0]];
        index = expresion.lastIndex;
    }
    encrypted += message.substring(index);
    textMessage.textContent = encrypted;
    displayMessajeEncrypted(encrypted.length > 0);
    inputEncrypt.value = "";
}

const decrypt = () => {
    expresion = /ai|enter|imes|ober|ufat/g
    const message = inputEncrypt.value;
    let decrypted = "";
    index = 0
    while ((result = expresion.exec(message))) {
        decrypted +=  message.substring(index, expresion.lastIndex-(result[0].length)) + dataToDepcrypt[result[0]];
        index = expresion.lastIndex;
    }
    decrypted += message.substring(index);
    textMessage.textContent = decrypted;
    displayMessajeEncrypted(decrypted.length > 0);
    inputEncrypt.value = "";
}

const copy = () =>{
    navigator.clipboard.writeText(textMessage.textContent);
}

button_encrypt.addEventListener("click", encrypt);
button_decrypt.addEventListener("click", decrypt);
button_copy.addEventListener("click", copy);
