let form = document.getElementById('form');
let claim = document.querySelector("input[type='submit']");

function invalid(elem) {
    let inputElement = elem.querySelector('input');
    let icon = elem.querySelector('.icon');
    let message = elem.querySelector('.message');
    if (inputElement.value == '' || (elem.classList.contains('email') && !inputElement.value.includes('@'))) {
        active(inputElement, icon, message);
        return true;
    }
    else {
        nonactive(inputElement, icon, message);
        return false;
    }
}

function active(inp, icon, mess) {
    inp.classList.add('active');
    icon.classList.add('icon--active');
    mess.innerHTML = inp.placeholder + ' can not be empty';
    if (inp.parentElement.classList.contains('email')) {
        mess.innerHTML = 'Looks like this is not an email';
    }
    mess.classList.add('message--active');
}

function nonactive(inp, icon, mess) {
    inp.classList.remove('active');
    icon.classList.remove('icon--active');
    mess.innerHTML = '';
    mess.classList.remove('message--active');
}

form.onsubmit = function(event) {
    event.preventDefault();
    let flag = 0;
    let checkedElement = form.querySelectorAll('.checked');
    for (let elem of checkedElement) {
        if (invalid(elem)) flag = 1;
    }
    if (flag == 1) return;
}