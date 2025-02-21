document.addEventListener('DOMContentLoaded', (event) => {
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-close')) {
            const transactionDetails = e.target.closest('.transaction-details');
            if (transactionDetails) {
                transactionDetails.remove();
            }
        }
    });
});