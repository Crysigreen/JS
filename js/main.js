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