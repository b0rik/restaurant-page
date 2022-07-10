export function makeLogo(title) {
    const logo = document.createElement('img');
    logo.src = './images/logo.png';
    logo.alt = 'Gold Black Logo';
    logo.classList.add('logo');

    return logo;
}