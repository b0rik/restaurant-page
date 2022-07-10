import makeNav from './nav';

export default function makeHeader() {
    const header = document.createElement('header');
    header.classList.add('header');

    header.appendChild(makeNav());

    return header;
}