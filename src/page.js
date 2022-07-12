import makeHeader from './header';
import makeMain from './main';
import makeFooter from './footer';
import loadHome from './home';
import { setActiveButton } from './button';

export default function initPage() {
    const content = document.querySelector('#content');

    content.appendChild(makeHeader());
    content.appendChild(makeMain());
    content.appendChild(makeFooter());

    loadHome();
    setActiveButton(document.querySelector('.button-nav'));
}