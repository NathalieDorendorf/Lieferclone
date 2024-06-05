loadMenus();
loadBasket();


function init() {
    render();
    renderBasketContainer();
}


function render() {
    let content = document.getElementById('menuContainer');
    content.innerHTML = ``;
    for (let i = 0; i < menus.length; i++) {
        const menu = menus[i];
        content.innerHTML += generateMenuTemplate(i);
        renderDish(i);
        saveMenus();
    }
}


function renderDish(i) {
    let contentDish = document.getElementById(`dishContainer${i}`);
    contentDish.innerHTML = ``;
    for (let indexDish = 0; indexDish < menus[i]['food'].length; indexDish++) {
        const food = menus[i]['food'][indexDish];
        const ingredient = menus[i]['ingredient'][indexDish];
        const price = menus[i]['price'][indexDish];
        contentDish.innerHTML += generateDishTemplate(i,indexDish);
    }
}


function renderBasketContainer() {
    let contentBasketContainer = document.getElementById('basketContainer');
    contentBasketContainer.innerHTML = ``;
    contentBasketContainer.innerHTML += generateBasketContainerTemplate();
    renderBasket();
    saveBasket();
}


function renderBasket() {
    let contentBasket = document.getElementById('basket');
    contentBasket.innerHTML = ``;
    if ([foods] == 0) {
        contentBasket.innerHTML += generateBasketTemplate();
    } else {
        for (let index = 0; index < foods.length; index++) {
            const food = foods[index];
            const price = prices[index];
            const amount = amounts[index];
            contentBasket.innerHTML += generateFoodBasketTemplate(index,food,price,amount);
        }    
    }
}


function addToBasket(food,price) {
    maxLength = 6;
    maxAmount = 12;
    let index = foods.indexOf(food);
    if (index == -1 && foods.length <= maxLength) {
        foods.push(food);
        prices.push(price);
        amounts.push(1);
    } else if (index !== -1) {
        if (amounts[index] < maxAmount) {
            amounts[index]++;
        } else {
            alert('Maximale Bestellanzahl für diese Speise ist erreicht!')
        }
    } else {
        alert('Maximale Anzahl verschiedener Gerichte ist erreicht!')
    }
    renderBasket();
    saveBasket();
    updateShoppingBasket();
}


function removeAmountsFromBasket(i) {
    if (amounts[i] > 1) {
        amounts[i]--;
    } else {
        amounts.splice(i, 1);
        foods.splice(i, 1);
        prices.splice(i, 1);
    }
    renderBasket();
    saveBasket();
    updateShoppingBasket();
}


function addAmountsToBasket(i) {
    maxAmount = 12;
    if (amounts[i] < maxAmount) {
        amounts[i]++;
    } else {
        alert('Maximale Bestellanzahl für diese Speise ist erreicht!')
    }
    renderBasket();
    saveBasket();
    updateShoppingBasket();
}


function updateShoppingBasket() {
    let sum = 0;
    for (let i = 0; i < prices.length; i++) {
        sum += prices[i] * amounts[i];
    }
    let formattedFinalSum = sum.toFixed(2).replace('.', ',');
    document.getElementById('pay').innerHTML = `<b>Bezahlen ${formattedFinalSum} €</b>`;
    document.getElementById('payMobile').innerHTML = `<b>Warenkorb ${formattedFinalSum} €</b>`;
}


function openCloseBasket() {
    document.getElementById('basketContainer').classList.toggle('basket-overlay');
    document.getElementById('basketContainer').classList.toggle('basket-container');
    document.getElementById('basketMobile').classList.toggle('d-none');
    document.getElementById('noScroll').classList.toggle('no-scroll');
}


function payBasket() {
    if (foods.length == 0) {
        alert('Bitte etwas in den Warenkorb hinzufügen!')
    } else {
        prices = [];
        amounts = [];
        foods = [];
        saveBasket();
        renderBasketContainer();
        document.getElementById('paymentContainer').classList.toggle('payment-container');
        document.getElementById('paymentContainer').classList.toggle('d-none');
        document.getElementById('noScroll').classList.toggle('no-scroll');        
    }
}


function closePayBasket() {
    document.getElementById('paymentContainer').classList.toggle('payment-container');
    document.getElementById('paymentContainer').classList.toggle('d-none');
    document.getElementById('noScroll').classList.toggle('no-scroll');        
}


function saveMenus() {
    let menuAsText = JSON.stringify(menus);
    localStorage.setItem('menu', menuAsText);
}


function saveBasket() {
    let foodsAsText = JSON.stringify(foods);
    let pricesAsText = JSON.stringify(prices);
    let amountsAsText = JSON.stringify(amounts);
    localStorage.setItem('foods', foodsAsText)
    localStorage.setItem('prices', pricesAsText);
    localStorage.setItem('amounts', amountsAsText);
}


function loadMenus() {
    let menuAsText = localStorage.getItem('menu');
    if (menuAsText) {
        menus = JSON.parse(menuAsText);
    }
}


function loadBasket() {
    let foodsAsText = localStorage.getItem('foods');
    let pricesAsText = localStorage.getItem('prices');
    let amountsAsText = localStorage.getItem('amounts');
    if (foodsAsText && pricesAsText && amountsAsText) {
        foods = JSON.parse(foodsAsText);
        prices = JSON.parse(pricesAsText);
        amounts = JSON.parse(amountsAsText);
    }
}