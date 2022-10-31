const CLASS_MENU = "header__menu ";
const DISPLAY_NONE = "displayNone";

const CLASS_FORM = "form__input";
const CLASS_FORM_CHECKBOX = "form__personalData__checkbox__input";

const MAIL_FORMAT = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


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



// Functionality to percentage scroller
const percentageScroller = () => {
    let scrollPercent = Math.round((document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight))*100);
    document.getElementById('percentageScroller').setAttribute('style', 'width: ' + scrollPercent + '%')
}

window.addEventListener('scroll', percentageScroller);



// Funcionality Scroll to the top page.

const scrollTop = () => {
    let intervalScroll = setInterval(function() {
        window.scrollTo(0, window.scrollY - 10);
        console.log(window.scrollY);

        if (window.scrollY <= 0) {
            clearInterval(intervalScroll);
        return;
        } 
    }, 5);
}


document
    .querySelector('#returnTop')
    .addEventListener('click', () => {
        window.setTimeout(scrollTop, 200)
    });



// Funcionality, 'Post' the name and email.
const sendForm = async (name, email) => {

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: name,
          body: email,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}


// Funcionality to validation form.
document
    .querySelector('#formBtn')
    .addEventListener('click', () => {
        let formName = document.getElementById('formName');
        let formEmail = document.getElementById('formEmail');
        let formCheck = document.getElementById('formCheck');
        if (!(formName.value.length >= 2 && formName.value.length <= 100)) {
            formName.setAttribute("class", CLASS_FORM + " " + CLASS_FORM + "--red");
            return;
        } else {
            formName.setAttribute("class", CLASS_FORM);
        }

        if (!formEmail.value.match(MAIL_FORMAT)) {
            formEmail.setAttribute("class", CLASS_FORM + " " + CLASS_FORM + "--red");
            return;
        } else {
            formEmail.setAttribute("class", CLASS_FORM);
        }

        if (!formCheck.checked) {
            formCheck.setAttribute("class", CLASS_FORM_CHECKBOX + " " + CLASS_FORM_CHECKBOX + "--red");
            return; 
        } else {
            formCheck.setAttribute("class", CLASS_FORM_CHECKBOX);
        }

        sendForm(formName.value, formEmail.value);
    });