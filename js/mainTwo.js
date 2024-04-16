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

let shop = ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'];
let inShop = ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
    
function Shop(shop, inShop){
    // for(let i = 0; i < shop.length; i++){
    //         if(i % 2 == 0){
    //         let currentElement = shop[i];
    //         console.log(currentElement + " -> " + shop[i + 1]);
    //         }
    // }

    for(let i = 0; i < shop.length; i++){
        if(i % 2 == 0){
            
            for(let j = 0; j < inShop.length; j++){
                if(j % 2 == 0){
                    if(shop[i] == inShop[j]){
                        let result = parseInt(shop[i + 1]) + parseInt(inShop[j + 1]);
                        delete inShop[j];
                        delete inShop[j + 1];
                        shop[i + 1] = result;
                        // console.log("Элемент их первого масссива " + shop[i] + " Элемент из второго массива " + inShop[j] + "результат " + result);
                    }
                }
            }
        }
    }

    let resultMass = [];

    for(let k = 0; k < shop.length; k++){
        resultMass.push(shop[k]);
    }

    for(let r = 0; r < inShop.length; r++){
        resultMass.push(inShop[r]);
    }

    resultMass = resultMass.filter(function (element ) {
        return element !== undefined;
    });

    for(let y = 0; y < resultMass.length; y += 2){
        let product = {
            name: resultMass[y],
            amount: resultMass[y + 1]
        }

        console.log(product.name + " -> " + product.amount);
    }
    
}



Shop(shop, inShop);

console.log("<==========================================>");
console.log("Лабороторная №5 Задание 4");

function storeMovies(commands) {
    const movies = [];

    function findMovieIndex(movieName) {
        return movies.findIndex(movie => movie.name === movieName);
    }

    function addMovie(movieName) {
        movies.push({ name: movieName });
    }

    function addDirector(movieName, director) {
        const index = findMovieIndex(movieName);
        if (index !== -1) {
            movies[index].director = director;
        }
    }

    function addDate(movieName, date) {
        const index = findMovieIndex(movieName);
        if (index !== -1) {
            movies[index].date = date;
        }
    }

    commands.forEach(command => {
        const [action, ...params] = command.split(' ');

        if (action === 'addMovie') {
            const movieName = params.join(' ');
            addMovie(movieName);
        } else {
            const movieName = action;
            const actionType = params[0];
            const info = params.slice(1).join(' ');

            if (actionType === 'directedBy') {
                addDirector(movieName, info);
            } else if (actionType === 'onDate') {
                addDate(movieName, info);
            }
        }
    });

    const completeMovies = movies.filter(movie => movie.name && movie.director && movie.date);
    console.log(JSON.stringify(completeMovies));
}

const input = [
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]

storeMovies(input);


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