button_encrypt = document.querySelector("[button-encrypt]");

const dataToEnpcrypt = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat"
}

const encrypt = () => {
    expresion = /[aeiou]/g
    const inputEncrypt = document.querySelector("[input-encrypter]");
    let message = inputEncrypt.value;
    // Object.keys(dataToEnpcrypt).forEach( key => {
    //     message = message.replace(key, dataToEnpcrypt[key])
    // });
    // console.log(message);
    while ((result= expresion.exec(message))) {
        console.log(dataToEnpcrypt[result[0]]);
        console.log(result);

    }
}

button_encrypt.addEventListener("click", encrypt);