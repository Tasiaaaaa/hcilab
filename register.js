// const names = document.querySelector("#inputName")
// const submitBtn = document.querySelector(".btn-link input")

// submitBtn.addEventListener('click', () => {
//     if(names.value.length < 8) {
//         console.log('pendek')
//         // names.classList.add("show-red")
//         names.style.border = "2px solid red"
//         console.log(names.value)
//         names.value = "wrong";
//         names.placeholder = 'asljdklaslf'
//     }
// })

const nama = document.getElementById("inputName")
const age = document.getElementById("inputAge")
const email = document.getElementById("inputEmail")
const password = document.getElementById("inputPassword")
const checkbox = document.getElementById("terms")
const buttonSubmit = document.getElementById("button-submit")
const errorName = document.getElementById("errorName")
const errorAge = document.getElementById("errorAge")
const errorEmail = document.getElementById("errorEmail")
const errorPass = document.getElementById("errorPass")
const errorCB = document.getElementById("errorCB")
// const form = document.getElementById("form")

buttonSubmit.addEventListener('click', (event)=>{
    
    var errorTextNama = ""
    var errorTextUmur = ""
    var errorTextEmail = ""
    var errorTextPass = ""
    var errorTextCB = ""

    const text = nama.value
    if(text == ""){
        errorTextNama += "name must be filled"
        nama.style.border = "1.5px solid red";
        event.preventDefault()
    }

    if(!(text == "")){
        errorTextNama += ""
        nama.style.border = "1px solid #dadce0";
    }

    const number = age.value
    if(number < 15 || number < 0){
        errorTextUmur += "minimum age is 15 years"
        age.style.border = "1.5px solid red";
        event.preventDefault()
    }

    if(number >= 15){
        errorTextUmur += ""
        age.style.border = "1px solid #dadce0";
    }

    const Email = email.value
    if(!Email.includes('@gmail.com')){
        errorTextEmail += "email must contain @gmail.com"
        email.style.border = "1.5px solid red";
        event.preventDefault()
    }

    if(Email.includes('@gmail.com')){
        errorTextEmail += "";
        email.style.border = "1px solid #dadce0";
    }

    const pass = password.value;
    if(pass.length < 8 || !(pass[0] === pass[0].toUpperCase())){
        errorTextPass += "minimum 8 characters and the first letter must be uppercase";
        password.style.border = "1.5px solid red";
        event.preventDefault();
    }

    if(pass.length >= 8 && (pass[0] === pass[0].toUpperCase())){
        errorTextPass += ""
        password.style.border = "1px solid #dadce0";
    }

    if(!checkbox.checked){
        errorTextCB += "agreement must be checked"
        checkbox.style.outline = "1.5px solid red";
        event.preventDefault()
    }

    if(checkbox.checked){
        errorTextCB += ""
        checkbox.style.outline = "none";
    }

    errorName.innerHTML = errorTextNama;
    errorAge.innerHTML = errorTextUmur;
    errorEmail.innerHTML = errorTextEmail;
    errorPass.innerHTML = errorTextPass;
    errorCB.innerHTML = errorTextCB;

    // window.location = "./home.html"
})