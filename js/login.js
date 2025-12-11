const emailInput = document.querySelector('.email');
const passwordInput = document.querySelector('.password');
const incorrictLogin = document.querySelector('.incorrict');
const btnLogin = document.querySelector('.btnLogin');

let allUsersLogin = JSON.parse(localStorage.getItem('allUsers')) || [];
function clearLoginMessage() {
    incorrictLogin.classList.remove('d-block');
    incorrictLogin.classList.add('d-none');
    incorrictLogin.innerText = '';
}
function showLoginError(msg) {
    incorrictLogin.innerText = msg;
    incorrictLogin.classList.remove('d-none');
    incorrictLogin.classList.add('d-block');
}
btnLogin.addEventListener('click', function() {
    clearLoginMessage();
    const email = (emailInput.value || '').trim().toLowerCase();
    const pass = passwordInput.value || '';
    if (!email || !pass) {
        showLoginError('Please fill in both fields');
        return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
        showLoginError('Please enter a valid email');
        return;
    }
    let foundIndex = -1;
    for (let i = 0; i < allUsersLogin.length; i++) {
        if (allUsersLogin[i].email.toLowerCase() === email && allUsersLogin[i].pass === pass) {
            foundIndex = i;
            break;
        }
    }
    if (foundIndex >= 0) {
        localStorage.setItem('currentUser', allUsersLogin[foundIndex].name);
        window.location.href = 'welcome.html';
    } else {
        showLoginError('Incorrect email or password');
    }
});