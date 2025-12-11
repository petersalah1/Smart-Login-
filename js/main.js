const nameForSignIn = document.querySelector('.name');
const emailForSignIn = document.querySelector('.email');
const passwordForSignIn = document.querySelector('.password');
const incorrict = document.querySelector('.incorrict');
const btnSignUp = document.querySelector('.btnSignUp');

let allUsers = JSON.parse(localStorage.getItem('allUsers')) || [];
function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}
function clearMessage() {
    incorrict.innerHTML = '';
    incorrict.classList.remove('d-block');
    incorrict.classList.add('d-none');
}
function showError(msg) {
    incorrict.innerHTML = `<p class="text-danger text-center fs-5 mb-0">${msg}</p>`;
    incorrict.classList.remove('d-none');
    incorrict.classList.add('d-block');
}
function showSuccess(msg) {
    incorrict.innerHTML = `<p class="text-success text-center fs-5 mb-0">${msg}</p>`;
    incorrict.classList.remove('d-none');
    incorrict.classList.add('d-block');
}
btnSignUp.addEventListener('click', function() {
    clearMessage();
    const name = nameForSignIn.value.trim();
    const email = emailForSignIn.value.trim().toLowerCase();
    const pass = passwordForSignIn.value;

    if (!name || !email || !pass) {
        showError('Fill in all fields');
        return;
    }
    if (name.length < 2) {
        showError('Name must be at least 2 characters');
        return;
    }
    if (!isValidEmail(email)) {
        showError('Please enter a valid email');
        return;
    }
    if (pass.length < 6) {
        showError('Password must be at least 6 characters');
        return;
    }
    const emailExists = allUsers.some(obj => obj.email.toLowerCase() === email);
    if (emailExists) {
        showError('Email already exists');
        return;
    }
    const data = {
        name: name,
        email: email,
        pass: pass
    };
    allUsers.push(data);
    localStorage.setItem('allUsers', JSON.stringify(allUsers));
    showSuccess('Success! You can now login.');
    setTimeout(() => {
        clearAllInputs();
        clearMessage();

    }, 900);
});

function clearAllInputs() {
    nameForSignIn.value = '';
    emailForSignIn.value = '';
    passwordForSignIn.value = '';
}