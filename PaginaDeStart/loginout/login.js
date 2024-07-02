const loginBox = document.querySelector('.login_box');
const registrationBox = document.querySelector('.registration_box');
const loginLink = document.querySelector('.registrationform');
const registerLink = document.querySelector('.login');

loginLink.addEventListener('click',function(eve){
    eve.preventDefault();
    loginBox.classList.remove('active-popup');
    registrationBox.classList.add('active-popup');
})

registerLink.addEventListener('click',function(eve){
    eve.preventDefault();
    registrationBox.classList.remove('active-popup');
    loginBox.classList.add('active-popup');
})

/*Validare forma*/

const username = document.getElementById('registration_username');
const email = document.getElementById('registration_email');
const password = document.getElementById('registration_password');
const registrationForm = document.getElementById('registration-form');

const usernameError = document.getElementById('username_error');
const emailError = document.getElementById('email_error');
const passwordError = document.getElementById('password_error');

registrationForm.addEventListener('submit', (e)=>{
    var email_check=/^([A-Za-z0-9_\-\.])+@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (username.value === '' || username.value == null ){
        e.preventDefault();
        usernameError.innerHTML = "Numele de utilizator este necesar.";
    }else{
        usernameError.innerHTML =''};
    if(!email.value.match(email_check)){
        e.preventDefault();
        emailError.innerHTML = "Este necesara o adresa valida. "
    }else{
        emailError.innerHTML= ''};
    if (password.value === '' || password.value == null || password.value === 'password' || password.value.length <=7){
        e.preventDefault();
        passwordError.innerHTML = "Parola nevalida. Parola trebuie sa contina minim 7 caractere. ";
    }else{
        passwordError.innerHTML= ''};
    if (!usernameError.innerHTML && !emailError.innerHTML && !passwordError.innerHTML) {
    alert("Înregistrare reușită! Veți fi redirecționat către pagina principală.");
    window.location.href = "/Users/marcelaiftimia/Desktop/Marcela FrontEnd dev/HelpPicii/PaginaDeStart/helpPicii.html"
    };
})