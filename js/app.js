// SCROLL NAV BAR

window.addEventListener("scroll", function(){
    const header = document.querySelector("nav");
    header.classList.toggle("sticky", window.scrollY > 0);
})

// Control Form

// const forms

const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");

// limits

const nameLimit = 30;
const subjectLimit = 50;
const messageLimit = 500;

// Control name

nameInput.addEventListener("input", function(){
    const nameLength = nameInput.value.length;
    const errorName = document.querySelector(".error-name");

    if (nameLength > nameLimit) {
        errorName.innerText = "El nombre es demasiado largo";
        errorName.style.fontSize = "10px";
        errorName.style.color = "#FF2851"
    } else {
        errorName.innerText = "";
    }
})

// Control subject

subjectInput.addEventListener("input", function(){
    const subjectLength = subjectInput.value.length;
    const errorSubject = document.querySelector(".error-subject");

    if (subjectLength > subjectLimit) {
        errorSubject.innerText = "El asunto es demasiado largo";
        errorSubject.style.fontSize = "10px";
        errorSubject.style.color = "#FF2851"
    } else {
        errorSubject.innerText = "";
    }
})

// Control message

messageInput.addEventListener("input", function(){
    const messageLength = messageInput.value.length;
    const errorMessage = document.querySelector(".error-message");

    if (messageLength > messageLimit) {
        errorMessage.innerText = "El mensaje es demasiado largo";
        errorMessage.style.fontSize = "10px";
        errorMessage.style.color = "#FF2851"
    } else {
        errorMessage.innerText = "";
    }
})

// Send Params

const btn = document.querySelector(".btn-contact");

document.getElementById("form").addEventListener("submit", function(e){
    e.preventDefault();

    if (nameInput.value != '' &&
        emailInput.value != '' &&
        subjectInput.value != '' &&
        messageInput.value != '' &&
        nameInput.value.length <= nameLimit &&
        subjectInput.value.length <= subjectLimit &&
        messageInput.value.length <= messageLimit) {
    
        const serviceID = "default_service";
        const templateID = "template_hd9tego";
    
        emailjs.sendForm(serviceID, templateID, this).then(() => {
            alert("Mensaje enviado");
            nameInput.value = '';
            emailInput.value = '';
            subjectInput.value = '';
            messageInput.value = '';
        })
        .catch(error => {
            console.log(error);
        })
    } else {
        alert("El mensaje no pudo enviarse. Por favor revisa los campos!");
    }
})