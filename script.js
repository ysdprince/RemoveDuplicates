// Initialize the cart as an empty array
const cart = [];

// Function to add an item to the cart
function addItemToCart(item) {
  // Check if the item is already in the cart
  const existingItem = cart.find((cartItem) => cartItem.id === item.id);

  if (existingItem) {
    // If the item is already in the cart, increase the quantity
    existingItem.quantity += 1;
    console.log(`Added 1 more ${item.name} to your cart.`);
  } else {
    // If the item is not in the cart, add it
    cart.push({ id: item.id, name: item.name, price: item.price, quantity: 1 });
    console.log(`Added ${item.name} to your cart.`);
  }
}

// Example usage
const item1 = { id: 1, name: 'Product A', price: 19.99 };
const item2 = { id: 2, name: 'Product B', price: 29.99 };

addItemToCart(item1); // Added Product A to your cart.
addItemToCart(item2); // Added Product B to your cart.
addItemToCart(item1); // Added 1 more Product A to your cart.
