// Function to calculate total petrol cost
function calculateTotal() {
    // Get the cost per liter from input
    const costPerLiter = parseFloat(document.getElementById('cost').value);
  
    // Get the number of liters from input
    const liters = parseFloat(document.getElementById('liters').value);
  
    // Calculate total cost
    const total = costPerLiter * liters;
  
    // Display total with two decimal places
    document.getElementById('total').innerText = `Total: £${total.toFixed(2)}`;
  }