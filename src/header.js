import makeNav from './nav';
import makeLogo from './logo';

export default function makeHeader() {
    const header = document.createElement('header');
    header.classList.add('header');

    header.appendChild(makeLogo());
    header.appendChild(makeNav());

    return header;
}