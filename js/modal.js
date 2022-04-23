const sel = el => document.querySelector(el);
const all = el => document.querySelectorAll(el);

const Modal = {
  modelsModal: sel(".models-modal"),
  modelsSizeList: all(".models-info--size"),
  addmodelsElement: sel(".models-info--qtmais"),
  removemodelsElement: sel(".models-info--qtmenos"),
  addToCartButton: sel(".models-info--addButton"),

  openmodelsItem(event) {
    event.preventDefault();

    Modal.setmodelsItemDOM(event);
    Modal.open();
  },

  open() {
    Modal.modelsModal.style.opacity = 0;
    Modal.modelsModal.style.display = "flex";
    setTimeout(() => {
      Modal.modelsModal.style.opacity = 1;
    }, 200);
  },

  close() {
    Modal.modelsModal.style.opacity = 0;
    setTimeout(() => {
      Modal.modelsModal.style.display = "none";
    }, 500);
  },

  setmodelsItemDOM(e) {
    let modelsIndex = e.target.closest(".models-item").getAttribute("data-key");
    modalKey = modelsIndex;
    modalQt = 1; // initial models qtd

    sel(".models-modal-img").src = modelsList[modelsIndex].img;
    sel(".models-info h1").innerHTML = modelsList[modelsIndex].name;
    sel(".models-info--desc").innerHTML = modelsList[modelsIndex].description;
    sel(".models-info--actualPrice").innerHTML = `R$ ${formatPrice(
      modelsList[modelsIndex].prices[2]
    )}`;

    sel(".models-info--qt").innerHTML = modalQt;

    Modal.setmodelsPrices(modelsIndex);
  },

  setmodelsPrices(modelsIndex) {
    Modal.modelsSizeList.forEach((size, sizeIndex) => {
      // initial -> models G
      if (sizeIndex === 2) Modal.setSelectedSize(size);
      modelsPrice = modelsList[Number(modelsIndex)].prices[sizeIndex];

      size.addEventListener("click", () => {
        Modal.setSelectedSize(size);

        modelsPrice = modelsList[Number(modelsIndex)].prices[sizeIndex];
        sel(".models-info--actualPrice").innerHTML = `R$ ${formatPrice(
          modelsPrice * modalQt
        )}`;
      });

      size.querySelector("span").innerHTML =
        modelsList[modelsIndex].sizes[sizeIndex];
    });
  },

  setSelectedSize(size) {
    sel(".models-info--size.selected").classList.remove("selected");
    size.classList.add("selected");
  },

  setQuantityEvents() {
    // seting the quantity buttons
    Modal.removemodelsElement.addEventListener("click", () => {
      if (modalQt > 1) {
        modalQt--;
        sel(".models-info--qt").innerHTML = modalQt;

        sel(".models-info--actualPrice").innerHTML = `R$ ${formatPrice(
          modelsPrice * modalQt
        )}`;
      }
    });

    Modal.addmodelsElement.addEventListener("click", () => {
      if (modalQt < 50) {
        // max = 50 modelss
        modalQt++;
        sel(".models-info--qt").innerHTML = modalQt;

        sel(".models-info--actualPrice").innerHTML = `R$ ${formatPrice(
          modelsPrice * modalQt
        )}`;
      }
    });
  },

  //* Add to Cart
  setAddToCartEvent() {
    Modal.addToCartButton.addEventListener("click", () => {
      // get selected size
      const sizeIndex = parseInt(
        sel(".models-info--size.selected").getAttribute("data-key")
      );

      // id@size = identifier
      const identifier = modelsList[modalKey].id + "@" + sizeIndex;
      const key = cart.findIndex(item => item.identifier == identifier);

      //* if it is already in cart
      if (key > -1) cart[key].qt += modalQt;

      //* if it is already in cart
      if (key === -1) {
        const cartItem = {
          identifier,
          id: modelsList[modalKey].id,
          sizeIndex,
          qt: modalQt,
        };

        cart.push(cartItem);
      }

      Cart.update();
      Modal.close();
    });
  },
};
