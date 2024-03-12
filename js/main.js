//Lab one
console.log("<==========================================>");
console.log("Задание №1")
function Age(ages){
    if(ages <= 2){
        console.log("Возраст: Младенец" + " " +  ages);
    }else if(ages >= 3 && ages <= 12 )
    {
        console.log("Возраст: Ребенок" + " " +  ages);
    }else if(ages >= 14 && ages <= 19)
    {
        console.log("Возраст: Подросток" + " " +  ages);
    }else if(ages >= 20 && ages <= 65)
    {
        console.log("Возраст: Взрослый" + " " +  ages);
    }else if(ages >= 66)
    {
        console.log("Возраст: Пожилой" + " " +  ages);
    }
}

Age(20);
Age(1);
Age(100);

console.log("<==========================================>");
console.log("Задание №2")
function RoundingUp(num, accuracy){

    if( accuracy > 15){

        
        console.log(parseFloat(num).toFixed(15).replace(/0+$/, ""));
    }else if(accuracy <= 15){
        console.log(parseFloat(num).toFixed(accuracy).replace(/0+$/, ""));
    }

}

RoundingUp(3.1415926535897932384626433832795, 2);
RoundingUp(10.5,3);
console.log("<==========================================>");

console.log("Задание №3")

function Divider(num){

    let numbers = [2, 3, 6, 7, 10];
    var result;
    for(let i = 0; i < numbers.length; i++){
        if((num % numbers[i]) == 0){
            result = numbers[i];
        }
    }
    if(result == undefined){
        console.log("Не делится");
    }else{
        console.log("Число делится на " + result);
    }
    

}

Divider(30);
Divider(15);
Divider(12);
Divider(1643);

console.log("<==========================================>");

console.log("Задание №4")

function Holidays(person, type, day){

    if(type == "Students"){
        switch(day){
            case "Friday":
                var result;
                var prices = person * 8.45;
                if(person >= 30){
                    console.log("Total price: " + (result = prices - (prices * 0.15)).toFixed(2).replace(/0+$/, ""))
                }else{
                    console.log("Total price: " + prices.toFixed(2).replace(/0+$/, ""));
                }
                break;
            case "Saturday":
                var result;
                var prices = person * 9.80;
                if(person >= 30){
                    console.log("Total price: " + (result = prices - (prices * 0.15)).toFixed(2).replace(/0+$/, ""))
                }else{
                    console.log("Total price: " + prices.toFixed(2).replace(/0+$/, ""));
                }
                break;
                case "Sunday":
                    var result;
                    var prices = person * 10.46;
                    if(person >= 30){
                        console.log("Total price: " + (result = prices - (prices * 0.15)).toFixed(2).replace(/0+$/, ""))
                    }else{
                        console.log("Total price: " + prices.toFixed(2).replace(/0+$/, ""));
                    }
                    break;
        }
    }else if(type == "Corporate"){
        switch(day){
            case "Friday":
                var result;
                var prices = person * 10.90;
                if(person >= 100){
                    console.log("Total price: " + (result = prices - (10 * 10.90)).toFixed(2).replace(/0+$/, ""))
                }else{
                    console.log("Total price: " + prices.toFixed(2).replace(/0+$/, ""));
                }
                break;
            case "Saturday":
                var result;
                var prices = person * 15.60;
                if(person >= 100){
                    console.log("Total price: " + (result = prices - (10 * 15.60)).toFixed(2).replace(/0+$/, ""))
                }else{
                    console.log("Total price: " + prices.toFixed(2).replace(/0+$/, ""));
                }
                break;
                case "Sunday":
                    var result;
                    var prices = person * 16;
                    if(person >= 100){
                        console.log("Total price: " + (result = prices - (10 * 16)).toFixed(2).replace(/0+$/, ""))
                    }else{
                        console.log("Total price: " + prices.toFixed(2).replace(/0+$/, ""));
                    }
                    break;
        }
    }else if(type == "Regular"){
        switch(day){
            case "Friday":
                var result;
                var prices = person * 15;
                if(person >= 10 && person <= 20){
                    console.log("Total price: " + (result = prices - (person * 0.05)))
                }else{
                    console.log("Total price: " + prices.toFixed(2));
                }
                break;
            case "Saturday":
                var result;
                var prices = person * 20;
                if(person >= 10 && person <= 20){
                    console.log("Total price: " + (result = prices - (person * 0.05)).toFixed(2))
                }else{
                    console.log("Total price: " + prices.toFixed(2));
                }
                break;
                case "Sunday":
                    var result;
                    var prices = person * 22.50;
                    if(person >= 10 && person <= 20){
                        console.log("Total price: " + (result = prices - (person * 0.05)).toFixed(2))
                    }else{
                        console.log("Total price: " + prices.toFixed(2));
                    }
                break;
        } 
    }

}

Holidays(30, "Students", "Sunday");
Holidays(40,"Regular","Saturday");

console.log("<==========================================>");

console.log("Задание №5")

