function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(productId) {
  let cart = getCart();
  cart.push(productId);
  saveCart(cart);
  updateCartCount();
  alert("Product added to cart!");
}

function updateCartCount() {
  const cart = getCart();
  const cartCount = document.getElementById("cartCount");
  if (cartCount) {
    cartCount.innerText = cart.length;
  }
}