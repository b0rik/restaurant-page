export function loadHome() {
    const main = document.querySelector('main');
    main.innerHTML = '';
    main.appendChild(makeHome());
}

function makeHome() {
    const container = document.createElement('div');
    container.classList.add('container');

    const heading = document.createElement('h2');
    heading.textContent = 'Gold Black';
    heading.classList.add('heading-home');

    const image = document.createElement('img');
    img.src = './images/coffee.jpg';
    img.alt = 'coffee image';

    const paragraph = document.createElement('p');
    p.textContent = 'A cup of coffee lasts only a moment, but it is that moment that makes your day better.';

    container.appendChild(heading);
    container.appendChild(image);
    container.appendChild(paragraph);

    return container;
}