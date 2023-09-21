/* Aside Bar */

const openAside = document.querySelector(".fa-bars");
const closeAside = document.querySelector(".close-aside");
const aside = document.querySelector('.aside');
const asideLinks = document.querySelectorAll('.aside-links');

function sideNav() {

    openAside.addEventListener('click', function () {
        aside.classList.add("show-aside");
    });

    closeAside.addEventListener('click', function () {
        aside.classList.remove("show-aside");
    });

    for (let y = 0; y < asideLinks.length; y++) {
        asideLinks[y].addEventListener('click', function () {
            aside.classList.remove("show-aside");
        });
    }

    
}
sideNav();