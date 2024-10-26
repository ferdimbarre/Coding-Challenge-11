const productSelector = document.getElementById('product-selector');  // Product dropdown (so user can selecg)
const quantityInput = document.getElementById('quantity');  // Quantity field
const totalPriceElement = document.getElementById('total-price');  // Total price 
const placeOrderButton = document.getElementById('buy-button');  //  purchase button 
const orderSummary = document.getElementById('order-summary');  //  order summary

productSelector.addEventListener( "change", (event) => {
const selectedProduct = event.target.value
totalPriceElement.textContent = `$${selectedProduct}` //event listener to allow user to use dropdown menu
}

)





