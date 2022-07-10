import makeNav from './nav';

export function createHeader() {
    const header = documnet.createElement('header');
    header.classList.add('header');

    header.appendChild(makeNav());
}