function Years(year){
    if((((year % 4) == 0)) || ((year % 400) == 0) && ((year % 100) > 0)){
        console.log( "Год: " + year + " " + "Високосный: " + "yes");
    }else{
        console.log("Год: " + year + " " + "Високосный: " + "no");
    }
}

Years(1984);
Years(2003);
Years(4);
Years(2024);
console.log("<==========================================>");
//Lab Two
console.log("Лабороторная №2 Задание 1");

function SumNumbers(num){
    let numStr = num.toString();
    var result = 0;
    for(let i = 0; i < numStr.length; i++){
        result += parseInt(numStr[i])
    }
    console.log(result);
}

SumNumbers(245678);
SumNumbers(97561);
SumNumbers(543);
console.log("<==========================================>");
console.log("Лабороторная №2 Задание 2");

function CharContact(charOne, charTwo, charThree){
    let chars = [charOne, charTwo, charThree];
    const str = chars.join("");
    console.log(str);
}

CharContact('a', 'b', 'c');
CharContact('%', '2', 'o');
CharContact('1', '5', 'p');

console.log("<==========================================>");
console.log("Лабороторная №2 Задание 3");


function TownInformation(nameTwon, population, area){
    return `Town ${nameTwon} has population of ${population} and area ${area} square km.`;
}
console.log(TownInformation('Moscow', 12636312, 2561));


console.log("<==========================================>");
console.log("Лабороторная №2 Задание 4");

function Calculater(numOne, tupeOperation, numTwo){
    switch(tupeOperation){
        case '+':
            console.log( "Результат: " + (numOne + numTwo).toFixed(2));
            break;
        case '-':
            console.log("Результат: " + (numOne - numTwo).toFixed(2));
            break;
    }
}

Calculater(5,'+',10);
Calculater(25.5, '-', 3);

console.log("<==========================================>");
console.log("Лабороторная №2 Задание 5");

function BinaryToDecimal(binary){
    var digit = parseInt(binary, 2);
    console.log(digit);
}


BinaryToDecimal("00001001");
BinaryToDecimal("11110000");
console.log("<==========================================>");
console.log("Лабороторная №3 Задание 1");

function Operation(arrayNum){
    var index = 0;
    var sumOne = 0;
    var sumTwo = 0
    let newMas = [];
    for(let j = 0; j < arrayNum.length; j++){
        sumOne = sumOne + arrayNum[j];
    }
   

    for(let i = 0; i < arrayNum.length; i++){
        
        if((arrayNum[i] % 2) == 0){
            newMas[i] = arrayNum[i] + index;
            console.log("Индекс: " + index);
            // console.log(arrayNum[i]);
            console.log(newMas[i]);
            index += 1;
        }else if(arrayNum[i] == 0){
            newMas[i] = arrayNum[i] - index;
            console.log("Индекс: " + index);
            // console.log(arrayNum[i]);
            console.log(newMas[i]);
            index += 1;
        }else if(((arrayNum[i] % 2) > 0) || arrayNum[i] % 2 < 0){
            newMas[i] = arrayNum[i] - index;
            console.log("Индекс: " + index);
            // console.log(arrayNum[i]);
            console.log(newMas[i]);
            index += 1;
        }

        
        
    }

    for(let a = 0; a < newMas.length; a++){
        sumTwo = sumTwo + newMas[a];
    }
    console.log(`Сумма чисел в изначальном массиве:  ${sumOne}`);
    console.log(`Сумма чисел в массиве после изменений:  ${sumTwo}`);
}


Operation([5, 15, 23, 56, 35]);
Operation([-5, 11, 3, 0, 2]);

console.log("<==========================================>");
console.log("Лабороторная №3 Задание 2");

function CommonElements(arrayOne, arrayTwo){

    var dyblicate;
    console.log("Дубликаты: ");
    for(let i = 0; i < arrayOne.length; i++){
        for(let j = 0;  j < arrayTwo.length; j++){
            if(arrayOne[i] === arrayTwo[j]){
                console.log(arrayOne[i])
            }
        }
    }

}




CommonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']);
CommonElements(['R', 'u', 's', 's', 'i', 'a'], ['R', 'u', 't']);

console.log("<==========================================>");
console.log("Лабороторная №3 Задание 3");


function Rotate(array, d){
    var temp = new Array(array.length);
    d = d % array.length;
    let k = 0;


    for(let i = d; i < array.length; i++){
        temp[k] = array[i];
        k++;
    }

    for (let i = 0; i < d; i++) {
        temp[k] = array[i];
        k++;
    }
    console.log("Результат");
    for (let i = 0; i < array.length; i++) {
        console.log(temp[i]+" ");
    }
}

Rotate([51, 47, 32, 61, 21], 2);
Rotate([32, 21, 61, 1], 4);
Rotate([2, 4, 15, 31], 5);

console.log("<==========================================>");
console.log("Лабороторная №3 Задание 4");




let DoubleArrays = [[4, 5, 6], [6, 5, 4], [5, 5, 5],];
let testTwo = [[11, 32, 45], [21, 0, 1], [21, 1, 1]];
let testThree = [[1, 0, 0], [0, 0, 1], [0, 1, 0]];

