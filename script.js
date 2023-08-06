const wrapper = document.querySelector('.wrapper');
const showcase = document.querySelector('.showcase');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnlogin-popup');
const btnarrow = document.querySelector('.btn-arrow');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    showcase.classList.remove('active');
    wrapper.classList.add('active-popup');
});

btnarrow.addEventListener('click', ()=> {
    showcase.classList.remove('active');
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
    showcase.classList.add('active');
});
