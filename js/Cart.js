const Cart = {
  cartElement: sel("aside"),
  cartmodels: sel(".cart"),
  subtotalElement: sel(".cart-value-subtotal"),
  descontoElement: sel(".cart-value-desconto"),
  totalElement: sel(".cart-value-total"),
  subtotal: 0,
  desconto: 0,
  total: 0,

  setmodelsItemDOM(modelsItem, cartIndex) {
    const modelsInfo = Cart.setmodelsSizeName(modelsItem, cart[cartIndex]);
    const modelsName = `${modelsItem.name} ${modelsInfo}`;

    const cartItem = `
    <div class="cart--item">
      <img src=${modelsItem.img} />
      <div class="cart--item-nome">${modelsName}</div>
      <div class="cart--item--qtarea">
        <button class="cart--item-qtmenos" onclick="Cart.removeCartItem(${cartIndex})">-</button>
        <div class="cart--item--qt">${cart[cartIndex].qt}</div>
        <button class="cart--item-qtmais" onclick="Cart.addCartItem(${cartIndex})">+</button>
      </div>
    </div>`;

    return cartItem;
  },

  setmodelsSizeName(modelsItem, cartItem) {
    let modelsInfo;
    let modelsPrice;

    switch (cartItem.sizeIndex) {
      case 0:
        modelsPrice = modelsItem.prices[0];
        modelsInfo = `(P)<br>R$ ${formatPrice(modelsPrice)}`;
        break;
      case 1:
        modelsPrice = modelsItem.prices[1];
        modelsInfo = `(M)<br>R$ ${formatPrice(modelsPrice)}`;
        break;
      case 2:
        modelsPrice = modelsItem.prices[2];
        modelsInfo = `(G)<br>R$ ${formatPrice(modelsPrice)}`;
        break;
    }

    Cart.subtotal += modelsPrice * cartItem.qt;
    return modelsInfo;
  },

  addCartItem(cartIndex) {
    cart[cartIndex].qt++;
    Cart.update();
  },

  removeCartItem(cartIndex) {
    if (cart[cartIndex].qt > 1) {
      cart[cartIndex].qt--;
    } else {
      cart.splice(cartIndex, 1);
    }

    Cart.update();
  },

  update() {
    // Mobile Cart
    sel(".menu-openner span").innerHTML = cart.length;

    if (cart.length > 0) {
      // reset cart to update
      Cart.reset();
      Cart.cartElement.classList.add("show");

      cart.forEach((cartItem, cartIndex) => {
        // find the object models from cart
        let modelsItem = modelsList.find(models => models.id === cartItem.id);

        const modelsItemElement = Cart.setmodelsItemDOM(modelsItem, cartIndex);
        Cart.cartmodels.innerHTML += modelsItemElement;
      });

      Cart.setValues();
    } else {
      Cart.cartElement.classList.remove("show");
      Cart.cartElement.style.left = "100vw";
    }
  },

  reset() {
    Cart.cartmodels.innerHTML = "";
    Cart.subtotal = 0;
    Cart.desconto = 0;
    Cart.total = 0;
  },

  setValues() {
    Cart.desconto = Cart.subtotal * 0.1;
    Cart.total = Cart.subtotal - Cart.desconto;

    Cart.subtotalElement.innerHTML = `R$ ${formatPrice(Cart.subtotal)}`;
    Cart.descontoElement.innerHTML = `R$ ${formatPrice(Cart.desconto)}`;
    Cart.totalElement.innerHTML = `R$ ${formatPrice(Cart.total)}`;
  },

  setMenuMobileEvents() {
    sel(".menu-openner").addEventListener("click", () => {
      if (cart.length > 0) {
        sel("aside").style.left = "0";
      }
    });

    sel(".menu-closer").addEventListener("click", () => {
      sel("aside").style.left = "100vw";
    });
  },
};
