let memory = document.querySelector('#memory');
let input = document.querySelector('#input');
let buttons = document.querySelectorAll('.button');
buttons = [...buttons];

buttons.forEach(button => {
    button.addEventListener('click', () => {
        input.textContent += button.textContent;
    });
});
