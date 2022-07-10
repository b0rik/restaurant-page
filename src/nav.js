import makeLogo from './logo';
import makeButton from './button';
import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';


export default function makeNav() {
    const nav = document.createElement('nav');
    
    nav.appendChild(makeLogo());
    nav.appendChild(makeButton('Home', loadHome));
    nav.appendChild(makeButton('Menu', loadMenu));
    nav.appendChild(makeButton('Contact', loadContact));

    return nav;
}