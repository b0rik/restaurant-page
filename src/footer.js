export default function makeFooter() {
    const footer = document.createElement('footer');

    footer.classList.add('footer');
    footer.innerHTML = 'Copyright &copy  Boris Glushko';

    return footer;
}