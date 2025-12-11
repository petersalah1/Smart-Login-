const welcomeEl = document.querySelector('.smartWelcome');
const btnLogOut = document.querySelector('.btnLogOut');

const userName = localStorage.getItem('currentUser');

if (!userName) {
    window.location.href = './login.html';
} else {
    welcomeEl.innerHTML = `Welcome <span class="text-info">${userName}</span>`;
}

btnLogOut.addEventListener('click', function() {
    localStorage.removeItem('currentUser');
    window.location.href = './login.html';
});