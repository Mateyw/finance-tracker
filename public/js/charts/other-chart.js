const otherChart = document.getElementById('otherChart');

fetch('/api/getTransactionSum', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    userId: 14,
    category: 'Food',
    month: 2,
    year: 2025,
    type: 'Expense'
  })
})
.then(response => response.json())
.then(data => {
  const amount = data.amount; // Assuming the response returns an object with a 'sum' property
  new Chart(otherChart, {
    type: 'doughnut',
    data: {
      labels: ['Food', 'Tech'],
      datasets: [{
        label: '# of Amount',
        data: [amount, techAmount],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
})
.catch(error => console.error('Error:', error));