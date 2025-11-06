let cartCount = 0;
const cartCounter = document.getElementById('cart-count');
const buttons = document.querySelectorAll('.add-to-cart');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    cartCount++;
    cartCounter.textContent = cartCount;
    btn.textContent = "В корзине ✓";
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = "Добавить в корзину";
      btn.disabled = false;
    }, 2000);
  });
});
