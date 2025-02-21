const eye1 = document.querySelector('.eye1');
const eye2 = document.querySelector('.eye2');

const inputPassword = document.getElementById('password');
const inputConfirmPassword = document.getElementById('confirmPassword');

function togglePasswordVisibility(inputField, icon) {
    const isText = inputField.type === 'text';
    inputField.type = isText ? 'password' : 'text';

    icon.classList.toggle('fa-eye-slash');
    icon.classList.toggle('fa-eye');
}

eye1.addEventListener('click', () => togglePasswordVisibility(inputPassword, eye1));
eye2.addEventListener('click', () => togglePasswordVisibility(inputConfirmPassword, eye2));
