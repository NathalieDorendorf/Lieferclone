function generateMenuTemplate(i) {
    let image = menus[i]['image'];
    let dish = menus[i]['dish'];
    let description = menus[i]['description'];
    return `
        <img class="img-dish" src="${image}" alt="">
        <h3>${dish}</h3>
        <p>${description}</p>
        <div id="dishContainer${i}">
        </div>
    `;
}


function generateDishTemplate(i,indexDish) {
    let food = menus[i]['food'][indexDish];
    let ingredient = menus[i]['ingredient'][indexDish];
    let price = menus[i]['price'][indexDish];
    let formatter = new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR'
    });
    let formattedPrice = formatter.format(price);
    return `
        <div class="dish-container" id="foodContainer${indexDish}">
            <div class="food">
                <h4>${food}</h4>
                <p class="ft-size-16">${ingredient}</p>
                <p><b>${formattedPrice}</b></p>
            </div>
            <img class="add-icon" onclick="addToBasket('${food}', ${price})" src="./img/icons/add.svg" alt="add">
        </div>
    `;
}


function generateBasketContainerTemplate() {
    return `
        <img class="close-btn" src="./img/icons/close.svg" alt="close" onclick="openCloseBasket()">
        <h2>Warenkorb</h2>
        <div class="d-flex-se-c choose">
            <div class="d-flex gap delivery">
                <img src="./img/icons/pedal_bike.svg" alt="Lieferung">
                <div>
                    <p><b>Lieferung</b></p>
                    <p>20-45 min</p>
                </div>
            </div>
            <div class="d-flex gap takeaway">
                <img src="./img/icons/takeout_dining.svg" alt="Abholung">
                <div>
                    <p>Abholung</p>
                    <p>15 min</p>
                </div>
            </div>
        </div>
        <form class="basket" onsubmit="payBasket(); return false;">
            <div class="dish-basket" id="basket">
            </div>
            <button id="pay"><b>Bezahlen 0,00 €</b></button>
        </form>
    `;
}


function generateBasketTemplate() {
    return `
        <img class="icons" src="./img/icons/shopping_basket.svg" alt="Warenkorb">
        <h3>Fülle deinen Warenkorb</h3>
        <p>Füge einige leckere Gerichte aus der Speisekarte hinzu und bestelle dein Essen.</p>
    `;
}


function generateFoodBasketTemplate(index,food,price,amount) {
    let formattedPrice = price.toFixed(2).replace('.', ',');
    let sum = amount * price
    let formattedSum = sum.toFixed(2).replace('.', ',');
    return `
        <div class="food-basket" id="foodBasket${index}">
            <h4>${food}</h4>
            <div class="d-flex-sa-c">
                <div class="amounts">
                    <img class="add-icon" onclick="removeAmountsFromBasket(${index})" src="./img/icons/remove.svg" alt="remove">
                    <p>${amount}</p>
                    <img class="add-icon" onclick="addAmountsToBasket(${index})" src="./img/icons/add.svg" alt="add">
                </div>
                <p>${formattedPrice} €</p>
            </div>
            <div id="sum">
                <p><b>Summe: ${formattedSum} €</b></p>
            </div>
        </div>
    `;
}