const form = document.getElementById('form');
const nombre = document.getElementById('name');
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('msg');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const contenedor = inputControl.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    // contenedor.classList.add('error');
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const nombreValue = nombre.value;
    const emailValue = email.value;
    const asuntoValue = asunto.value;
    const mensajeValue = mensaje.value;

    if(nombreValue === '') {
        setError(nombre, 'Nombre es Requerido');
    } else {
        setSuccess(nombre);
    }

    if(emailValue === '') {
        setError(email, 'Email es Requerido');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Inserta una dirección de correo válida');
    } else {
        setSuccess(email);
    }

    if(asuntoValue === '') {
        setError(asunto, 'Asunto es Requerido');
    } else {
        setSuccess(asunto);
    }

    if(mensajeValue === '') {
        setError(mensaje, 'No se puede enviar un mensaje vacio');
    } else {
        setSuccess(mensaje);
    }

};