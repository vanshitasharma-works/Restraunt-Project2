const menuData = [
  { name: "Kadai Paneer", price: 190 },
  { name: "Daal-Baati", price: 280 },
  { name: "Chole Bature", price: 230 },
  { name: "Veg Thali", price: 200 },
  { name: "Pav Bhaji", price: 140 },
  { name: "Gulab Jamun", price: 90 }
];

const menuContainer = document.getElementById("menuContainer");
const cartList = document.getElementById("cartList");
const totalSpan = document.getElementById("total");

let cart = [];

// Render menu items dynamically
function renderMenu() {
  menuData.forEach(item => {
    const div = document.createElement("div");
    div.classList.add("menu-item");

    div.innerHTML = `
      <h3>${item.name}</h3>
      <p>₹${item.price}</p>
      <button>Add</button>
    `;

    div.querySelector("button").addEventListener("click", () => {
      addToCart(item);
    });

    menuContainer.appendChild(div);
  });
}

// Add to cart
function addToCart(item) {
  cart.push(item);
  renderCart();
}

// Remove item
function removeFromCart(index) {
  cart.splice(index, 1);
  renderCart();
}

// Render cart
function renderCart() {
  cartList.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} - ₹${item.price}
      <span class="remove">❌</span>
    `;

    li.querySelector(".remove").addEventListener("click", () => {
      removeFromCart(index);
    });

    cartList.appendChild(li);
  });

  totalSpan.textContent = total;
}

// Init
renderMenu();
