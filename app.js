
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('form[data-confirm]').forEach(form => {
        form.addEventListener('submit', event => {
            if (!confirm(form.dataset.confirm || 'Yakin ingin melanjutkan?')) {
                event.preventDefault();
            }
        });
    });
});
