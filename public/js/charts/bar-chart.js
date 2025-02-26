let barChart; // Global chart instance

function updateBarChart(labels, values) {
    if (barChart) {
        barChart.destroy(); // Destroy the existing chart before creating a new one
    }

    const ctx = document.getElementById("barChart").getContext("2d");
    barChart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: labels,
            datasets: [{
                label: "Amount",
                data: values,
                backgroundColor: "rgba(54, 162, 235, 0.5)",
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
