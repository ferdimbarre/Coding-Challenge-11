const productSelector = document.getElementById('product-selector');  // Product dropdown (so user can selecg)
const quantityInput = document.getElementById('quantity');  // Quantity field
const totalPriceElement = document.getElementById('total-price');  // Total price 
const placeOrderButton = document.getElementById('buy-button');  //  purchase button 
const orderSummary = document.getElementById('order-summary');  //  order summary

productSelector.addEventListener( "change", (event) => { //event listener to allow user to use dropdown menu
const selectedProduct = event.target.value //this finds the product in the dropdown and corresponding price
const quantity = (quantityInput.value);  // Get quantity
    const totalPrice = selectedProduct * quantity;  // Calculate total price
totalPriceElement.textContent = `${totalPrice}` //updates total price according to qtd and product
}

)





