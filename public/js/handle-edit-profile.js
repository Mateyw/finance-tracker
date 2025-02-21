const btnEditProfile = document.querySelector('.edit-btn');
const btnSave = document.querySelector('.save-btn');
const inputs = document.querySelectorAll('.input');

btnEditProfile.addEventListener('click', () => {
    btnEditProfile.classList.add('inactive');
    btnSave.classList.remove('inactive');
    inputs.forEach(input => {
        input.disabled = false;
    });
});

btnSave.addEventListener('click', () => {
    btnSave.classList.add('inactive');
    btnEditProfile.classList.remove('inactive');
    inputs.forEach(input => {
        input.disabled = true;
    });
});