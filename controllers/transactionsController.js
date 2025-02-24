import { getTransactionsAPI } from "./TransactionAPIController.js";

export const getTransactions = async (req, res) => {
  try {
    const response = await getTransactionsAPI(); // No need to pass req, res
    const transactions = response.data; // Extract transactions from the response

    // Render the transactions into the EJS template
    return res.render("transactions", {
      title: "Transactions",
      userId: req.session.userId || null,
      transactions, 
    });
  } catch (error) {
    console.error("Error fetching transactions:", error);
    res.status(500).send("Error fetching transactions");
  }
};
