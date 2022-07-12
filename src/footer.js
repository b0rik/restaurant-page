export default function makeFooter() {
    const footer = document.createElement('footer');

    footer.classList.add('footer');
    footer.textContent = 'Copyright &copy  Boris Glushko';

    return footer;
}