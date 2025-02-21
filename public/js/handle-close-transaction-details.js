const transactionDetails = document.querySelector('.transaction-details');

document.addEventListener('DOMContentLoaded', (event) => {
    document.addEventListener('click', (e) => {
        // Close details on click on close button or...
        if (e.target.classList.contains('btn-close')) {
            const transactionDetails = e.target.closest('.transaction-details');
            if (transactionDetails) {
                transactionDetails.remove();
            }
            
        // ... close details on click on darkened div around details item div 
        }
        if (e.target.classList.contains('transaction-details')) {
            const transactionDetails = e.target.closest('.transaction-details');
            if (transactionDetails) {
                transactionDetails.remove();
            }
            
        }
    });
});