const lineChart = document.getElementById('lineChart');

new Chart(lineChart, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
        label: 'Income',
        data: [12, 19, 3, 5, 2, 3, 23, 59, 122, 34, 23, 34],
        borderWidth: 1,
      
      }, 
      {
        label: 'Expense',
        data: [17, 1, 33, 25, 12, 5, 13, 432, 53, 67, 2, 56],
        borderWidth: 1
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