const validasiEmail = document.getElementById("validasiEmail")
const validasiPass = document.getElementById("validasiPass")
const cekbox = document.getElementById("terms")
const errorValEmail = document.getElementById("errorValEmail")
const errorValPass = document.getElementById("errorValPass")
const valRemember = document.getElementById("valRemember")
const btnSubmit = document.getElementById("btn-submit")

btnSubmit.addEventListener("click", (event) => {
    // console.log(cekbox)
    if(!validasiEmail.value.includes("@gmail.com")){
        errorValEmail.innerHTML = "email must contain @gmail.com";
        validasiEmail.style.border = "1.5px solid red";
        event.preventDefault()
    }

    if(validasiEmail.value.includes("@gmail.com")){
        errorValEmail.innerHTML = "";
        validasiEmail.style.border = "1px solid #dadce0";
    }

    
    let passInput = validasiPass.value
    // if (passInput == "") {
    //     passInput = "a"
    // }

    if(passInput.length < 8 || !(passInput[0] === passInput[0].toUpperCase())){
        errorValPass.innerHTML = "minimum 8 characters and the first letter must be uppercase"
        validasiPass.style.border = "1.5px solid red"
        event.preventDefault()
    }

    
    if(passInput.length >= 8 && (passInput[0] === passInput[0].toUpperCase())){
        errorValPass.innerHTML = ""
        validasiPass.style.border = "1px solid #dadce0"
    }
    // console.log(passInput[0])
    
    if(!cekbox.checked){
        valRemember.innerHTML = "remember me must be checked"
        cekbox.style.outline = "1.5px solid red";
        event.preventDefault()
    }

    if(cekbox.checked){
        valRemember.innerHTML = ""
        cekbox.style.outline = "none";
    }
    // window.location.assign("https://www.google.com");
})