import makeHeader from './header';
import makeMain from './main';
import loadHome from './home';

export default function initPage() {
    const content = document.querySelector('#content');

    content.appendChild(makeHeader());
    content.appendChild(makeMain());

    loadHome();
}