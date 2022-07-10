export function loadMenu() {
    const main = document.querySelector('main');
    main.innerHTML = '';
    main.appendChild(makeMenu());
}

function makeMenu() {
    const container = document.createElement('div');
    container.classList.add('container');

    const heading = document.createElement('h2');
    heading.textContent = 'Our Cup of Coffee';
    heading.classList.add('heading-menu');

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('container-menu');

    menuContainer.appendChild('espresso');
    menuContainer.appendChild('latte');
    menuContainer.appendChild('capuccino');
    menuContainer.appendChild('americano');

    container.appendChild(heading);
    container.appendChild(menuContainer);

    return container;
}

function makeMenuItem(name) {
    const item = document.createElement('div');
    item.classList.add('menu-item');

    const image = document.createElement('img');
    image.src = `./images/${name}.jpg`;
    image.alt = name;

    const heading = document.createElement('h3');
    heading.textContent = name;

    item.appendChild(image);
    item.appendChild(heading);

    return item;
}