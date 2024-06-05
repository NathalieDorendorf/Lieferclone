let foods = [];
let prices = [];
let amounts = [];


let menus = [
    {
        image: './img/sushify/maki-cucumber.jpg',
        dish: 'Maki',
        description: 'Maki sind eine japanische Sushi-Art, bei der Reis und verschiedene Zutaten in ein Nori-Algenblatt gerollt werden.',
        food: ['Thunfisch Maki', 'Gurke Maki', 'Lachs Avokado Maki'],
        ingredient: ['mit Reis und Thunfisch', 'mit Reis, Gurke und Sesam', 'mit Reis, Lachs und Avokado'],
        price: [5.80, 4.10, 5.80]
    },
    {
        image: './img/sushify/nigiri-white-fish.jpg',
        dish: 'Nigiri',
        description: 'Nigiri sind eine Art von Sushi, bei der eine kleine Portion Reis mit einer Scheibe rohem Fisch oder anderen Meeresfrüchten belegt wird.',
        food: ['Tulip Ikura Nigiri', 'Ebi Nigiri', 'Dorade Nigiri'],
        ingredient: ['mit Reis, Lachs und Lachsrogen', 'mit Reis, Masago, Mayonnaise und Mirin', 'mit Reis, Ponzu Sauce, Chili und Koriander'],
        price: [5.00, 2.90, 3.20]
    },
    {
        image: './img/sushify/uramaki.jpg',
        dish: 'Uramaki',
        description: 'Uramaki sind eine Art von Sushi, bei der der Reis außen und das Nori-Algenblatt sowie die Füllung, wie Fisch oder Gemüse, innen liegen.',
        food: ['California Roll - Veggie', 'California Roll - Thunfisch Tataki Avokado', 'California Roll - Yakitori'],
        ingredient: ['mit Reis, Quinoa, Gurke, Chioggia Bete, Rucola, Karotte, Avokado, Oliven, Ponzu Sauce und Sesamöl', 'mit Reis, Sesam, Flambierter Thunfisch, Ponzu Sauce, Schnittlauch und Koriander', 'mit Reis, Sesam, Gegrillte Hähnchenspieße nach japanischer Art, Avokado, Yakitori Sauce und Schnittlauch'],
        price: [7.90, 9.50, 7.90]
    },
    {
        image: './img/sushify/gunkan-maki.jpg',
        dish: 'Gunkan Maki',
        description: 'Gunkan Maki sind eine Art von Sushi, bei der eine kleine Reisbasis mit einem Streifen Nori umwickelt und mit weichen oder losem Belag wie Rogen oder Meeresfrüchtesalat gefüllt wird.',
        food: ['Gunkan Lachs', 'Gunkan Thunfisch', 'Gunkan Ikura'],
        ingredient: ['mit Reis, Lachstatar, Scharfe Sauce, Sesamöl, Schnittlauch und Mayonnaise', 'mit Reis, Thunfischtatar, Scharfe Sauce, Sesamöl und Schnittlauch', 'mit Reis und Lachsrogen'],
        price: [3.20, 3.50, 4.50]
    },
    {
        image: './img/sushify/sashimi.jpg',
        dish: 'Sashimi',
        description: 'Sashimi ist ein japanisches Gericht, das aus dünn geschnittenen, rohen Fisch- oder Meeresfrüchtestücken besteht und ohne Reis serviert wird.',
        food: ['Thunfisch Sashimi', 'Lachs Sashimi', 'Thunfisch Lachs Duo Sashimi'],
        ingredient: ['mit Thunfisch', 'mit Lachs', 'mit Thunfisch und Lachs'],
        price: [7.50, 6.90, 19.50]
    },
    {
        image: './img/sushify/cocktail.jpg',
        dish: 'Cocktails',
        description: 'Cocktails sind Mischgetränke, die aus einer Kombination von Spirituosen, Säften, Sirupen, Bitters und anderen Zutaten bestehen und oft kunstvoll garniert werden.',
        food: ['Strawberry Mojito', 'Pina Colada', 'Cuba Libre'],
        ingredient: ['Weißer Rum, Limettensaft, Zucker, frische Erdbeeren, Minze und Sodawasser', 'Weißer Rum, Kokoscreme, Ananassaft und Eis, püriert und garniert mit Ananas und Kirsche', 'Weißer Rum, Cola, Limettensaft, Eiswürfel und Limettenscheiben'],
        price: [8.50, 8.90, 7.50]
    },
]