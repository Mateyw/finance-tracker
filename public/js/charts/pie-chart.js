const pieChart = document.getElementById('pieChart');

new Chart(pieChart, {
    type: 'pie',
    data: {
      labels: ['Income', 'Expense'],
      datasets: [
        {
        label: 'Income',
        data: [1, 12], // change later to first value instead 12 -> Income and 19 -> Expense
        borderWidth: 1,
      
      }
    ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });