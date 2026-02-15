const btnComoFunciona = document.getElementById('btnComoFunciona');
const btnFecharModal = document.getElementById('btnFecharModal');
const modalExplicacao = document.getElementById('modalExplicacao');

function abrirModal() {
    modalExplicacao.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function fecharModal() {
    modalExplicacao.classList.remove('active');
    document.body.style.overflow = '';
}

if (btnComoFunciona) {
    btnComoFunciona.addEventListener('click', abrirModal);
}

if (btnFecharModal) {
    btnFecharModal.addEventListener('click', fecharModal);
}

if (modalExplicacao) {
    modalExplicacao.addEventListener('click', function(event) {
        if (event.target === modalExplicacao) {
            fecharModal();
        }
    });
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modalExplicacao.classList.contains('active')) {
        fecharModal();
    }
});
