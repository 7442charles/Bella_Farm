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


// order now modal handling
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("orderModal");
    const closeModal = document.getElementById("closeModal");
    const modalProductName = document.getElementById("modalProductName");
    const modalProductPrice = document.getElementById("modalProductPrice");
    const modalProductQuantity = document.getElementById("modalProductQuantity");

    // Select all "Order Now" buttons
    const orderButtons = document.querySelectorAll(".product-card .order-now");

    orderButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const productCard = this.closest(".product-card"); // Find the parent product card
            const productName = productCard.querySelector(".product-name").textContent;
            const productPrice = productCard.querySelector(".product-price").textContent;
            const productQuantity = productCard.querySelector(".quantity").textContent;

            // Update modal content
            modalProductName.textContent = productName;
            modalProductPrice.textContent = productPrice;
            modalProductQuantity.textContent = productQuantity;

            // Show modal
            modal.classList.remove("hidden");
        });
    });

    // Close modal when clicking close button
    closeModal.addEventListener("click", function () {
        modal.classList.add("hidden");
    });

    // Close modal when clicking outside the modal
    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.classList.add("hidden");
        }
    });
});