//<------------------------------>

let sumOne_1 = 0;
let sumTwo_1 = 0;

let yesOne = 0;
let noOne = 0;
for(let i = 0; i < DoubleArrays.length; i++){
    let test = DoubleArrays[i].length;    
    for(let j = 0; j < test; j++){
        sumOne_1 += DoubleArrays[i][j];
        sumTwo_1 += DoubleArrays[j][i];
        if((sumOne_1) == (sumTwo_1)){
            yesOne = yesOne + 1;
        }else{
            noOne = noOne + 1;
        }
    } 
}

if(yesOne > noOne){
    console.log(true);
}else if (yesOne < noOne){
    console.log(false);
}

//<------------------------------>

let sumOne_2 = 0;
let sumTwo_2 = 0;
let yesTwo = 0;
let noTwo = 0;
for(let i = 0; i < testTwo.length; i++){

    let test = testTwo[i].length;
    for(let j = 0; j < test; j++){
        sumOne_2 += testTwo[i][j];
        sumTwo_2 += testTwo[j][i];
        if((sumOne_2) == (sumTwo_2)){
            yesTwo = yesTwo + 1;
        }else{
            noTwo = noTwo + 1;
        }
    } 

    
}

if(yesTwo > noTwo){
    console.log(true);
}else if (yesTwo < noTwo){
    console.log(false);
}

//<------------------------------>

let sumOne_3 = 0;
let sumTwo_3 = 0;
let yesThre = 0;
let noThre = 0;
for(let i = 0; i < testThree.length; i++){
    let test = testThree[i].length;    
    for(let j = 0; j < test; j++){
        sumOne_3 += testThree[i][j];
        sumTwo_3 += testThree[j][i];
        if((sumOne_3) == (sumTwo_3)){
            yesThre = yesThre + 1;
        }else{
            noThre = noThre + 1;
        }
    } 

}

if(yesThre > noThre){
    console.log(true);
}else if (yesThre < noThre){
    console.log(false);
}

console.log("<==========================================>");
console.log("Лабороторная №4 Задание 1");

function SmallestThreeNumbers(numOne, numTwo, numThree){
    if((numOne < numTwo) && (numOne < numThree)){
        console.log(numOne);
    }else if((numTwo < numOne) && (numTwo < numThree)){
        console.log(numTwo);
    }else{
        console.log(numThree);
    }
}


SmallestThreeNumbers(2, 5, 3);
SmallestThreeNumbers(600, 342, 123);
SmallestThreeNumbers(25, 21, 4);

console.log("<==========================================>");
console.log("Лабороторная №4 Задание 2");

function SumAndDifference(one, two, three){
    console.log((one + two) - three);
}


SumAndDifference(23, 6, 10);
SumAndDifference(1, 17, 30);
SumAndDifference(42, 58, 100);

console.log("<==========================================>");
console.log("Лабороторная №4 Задание 3");

function MatrixNxN(n){
    console.log(`Матрица размером: ${n}`);
    let matrix = [];
    for(let i = 0; i < n; i++){
        matrix[i] = n;
        for(let j = 0; j < n; j++){
            matrix[i][j] = n;
            
        }
    }

    for(let i = 0; i < matrix.length; i++){
        console.log(matrix)
    }
}

MatrixNxN(3);
MatrixNxN(7);
MatrixNxN(2);

console.log("<==========================================>");
console.log("Лабороторная №4 Задание 4");

function ProgressBar(num){
    let test = num / 10;
    let point = 10 - test;
    let result = [];
    // console.log(test);
    // console.log(point);
    for(let i = 0; i < 10; i++){
        if( i < test){
            result[i] = "%";
        }else{
            result[i] = ".";
        }
        
    }
    if(num < 100){
        console.log(`${num}%` + " " + "[" + result.join("") + "]");
        console.log("Still loading...");
    }else if( num == 100){
        console.log(`${num}%` + " Complete!");
        console.log("[" + result.join("") + "]");
    }
    
    
    
}

ProgressBar(30);
ProgressBar(50);
ProgressBar(100);



console.log("<==========================================>");
console.log("Лабороторная №5 Задание 1");



function Teams(Names){

    let countTest = 0;
    let nameCount = 0;
    console.log(Names);
for(let i = 0; i < Names.length; i++){
    nameCount += 1;
    
    
    countTest = 0;
    for(let j = 0; j < Names[i].length; j++){
        countTest += 1;
    }

    const Person = Object.create(
        {},
        {
            name:{
             value: Names[i],
             enumerable: true
            },
            number:{
                value: countTest,
                enumerable: true
            }

        }
    );
    
    // console.log(Names[i]);
    // console.log(nameCount);
    // console.log(countTest); 

    console.log(`Name: ${Person.name} - Personal Number: ${Person.number}`);
}


   
}



let mass = ['Silas Butler','Adnaan Buckley','Juan Peterson','Brendan Villarreal'];



Teams(mass);

console.log("<==========================================>");
console.log("Лабороторная №5 Задание 2");
