/* eslint-disable no-shadow */
/* eslint-disable no-restricted-syntax */
const shoppingCart = {
  items: [],
  total: 0,
  addItem(name, price, quantity) {
    const item = { name, price, quantity };
    this.items.push(item); this.total += price * quantity;
  },
  removeItem(name) {
    const index = this.items.findIndex((item) => item.name === name);
    if (index !== -1) {
      const item = this.items[index];
      this.total -= item.price * item.quantity; this.items.splice(index, 1);
    }
  },
  updateQuantity(name, quantity) {
    const item = this.items.find((item) => item.name === name); if (item) {
      this.total -= item.price * item.quantity; item.quantity = quantity;
      this.total += item.price * item.quantity;
    }
  },
  calculateTotal() {
    let total = 0;
    for (const item of this.items) {
      total += item.price * item.quantity;
    } return total;
  },
  clearCart() {
    this.items = [];
    this.total = 0;
  },
};
  // Пример использования shoppingCart.addItem("Товар 1", 100, 2);
shoppingCart.addItem('Товар 2', 50, 3); console.log(shoppingCart.items); // [{ name: "Товар 1", price: 100, quantity: 2 }, { name: "Товар 2", price: 50, quantity: 3 }]
console.log(shoppingCart.total); // 350
shoppingCart.removeItem('Товар 1'); console.log(shoppingCart.items); // [{ name: "Товар 2", price: 50, quantity: 3 }]
console.log(shoppingCart.total); // 150
shoppingCart.updateQuantity('Товар 2', 5); console.log(shoppingCart.items); // [{ name: "Товар 2", price: 50, quantity: 5 }]
console.log(shoppingCart.total); // 250
console.log(shoppingCart.calculateTotal()); // 250
shoppingCart.clearCart(); console.log(shoppingCart.items); // []
console.log(shoppingCart.total); // 0
