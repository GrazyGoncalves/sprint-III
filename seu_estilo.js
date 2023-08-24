function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "img/close_white_36dp.svg";
    }
}

const openModalBtns = document.querySelectorAll('.open-modal-btn');
const modal = document.querySelector('.modal');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalText = document.querySelector('.modal-text');
const modalContents = [
    "Experiências únicas são momentos que transcendem o cotidiano, deixando uma marca indelével em nossas memórias e almas! Destinos sugeridos: Bali, Santorini, Machu Picchu.",
    "Conteúdo do modal 2",
    "Conteúdo do modal 3",
];


openModalBtns.forEach((btn, index) => {
    btn.addEventListener('click', (event) => {
        event.preventDefault();
        modal.style.display = 'block';

        modalText.textContent = btn.getAttribute('data-modal-content');
    });
});

closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});
function closeModal() {
    modal.style.display = 'none';
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeModal();
    }
});