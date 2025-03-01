    document.addEventListener('DOMContentLoaded', () => {
        function addToCart(productId) {
            const quantityElement = document.querySelector(`[data-product-id="${productId}"] .quantity`);
            const quantity = parseInt(quantityElement.textContent);
            
            // Here you can implement the logic to add the item to the cart
            console.log(`Added ${quantity} of product ID ${productId} to the cart.`);
            
            // You can also update the cart UI or local storage here
        }
    
        // Function to handle quantity changes
        function changeQuantity(productId, change) {
            const quantityElement = document.querySelector(`[data-product-id="${productId}"] .quantity`);
            let quantity = parseInt(quantityElement.textContent);
            
            // Update quantity based on the change
            quantity += change;
            if (quantity < 1) quantity = 1; // Prevent negative quantity
            quantityElement.textContent = quantity;
        }
    
        // Event listeners for the buttons
        document.addEventListener('DOMContentLoaded', () => {
            // Add event listeners to all add-to-cart buttons
            const addToCartButtons = document.querySelectorAll('.add-to-cart');
            addToCartButtons.forEach(button => {
                button.addEventListener('click', (event) => {
                    const productCard = event.target.closest('.product-card');
                    const productId = productCard.getAttribute('data-product-id');
                    addToCart(productId);
                });
            });
    
            // Add event listeners to all quantity buttons
            const quantityButtons = document.querySelectorAll('.quantity-btn');
            quantityButtons.forEach(button => {
                button.addEventListener('click', (event) => {
                    const productCard = event.target.closest('.product-card');
                    const productId = productCard.getAttribute('data-product-id');
                    const isIncrement = event.target.textContent === '+';
                    changeQuantity(productId, isIncrement ? 1 : -1);
                });
            });
        });
    });