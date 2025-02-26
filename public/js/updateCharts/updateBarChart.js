document.addEventListener("DOMContentLoaded", function () {
    const categoryFilter = document.getElementById("category");
    const typeFilter = document.getElementById("type");
    const fromDateFilter = document.getElementById("fromDate");
    const toDateFilter = document.getElementById("toDate");

    function updateChart() {
        const category = categoryFilter.value;
        const type = typeFilter.value;
        const fromDate = fromDateFilter.value;
        const toDate = toDateFilter.value;

        // Build query parameters for the fetch request
        const queryParams = new URLSearchParams({
            category: category,
            type: type,
            fromDate: fromDate,
            toDate: toDate,
        });

        fetch(`/dashboard?${queryParams}`) // ✅ Keep fetch request to `/dashboard`
            .then(response => response.json())
            .then(data => {
                if (data.labels && data.values) {
                    updateBarChart(data.labels, data.values);
                } else {
                    console.error("Invalid data received from server:", data);
                }
            })
            .catch(error => console.error("Error fetching filtered data:", error));
    }

    // Add event listeners to filters
    categoryFilter.addEventListener("change", updateChart);
    typeFilter.addEventListener("change", updateChart);
    fromDateFilter.addEventListener("change", updateChart);
    toDateFilter.addEventListener("change", updateChart);
});
