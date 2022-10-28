const CLASS_MENU = "header__menu ";
const DISPLAY_NONE = "displayNone";


// Functionality to desplagate menu in the header in the mobile version.
document
    .querySelector('#menuBtn')
    .addEventListener('click', () => {
        let menu = document.getElementById('menu');
        if (menu.getAttribute('class').includes('displayNone')) {
            menu.setAttribute('class', CLASS_MENU);

            document.getElementById('munuBurger').setAttribute('class', DISPLAY_NONE);
            document.getElementById('menuCross').setAttribute('class', '');
        } else {
            menu.setAttribute('class', CLASS_MENU + DISPLAY_NONE);

            document.getElementById('menuCross').setAttribute('class', DISPLAY_NONE);
            document.getElementById('munuBurger').setAttribute('class', '');
        }
    });