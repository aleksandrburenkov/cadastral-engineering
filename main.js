'use strict';

const navBtn = document.querySelector('.header__toggle');
const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('.header');
const modalsBtn = document.querySelectorAll('.btn-bell');
const modals = document.querySelectorAll('.modal');
const anchors = document.querySelectorAll('a[href*="#"]');
const body = document.body;

navBtn.onclick = function () {
    nav.classList.toggle('header__mobile');
    menuIcon.classList.toggle('menu-icon-active');
    body.classList.toggle('no-scroll');
};

function openModal(element) {
    if (
        nav.classList.contains('header__mobile') ||
        menuIcon.classList.contains('menu-icon-active')
    ) {
        nav.classList.remove('header__mobile');
        menuIcon.classList.remove('menu-icon-active');
    }

    element.classList.add('_modal-active');
    body.classList.add('no-scroll');
}
modalsBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let data = e.target.dataset.modalOpen;
        console.log(data);

        modals.forEach((modal) => {
            let data = e.target.dataset.modalOpen;
            if (modal.dataset.modal == data) {
                openModal(modal);
            }
        });
    });
});
function closeModal(e) {
    if (
        e.target.classList.contains('modal__close-wrapper') ||
        e.target.classList.contains('modal__close') ||
        e.target.classList.contains('modal__bg')
    ) {
        e.target.closest('.modal').classList.remove('_modal-active');

        body.classList.remove('no-scroll');
    }
}
modals.forEach((modal) => {
    modal.addEventListener('click', (e) => closeModal(e));
});
window.addEventListener('keydown', (e) => {
    modals.forEach((modal) => {
        if (e.key == 'Escape' && modal.classList.contains('_modal-active')) {
            modal.classList.remove('_modal-active');
            body.classList.remove('no-scroll');
        }
    });
});

$(document).ready(function () {
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash,
            $target = $(target);

        $('html, body')
            .stop()
            .animate(
                {
                    scrollTop: $target.offset().top,
                },
                1200,
                'swing',
                function () {
                    window.location.hash = target;
                }
            );
    });
});
