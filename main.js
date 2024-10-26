const productSelector = document.getElementById('product-selector');  // Product dropdown (so user can selecg)
const quantityInput = document.getElementById('quantity');  // Quantity field
const totalPriceElement = document.getElementById('total-price');  // Total price 
const placeOrderButton = document.getElementById('buy-button');  //  purchase button 
const orderSummary = document.getElementById('order-summary');  //  order summary

// create function that updates price
function updatePrice () {
    const selectedProduct = parseFloat(productSelector.value); //this finds the product in the dropdown and corresponding price
    const quantity = parseInt(quantityInput.value); // Get quantity (parsefloat and parseint make sure the value is treated as a number)
        const totalPrice = selectedProduct * quantity;  // Calculate total price
    totalPriceElement.textContent = `${totalPrice}` //updates total price according to qtd and product

}
// add event listeners to update price
productSelector.addEventListener("change", updatePrice); // update price according to product
quantityInput.addEventListener("input", updatePrice); // update price according to quantity

//add event listener to pruchase button
placeOrderButton.addEventListener("click", () => {
const selectedProduct= productSelector.options[productSelector.selectedIndex].text; //get the name of the chosen product
const quantity = quantityInput.value;  // quantity
const totalPrice = totalPriceElement.textContent;  // Get the current total price

orderSummary.textContent = `Congratulations on your order! You ordered ${quantity} of ${selectedProduct} for a total of ${totalPrice}`
alert (`Thank you for your purchase!`)

})



