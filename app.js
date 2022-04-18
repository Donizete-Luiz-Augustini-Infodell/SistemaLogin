const username = document.querySelector('#username');
const password = document.querySelector('#password');
const submit = document.querySelector('#submit');

submit.addEventListener('click', (event) => {
    event.preventDefault();

    //username validation
    if (username.value.trim() == '') {
        error(username, 'campo não pode ficar em branco');
    } else {
        success(username);
    }

    //password validation
    if (password.value.trim() == '') {
        error(password, 'campo senha obrigatório');
    } else {
        success(password);
    }

});

function error(element, msg) {
    element.style.border = '3px red solid';
    const parent = element.parentElement;
    const p = parent.querySelector('p');
    p.textContent = msg;
    p.style.visibility = 'visible';

}

function success(element) {
    element.style.border = '3px blue solid';
    const parent = element.parentElement;
    const p = parent.querySelector('p');
    p.style.visibility = 'hidden';

}








