export default function makeButton(text, loadPage) {
    const button = document.createElement('button');

    button.classList.add('button-nav');
    button.textContent = text;

    button.addEventListener('click', e => {
        setActiveButton(e.target);
        loadPage();
    });

    return button;
}

function setActiveButton(button) {
    if(button.classList.contains('active')) return;

    const buttons = document.querySelectorAll('.button-nav');

    buttons.forEach(button => button.classList.remove('active'));

    button.classList.add('active');
}

export {setActiveButton };