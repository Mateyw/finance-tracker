const transactionsContainer = document.querySelector(".transactions-container");
const main = document.querySelector(".main");

transactionsContainer.addEventListener("click", (e) => {
  const transactionItem = e.target.closest(".transaction-item");

  if (transactionItem) {
    let logoContainer = transactionItem.querySelector(".logo-container img");
    let companyContainer = transactionItem.querySelector(".company-container");
    let amountContainer = transactionItem.querySelector(
      ".amount-container .transaction-amount"
    );

    // Remove previous details if they exist
    const existingDetails = document.querySelector(".transaction-details");
    if (existingDetails) {
      existingDetails.remove();
    }

    // Create transaction details div
    const transactionDetails = document.createElement("div");
    transactionDetails.classList.add("transaction-details");
    transactionDetails.innerHTML = `
            <div class="transaction-details-item">
                <div class="transaction-details-image">
                    <img src="${logoContainer.src}" alt="Company Logo">
                </div>
                <div class="transaction-details-company">
                    <div class="transaction-details-company-name-container">
                    <h3>${
                      companyContainer.querySelector(".company-name")
                        .textContent
                    }</h3>
                    </div>
                    <div class="transaction-details-company-payment-method-container">
                        <p>${companyContainer.querySelector(".payment-method").textContent}</p>
                    </div>
                </div>
                <div class="transaction-details-amount">
                    <span>${amountContainer.textContent}</span>
                </div>
                <span class="btn-close">x</span>
            </div>
        `;

    main.appendChild(transactionDetails);
  }
});
