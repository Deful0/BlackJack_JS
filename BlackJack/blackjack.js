// BlackJack
alert("Добро пожаловать в BlackJack \nНеобходимо набрать больше очков, чем диллер. \nНо не более 21!")
// инициализация переменных
let rand_cardD1 = 0;
let rand_cardD2 = 0;
let rand_cardD3 = 0;
let rand_cardD4 = 0;

let rand_cardP1 = 0;
let rand_cardP2 = 0;
let rand_cardP3 = 0;
let rand_cardP4 = 0;


let cartDiller1 = "";
let cartDiller2 = "";
let cartDiller3 = "";
let cartDiller4 = "";

let cardPlayer1 = "";
let cardPlayer2 = "";
let cardPlayer3 = "";
let cardPlayer4 = "";

let stavka = 10;
let fishki = 100;

let countB = 0;


function getRandom() {
    min = Math.ceil(1);
    max = Math.floor(52);

    return Math.floor(Math.random() * (max - min + 1) + min);
};

const coloda = {
    1: "6♧",
    2: "6♡",
    3: "6♤",
    4: "6♢",
    5: "7♧",
    6: "7♡",
    7: "7♤",
    8: "7♢",
    9: "8♧",
    10: "8♡",
    11: "8♤",
    12: "8♢",
    13: "9♧",
    14: "9♡",
    15: "9♤",
    16: "9♢",
    17: "10♧",
    18: "10♡",
    19: "10♤",
    20: "10♢",
    21: "J♧",
    22: "J♡",
    23: "J♤",
    24: "J♢",
    25: "D♧",
    26: "D♡",
    27: "D♤",
    28: "D♢",
    29: "K♧",
    30: "K♡",
    31: "K♤",
    32: "K♢",
    33: "T♧",
    34: "T♡",
    35: "T♤",
    36: "T♢",
    37: "2♧",
    38: "2♡",
    39: "2♤",
    40: "2♢",
    41: "3♧",
    42: "3♡",
    43: "3♤",
    44: "3♢",
    45: "4♧",
    46: "4♡",
    47: "4♤",
    48: "4♢",
    49: "5♧",
    50: "5♡",
    51: "5♤",
    52: "5♢",
};


function addStavka() {
    if (stavka < fishki){
        stavka += 10;
        document.getElementById("lableStavka").innerHTML = stavka;
    }
}

function minStavka() {
    if (stavka > 10){
        stavka -= 10;
        document.getElementById("lableStavka").innerHTML = stavka;
    }
}

// Кнопка начала игры
function startButton() {
    reset_game();

    stavka, fishki = getFiSt();
    fishki -= stavka;
    document.getElementById("fishki").innerHTML = fishki;

    rand_cardD1 = getRandom();
    cartDiller1 = coloda[rand_cardD1];

    document.getElementById("dillerCard1").innerHTML = "|" + cartDiller1 + "|";
    document.getElementById("dillerCard2").innerHTML = "|???|";

    document.getElementById("dillerCount").innerHTML = diller_score(rand_cardD1);


    rand_cardP1 = getRandom();
    cardPlayer1 = coloda[rand_cardP1];
    document.getElementById("playerCard1").innerHTML = "|" + cardPlayer1 + "|";

    rand_cardP2 = getRandom();
    cardPlayer2 = coloda[rand_cardP2];
    document.getElementById("playerCard2").innerHTML = "|" + cardPlayer2 + "|";

    document.getElementById("playerCount").innerHTML = player_score(rand_cardP1, rand_cardP2);
    if (document.getElementById("playerCount").innerHTML == 21) {
        alert("Вы победили! \nУ вас 21 очко.");

        stavka, fishki = getFiSt();
        fishki += stavka * 2;
        document.getElementById("fishki").innerHTML = fishki;
    }

};

// Добавляем карту игроку
function getCard() {
    countB++;
    
    if (countB == 1){
        rand_cardP3 = getRandom();
        cardPlayer3 = coloda[rand_cardP3];
        
        document.getElementById("playerCard3").innerHTML = "|" + cardPlayer3 + "|";
        document.getElementById("playerCount").innerHTML = Number(document.getElementById("playerCount").innerHTML) + diller_score(rand_cardP3);
        
        if (Number(document.getElementById("playerCount").innerHTML) > 21) {
            alert("Вы прогирали! \nПеребор.")
            stavka = 10;
            document.getElementById("lableStavka").innerHTML = stavka;
        }
    } if (countB == 2) {
        rand_cardP4 = getRandom();
        cardPlayer4 = coloda[rand_cardP4];

        document.getElementById("playerCard4").innerHTML = "|" + cardPlayer4 + "|";
        document.getElementById("playerCount").innerHTML = Number(document.getElementById("playerCount").innerHTML) + diller_score(rand_cardP4);
        
        if (Number(document.getElementById("playerCount").innerHTML) > 21) {
            alert("Вы прогирали! \nПеребор.")
            stavka = 10;
            document.getElementById("lableStavka").innerHTML = stavka;
        }
    }
    
}

