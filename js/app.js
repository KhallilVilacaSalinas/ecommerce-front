
const modelsArea = sel(".models-area");

let cart = [];
let modalKey = 0;
let modalQt = 1;
let modelsPrice = 0;

const setmodelsItemDOM = (models, index) => {
  const modelsItem = `
    <div class="models-item" data-key=${index}>
      <div class="models-item--img"><img src=${models.img} /></div>
      <a href="" class="models-item--link">
        <div class="models-item--add" onclick="Modal.openmodelsItem(event)">+</div>
      </a>
      <div class="models-item--price">R$ ${formatPrice(models.prices[2])}</div>
      <div class="models-item--name">${models.name} </div>
      <div class="models-item--desc">${models.description}</div>
    </div>`;

  return modelsItem;
};

modelsList.forEach((models, index) => {
  const modelsItem = setmodelsItemDOM(models, index);
  modelsArea.innerHTML += modelsItem;
});

Modal.setQuantityEvents();
Modal.setAddToCartEvent();
Cart.setMenuMobileEvents();

function formatPrice(price) {
  return (price.toFixed(2)).toString().replace(".", ",");
}

