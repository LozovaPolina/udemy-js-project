
function openModal(modalSelecor, modalTimerId) {
    const modal = document.querySelector(modalSelecor);
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
    if (modalTimerId) clearInterval(modalTimerId);

}
function closeModal(modalSelecor) {
    const modal = document.querySelector(modalSelecor);
    modal.classList.remove('show');
    modal.classList.add('hide');
    document.body.style.overflow = '';
}

function modal(triggerSelector, modalSelecor, modalTimerId) {
    const modalTrigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelecor);

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', () => openModal(modalSelecor, modalTimerId));
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal(modalSelecor);
        if (e.target.matches(`[data-close]`)) closeModal(modalSelecor);
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) {
            closeModal(modalSelecor, modalTimerId);
        }
    });


    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
            openModal(modalSelecor);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }
    window.addEventListener('scroll', showModalByScroll);
}

export default modal;

export { closeModal };
export { openModal };