// Добавляем карты диллеру
function stopCard() {
    rand_cardD2 = getRandom();
    cartDiller2 = coloda[rand_cardD2];
    document.getElementById("dillerCard2").innerHTML = "|" + cartDiller2 + "|";

    document.getElementById("dillerCount").innerHTML = player_score(rand_cardD1, rand_cardD2);

    scoreD = Number(document.getElementById("dillerCount").innerHTML);
    scoreP = Number(document.getElementById("playerCount").innerHTML);

    if (scoreD > scoreP) {
        alert("Вы проиграли! \nСчет диллера больше.")
        stavka = 10;
        document.getElementById("lableStavka").innerHTML = stavka;
    } else {
        rand_cardD3 = getRandom();
        cartDiller3 = coloda[rand_cardD3];
        document.getElementById("dillerCard3").innerHTML = "|" + cartDiller3 + "|";

        document.getElementById("dillerCount").innerHTML = diller_score(rand_cardD3) + Number(document.getElementById("dillerCount").innerHTML);

        scoreD = Number(document.getElementById("dillerCount").innerHTML);
        scoreP = Number(document.getElementById("playerCount").innerHTML);

        if (scoreD > scoreP && scoreD < 22) {
            alert("Вы проиграли! \nСчет диллера больше.")
            stavka = 10;
            document.getElementById("lableStavka").innerHTML = stavka;
        }
        else{
            alert("Вы победили!")

            stavka, fishki = getFiSt();
            fishki += stavka * 2;
            document.getElementById("fishki").innerHTML = fishki;
        }

    }
}

// Подсчет очков диллера для первой карты
function diller_score(key) {
    if (key >= 1 && key <= 4) {
        return 6;
    } else if (key >= 5 && key <= 8) {
        return 7;
    } else if (key >= 9 && key <= 12) {
        return 8;
    } else if (key >= 13 && key <= 16) {
        return 9;
    } else if (key >= 17 && key <= 32) {
        return 10; 
    } else if (key >= 33 && key <= 36) {
        return 11;
    } else if (key >= 37 && key <= 40) {
        return 2;
    } else if (key >= 41 && key <= 44) {
        return 3;
    } else if (key >= 45 && key <= 48) {
        return 4;
    } else if (key >= 49 && key <= 52) {
        return 5;
    } else {
        return -1;
    }
};

// Подсчет очков игрока для первых двух карт
function player_score(key1, key2) {
    let card_1 = 0;
    let card_2 = 0;
    let score = 0;

    if (key1 >= 1 && key1 <= 4) {
        card_1 = 6;
    } else if (key1 >= 5 && key1 <= 8) {
        card_1 = 7;
    } else if (key1 >= 9 && key1 <= 12) {
        card_1 = 8;
    } else if (key1 >= 13 && key1 <= 16) {
        card_1 = 9;
    } else if (key1 >= 17 && key1 <= 32) {
        card_1 = 10; 
    } else if (key1 >= 33 && key1 <= 36) {
        card_1 = 11;
    } else if (key1 >= 37 && key1 <= 40) {
        card_1 = 2;
    } else if (key1 >= 41 && key1 <= 44) {
        card_1 = 3;
    } else if (key1 >= 45 && key1 <= 48) {
        card_1 = 4;
    } else if (key1 >= 49 && key1 <= 52) {
        card_1 = 5;
    } else {
        card_1 = -1;
    }

    if (key2 >= 1 && key2 <= 4) {
        card_2 = 6;
    } else if (key2 >= 5 && key2 <= 8) {
        card_2 = 7;
    } else if (key2 >= 9 && key2 <= 12) {
        card_2 = 8;
    } else if (key2 >= 13 && key2 <= 16) {
        card_2 = 9;
    } else if (key2 >= 17 && key2 <= 32) {
        card_2 = 10; 
    } else if (key2 >= 33 && key2 <= 36) {
        card_2 = 11;
    } else if (key2 >= 37 && key2 <= 40) {
        card_2 = 2;
    } else if (key2 >= 41 && key2 <= 44) {
        card_2 = 3;
    } else if (key2 >= 45 && key2 <= 48) {
        card_2 = 4;
    } else if (key2 >= 49 && key2 <= 52) {
        card_2 = 5;
    } else {
        card_2 = -1;
    }

    score = card_1 + card_2;

    if (score == 22) {
        score = 12;
    } 

    return score;
};


function reset_game() {
    // Обнуляем карты диллера
    document.getElementById("dillerCard1").innerHTML = "|???|";
    document.getElementById("dillerCard2").innerHTML = "|???|";
    document.getElementById("dillerCard3").innerHTML = "";
    document.getElementById("dillerCard4").innerHTML = "";

    // Обнуляем карты игрока
    document.getElementById("playerCard1").innerHTML = "|???|";
    document.getElementById("playerCard2").innerHTML = "|???|";
    document.getElementById("playerCard3").innerHTML = "";
    document.getElementById("playerCard4").innerHTML = "";

    // Обнуляем счет игрока и диллера
    document.getElementById("dillerCount").innerHTML = 0;
    document.getElementById("playerCount").innerHTML = 0;

    // Int значение переменных
    document.getElementById("fishki").innerHTML = fishki;
    document.getElementById("lableStavka").innerHTML = stavka;
    countB = 0;
}

function getFiSt() {
    stavka = Number(document.getElementById("lableStavka").innerHTML);
    fishki = Number(document.getElementById("fishki").innerHTML);
    
    return stavka, fishki;
}