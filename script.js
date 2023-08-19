document.addEventListener('DOMContentLoaded', function() {
    const openButtons = document.querySelectorAll('.banner');
    const closeModalButtons = document.querySelectorAll('.close-modal');
    const modalOverlays = document.querySelectorAll('.overlay');

    openButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-modal');
            const modalOverlay = document.getElementById(modalId);
            modalOverlay.classList.add('active');
        });
    });

    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            modalOverlays.forEach(overlay => {
                overlay.classList.remove('active');
            });
        });
    });
});
