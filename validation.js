const form = document.querySelector('form')
const firstnameInput = document.getElementById('firstname-input')
const emailInput = document.getElementById('email-input')
const passwordInput = document.getElementById('password-input')
const repeatPasswordInput = document.getElementById('repeat-password-input')
const errorMessage = document.getElementById('error-message')

form.addEventListener('submit', (e) => {
   
    let errors = []

    if(firstnameInput){
        errors = getSignupFolderErrors(firstnameInput.value, emailInput.value, passwordInput.value, repeatPasswordInput.value)
    }
    else{
        errors = getLoginFolderErrors(emailInput.value, passwordInput.value)
    }

    if(errors.length > 0){
        e.preventDefault()
        errorMessage.innerText = errors.join(". ")
    }

})

function getSignupFolderErrors(firstname, email, password, repeatPassword){
    let errors = []

    if(firstname === '' || firstname == null){
        errors.push('Firstname is required')
        firstnameInput.classList.add('incorrect')
    }
    if(email === '' || email == null || !email.includes('@')){
        errors.push('Email is required')
        emailInput.classList.add('incorrect')
    }
    if(password === '' || password == null){
        errors.push('Password is required')
        passwordInput.classList.add('incorrect')
    }
    if(repeatPassword === '' || repeatPassword == null){
        repeatPasswordInput.classList.add('incorrect')
    }
    if(password.length < 8){
        errors.push('Password must have at least 8 characters')
        passwordInput.classList.add('incorrect')
    }
    if(password !== repeatPassword){
        errors.push('Password does not match repeated password')
        passwordInput.classList.add('incorrect')
        repeatPasswordInput.classList.add('incorrect')
    }
    return errors;
}

function getLoginFolderErrors(email, password){
    let errors = []

    if(email === '' || email == null){
        errors.push('Email is required')
        emailInput.classList.add('incorrect')
    }
    if(password === '' || password ==null)
    {
        errors.push('Password id required')
        passwordInput.classList.add('incorrect')
    }
    return errors;
}

const allInputs = [firstnameInput, emailInput, passwordInput, repeatPasswordInput].filter(input => input != null)

allInputs.forEach(input => {
    input.addEventListener('input', () => {
        if(input.classList.contains('incorrect')){
            input.classList.remove('incorrect')
            errorMessage.innerText = ''
        }
    })
})

