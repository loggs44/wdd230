document.addEventListener('DOMContentLoaded', function() {
    // Retrieve and display the total number of drinks from local storage
    let totalOrders = localStorage.getItem('totalOrders') || 0;
    document.getElementById('totalDrinks').innerText = totalOrders;
  });
  