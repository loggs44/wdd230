document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
  
    // Retrieve order details
    const orderDetails = {
      firstName: urlParams.get('firstName'),
      email: urlParams.get('email'),
      phone: urlParams.get('phone'),
      fruit1: urlParams.get('fruit1'),
      fruit2: urlParams.get('fruit2'),
      fruit3: urlParams.get('fruit3'),
      specialInstructions: urlParams.get('specialInstructions'),
      orderDate: new Date().toISOString(), // Store the order date in ISO format
    };
  
    // Store order details in local storage
    localStorage.setItem('orderDetails', JSON.stringify(orderDetails));
  
    // Display the order details
    document.getElementById('outputName').innerText = orderDetails.firstName;
    document.getElementById('outputEmail').innerText = orderDetails.email;
    document.getElementById('outputPhone').innerText = orderDetails.phone;
    document.getElementById('outputFruit1').innerText = orderDetails.fruit1;
    document.getElementById('outputFruit2').innerText = orderDetails.fruit2;
    document.getElementById('outputFruit3').innerText = orderDetails.fruit3;
    document.getElementById('outputInstructions').innerText = orderDetails.specialInstructions;
    document.getElementById('orderDate').innerText = new Date(orderDetails.orderDate).toLocaleString();
  
    // Increment the total number of orders
    let totalOrders = localStorage.getItem('totalOrders') || 0;
    totalOrders = parseInt(totalOrders) + 1;
    localStorage.setItem('totalOrders', totalOrders);
  });
