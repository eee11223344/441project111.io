document.addEventListener('DOMContentLoaded', function() {
    // Select the elements that will be used in the script
    const cartItems = document.getElementById('cart-items'); // The element where the cart items will be displayed
    const cartTotal = document.getElementById('cart-total'); // The element where the total price of the cart will be displayed
    const clearCartButton = document.getElementById('clear-cart'); // The button to clear the cart
    let cart = []; // Initialize an empty array to store the cart items

    // Iterate over all 'add-to-cart' buttons and add click event listeners
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            // Find the closest '.course-box' parent element of the clicked button
            const courseBox = this.closest('.course-box');
            // Get the course name from the 'h3' tag inside the '.course-box'
            const courseName = courseBox.querySelector('h3').textContent;
            // Get the course price by selecting the second 'p' tag inside the '.course-box', removing the text 'Price: $' and converting to float
            const coursePrice = parseFloat(courseBox.querySelector('p:nth-child(2)').textContent.replace('Price: $', ''));
            // Get the quantity input value as an integer
            const courseQuantity = parseInt(courseBox.querySelector('input[type=number]').value);

            // Check if the quantity is greater than 0
            if (courseQuantity > 0) {
                // Find if the cart already contains the same course
                const item = cart.find(item => item.name === courseName);
                // If the course is already in the cart, increase its quantity
                if (item) {
                    item.quantity += courseQuantity;
                } else {
                    // If the course is not in the cart, add it to the cart array with its price and quantity
                    cart.push({name: courseName, price: coursePrice, quantity: courseQuantity});
                }
                // Update the cart display and total price
                updateCart();
            }
        });
    });

    function updateCart() {
        cartItems.innerHTML = '';
        let total = 0;
        cart.forEach((item, index) => {
            const div = document.createElement('div');
            div.textContent = `${item.name} x ${item.quantity}: $${item.price * item.quantity}`;

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.addEventListener('click', () => {
                cart.splice(index, 1);
                updateCart();
            });

            div.appendChild(removeButton);
            cartItems.appendChild(div);

            total += item.price * item.quantity;
        });
        cartTotal.textContent = `Total prices: $${total.toFixed(2)}`;
    }

    clearCartButton.addEventListener('click', function() {
        cart = [];
        updateCart();
    });
});
