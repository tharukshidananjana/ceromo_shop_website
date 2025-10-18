

document.addEventListener("DOMContentLoaded", () => {
    const cartItems = [];
    const cartTable = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");

    function updateCart() {
        cartTable.innerHTML = "";
        let totalPrice = 0;

        cartItems.forEach((item, index) => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${item.name}</td>
                <td>$${item.price}</td>
                <td>
                    <input type="number" value="${item.quantity}" min="1" data-index="${index}" class="quantity-input">
                </td>
                <td>$${item.price * item.quantity}</td>
                <td>
                    <button class="remove-btn" data-index="${index}">Remove</button>
                </td>
            `;

            cartTable.appendChild(row);
            totalPrice += item.price * item.quantity;
        });

        totalPriceElement.textContent = totalPrice.toFixed(2);
    }

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", (event) => {
            const name = event.target.getAttribute("data-name");
            const price = parseFloat(event.target.getAttribute("data-price"));

            const existingItem = cartItems.find(item => item.name === name);

            if (existingItem) {
                existingItem.quantity++;
            } else {
                cartItems.push({ name, price, quantity: 1 });
            }

            updateCart();
        });
    });

    cartTable.addEventListener("input", (event) => {
        if (event.target.classList.contains("quantity-input")) {
            const index = event.target.getAttribute("data-index");
            cartItems[index].quantity = parseInt(event.target.value);
            updateCart();
        }
    });

    cartTable.addEventListener("click", (event) => {
        if (event.target.classList.contains("remove-btn")) {
            const index = event.target.getAttribute("data-index");
            cartItems.splice(index, 1);
            updateCart();
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-btn"); // Button to open/close menu
    const navbar = document.querySelector(".navbar");
if (menuBtn){
    menuBtn.addEventListener("click", function () {
        navbar.classList.toggle("active"); // Toggle the 'active' class
    });
}
else{
    console.error("Menu button not found.Check if #menu-btn exists in the HTML.")
}
});






function validateForm() {
            let firstName = document.getElementById("firstName").value.trim();
            let email = document.getElementById("email").value.trim();
            let message = document.getElementById("message").value.trim();
            let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (firstName === "") {
                alert("Please enter your first name.");
                return false;
            }
            if (email === "" || !emailPattern.test(email)) {
                alert("Please enter a valid email address.");
                return false;
            }
            if (message === "") {
                alert("Please enter your feedback.");
                return false;
            }

            alert("Form submitted successfully!");
            return true;
        }
