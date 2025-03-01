document.addEventListener("DOMContentLoaded", () => {
    const cart = {};

    document.querySelectorAll(".product-card").forEach((card, index) => {
        const productId = index + 1;
        card.setAttribute("data-id", productId);
        
        const quantityDisplay = card.querySelector(".quantity");
        const minusBtn = card.querySelectorAll(".quantity-btn")[0];
        const plusBtn = card.querySelectorAll(".quantity-btn")[1];
        const addToCartBtn = card.querySelector(".add-to-cart");
        
        let quantity = 1;

        minusBtn.addEventListener("click", () => {
            if (quantity > 1) {
                quantity--;
                quantityDisplay.textContent = quantity;
            }
        });

        plusBtn.addEventListener("click", () => {
            quantity++;
            quantityDisplay.textContent = quantity;
        });

        addToCartBtn.addEventListener("click", () => {
            const productName = card.querySelector(".product-name").textContent;
            const productPrice = card.querySelector(".product-price").textContent;
            const productImage = card.querySelector(".product-image").src;
            
            if (!cart[productId]) {
                cart[productId] = {
                    name: productName,
                    price: productPrice,
                    image: productImage,
                    quantity: quantity
                };
            } else {
                cart[productId].quantity += quantity;
            }
            console.log(cart); // This logs the cart content for testing
        });
    });
});
