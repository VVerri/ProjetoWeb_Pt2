function showModal(idModal){
    const modal = document.getElementById(idModal);

    if (modal) {
        modal.classList.add('show');
        modal.addEventListener('click', (event) => {
            event.preventDefault()
            if(event.target.className == 'close-modal'){
                modal.classList.remove('show')
            }
        })
    }
}

const loginButton = document.querySelector('#buttonLogin');
loginButton.addEventListener('click', () => {
    showModal('bgModal')
})