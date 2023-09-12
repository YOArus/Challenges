let form = document.getElementById('form');
let submit = document.getElementById('submit');
let error = document.getElementById('message');

let email = document.getElementById('email');
let signUpStart = document.getElementById('start-form');
let signUpEnd = document.getElementById('end-form');

form.addEventListener('submit', function(evt) {
    evt.preventDefault();

    let errorMessage = [];

    if(email.value !== 'email@company.com'){
        errorMessage.push('Valid Email required');
        email.classList.add('focus');
    }
    else if(email.value == 'email@company.com'){
        signUpStart.style.display = 'none';
        signUpEnd.style.display = 'flex';
        email.classList.remove('focus');
    }
    error.innerHTML = errorMessage.join('');
})


let validationMessage = function (e) {
    e.preventDefault();
    signUpStart.style.display = 'flex';
    signUpEnd.style.display = 'none';
    form.reset();
}

let dismissBtn =document.getElementById('dismissBtn');
dismissBtn.addEventListener('click', validationMessage);


