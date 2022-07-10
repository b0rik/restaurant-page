export default function loadContact() {
    const main = document.querySelector('main');
    main.innerHTML = '';
    main.appendChild(makeContact());
}

function makeContact() {
    const container = document.createElement('div');
    container.classList.add('container');

    const heading = document.createElement('h2');
    heading.textContent = 'Tell Us What You Think';
    heading.classList.add('heading-contact');

    const phoneNumber = document.createElement('h3');
    phoneNumber.textContent = '+000-000000000';
    phoneNumber.classList.add('contact-item');

    const address = document.createElement('h3');
    address.textContent = '69 This st. , That Country, ABC DEF.';
    address.classList.add('contact-item');

    const email = document.createElement('h3');
    email.textContent = 'email@email.com';
    email.classList.add('contact-item');

    container.appendChild(heading);
    container.appendChild(phoneNumber);
    container.appendChild(address);
    container.appendChild(email);

    return container;
}