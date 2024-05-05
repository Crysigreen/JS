console.log("<==========================================>");
console.log("Лабороторная №5 Задание 2");

let mass = ['Moscow | 55.7522 | 37.6156', 'Beijing | 39.913818 | 116.363625'];

console.log(mass.length);


function labFiveTaskTwo(mass){
    for(let i = 0; i < mass.length; i++){
        const str = mass[i];
        let currentMass =  str.split(' | ');
        currentMass[1] = Number(currentMass[1]).toFixed(2);
        currentMass[2] = Number(currentMass[2]).toFixed(2);

        let Town = {
            town: currentMass[0], 
            latitude: currentMass[1],
            longitude: currentMass[2]

        }

        console.log(Town);
    }
}

labFiveTaskTwo(mass);


console.log("<==========================================>");
console.log("Лабороторная №5 Задание 3");

function updateInventory(currentStock, incomingStock) {
    // Создаем объект для хранения инвентаря
    let inventory = {};

    // Функция для добавления или обновления продукта в инвентаре
    function addToInventory(product, quantity) {
        if (inventory[product]) {
            inventory[product] += parseInt(quantity); // Увеличиваем количество, если продукт уже существует
        } else {
            inventory[product] = parseInt(quantity); // Добавляем новый продукт в инвентарь
        }
    }

    // Обрабатываем текущий запас магазина
    for (let i = 0; i < currentStock.length; i += 2) {
        let product = currentStock[i];
        let quantity = currentStock[i + 1];
        addToInventory(product, quantity);
    }

    // Обрабатываем поступление нового запаса
    for (let i = 0; i < incomingStock.length; i += 2) {
        let product = incomingStock[i];
        let quantity = incomingStock[i + 1];
        addToInventory(product, quantity);
    }

    // Возвращаем отсортированный объект инвентаря
    return inventory;
}

// Пример использования функции с заданными входными данными
let shop = ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'];
let inShop = ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']

// Получаем объект инвентаря
let inventory = updateInventory(shop, inShop);

console.log(inventory);

// Выводим объект инвентаря в нужном формате
for (let product in inventory) {
    console.log(`${product} -> ${inventory[product]}`);
}




// Shop(shop, inShop);

console.log("<==========================================>");
console.log("Лабороторная №5 Задание 4");
function processCommands(commands) {
    // Объект для хранения информации о фильмах
    let movies = {};

    // Функция для добавления фильма или обновления существующей информации
    function addOrUpdateMovie(movieName, director, date) {
        if (!movies[movieName]) {
            movies[movieName] = {};
        }
        if (director) {
            movies[movieName].director = director;
        }
        if (date) {
            movies[movieName].date = date;
        }
    }

    // Обрабатываем каждую команду
    for (let command of commands) {
        // Разбиваем команду на части
        let parts = command.split(' ');

        if (parts[0] === 'addMovie') {
            // Добавляем новый фильм
            let movieName = parts.slice(1).join(' ');
            addOrUpdateMovie(movieName);
        } else {
            // Обрабатываем команды с указанием режиссера или даты
            let movieIndex = parts.indexOf('directedBy');
            if (movieIndex !== -1) {
                let movieName = parts.slice(0, movieIndex).join(' ');
                let director = parts.slice(movieIndex + 1).join(' ');
                addOrUpdateMovie(movieName, director);
            } else {
                movieIndex = parts.indexOf('onDate');
                if (movieIndex !== -1) {
                    let movieName = parts.slice(0, movieIndex).join(' ');
                    let date = parts.slice(movieIndex + 1).join(' ');
                    addOrUpdateMovie(movieName, null, date);
                }
            }
        }
    }

    // Фильтруем фильмы и выводим информацию в формате JSON
    let result = [];
    for (let movieName in movies) {
        let movieInfo = movies[movieName];
        if (movieInfo.director && movieInfo.date) {
            result.push({
                name: movieName,
                director: movieInfo.director,
                date: movieInfo.date
            });
        }
    }

    
    console.log(result);
}

let commands = [
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
];


processCommands(commands);
console.log("<==========================================>");
function camelCaseFunc(str){

    let strMass = str.split(" ");
    for(let i = 1; i < strMass.length; i++){
        let currentMass = strMass[i].toLowerCase();
        
        const coversionOfFirstLetter = currentMass[0].toUpperCase() + currentMass.substring(1);
        strMass[i] = coversionOfFirstLetter;
    }

    let result = "";
    for(let j = 0; j <strMass.length; j++){
        result += strMass[j];
    }
    console.log(result);
}


camelCaseFunc("this is an example");

function pascalCase(str){
    let strMass = str.split(" ");


    for(let i = 0; i < strMass.length; i++){
        let currentMass = strMass[i].toLowerCase();
        
        const coversionOfFirstLetter = currentMass[0].toUpperCase() + currentMass.substring(1);
        strMass[i] = coversionOfFirstLetter;
    }

    let result = "";
    for(let j = 0; j <strMass.length; j++){
        result += strMass[j];
    }
    console.log(result);
}

pascalCase("secOND eXamPLE");