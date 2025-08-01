// Fetch and display a random joke
document.getElementById('fetchjoke').addEventListener('click', () => {
  // Call API - get a random joke
  fetch('https://official-joke-api.appspot.com/random_joke')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // Update joke text in DOM
      document.getElementById('message').textContent = data.setup + ' ' + data.punchline;
    });

  console.log('hello');
});

// Process order using async/await
async function processOrder(orderId) {
  try {
    const orderResponse = await fetch(`/api/orders/${orderId}`);
    const order = await orderResponse.json();

    const inventoryResponse = await fetch(`/api/inventory/${order.productId}`);
    const inventory = await inventoryResponse.json();

    if (inventory.stock > 0) {
      return { success: true, message: 'Order processed' };
    } else {
      return { success: false, message: 'Out of stock' };
    }
  } catch (error) {
    return { success: false, message: 'Error processing order', error: error.message };
  }
}
