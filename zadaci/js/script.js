// Zadatak 1
//Data su dva niza. U oba niza nalaze se nazivi odredjenih vocaka. Potrebno je formirati treci niz koji ce da sadrzi sve elemente prvog i drugog niza.
var vocke1 = ["banana", "kruska", "jabuka"];
var vocke2 = ["tresnja", "sljiva", "jagoda"];

var vocke_sve = [];
for (var i in vocke1) {
    vocke_sve.push(vocke1[i]);
}

for (var i in vocke2) {
    vocke_sve.push(vocke2[i]);
}


// Zadatak 2

//Data su dva niza i oba niza nalaze se nazivi odredjenih vocaka, medjutim moze se desiti da jedna vocka postoji i u prvom i u drugom nizu. 
//Potrebno je formirati treci niz, koji ce imati samo jedinstvene vocke.

var vocke1 = ["banana", "kruska", "jabuka", "sljiva"];
var vocke2 = ["tresnja", "sljiva", "jagoda", "kupina", "malina"];
var vocke_sve = [];
for (var i in vocke1) {
    vocke_sve.push(vocke1[i]);
}

for (var i in vocke2) {
    if (!vocke_sve.includes(vocke2[i])) {
        vocke_sve.push(vocke2[i]);
    }
}



// Zadatak 3
//Dat je niz koji sadrzi automobile. Automobili mogu u zavisnosti od vrste motora, da budu na dizel ili benzin. Formirati dva niza, jedan koji ce 
//da sadrzi automobile na dizel i drugi na benzin. Uociti u zadatom nizu, kako je moguce odrediti da li je auto na dizel ili na benzin.

var automobili = [ ["mercedes", "b"], ["opel", "d"], ["toyota", "d"], ["bmw", "b"], ["volvo", "d"]];

var benzin = [];
var dizel = [];

for (var index in automobili) {
    if (automobili[index][1] == "d") {
        dizel.push(automobili[index][0]);
    } else {
        benzin.push(automobili[index][0]);
    }
}

var zaposleni = [
  ["pera", "jova", "marko"],
  [28,      31,     19]
];


var j = 0;
var i = 0;

// Zadatak 4
// Za zadatu matricu ispisati svakog zaposlenog i koliko svaki zaposleni ima godina
for (var j = 0; j < 3; j++) {
    console.log("Zaposleni: " + zaposleni[0][j] + ", ima godina: " + zaposleni[1][j]);
}


//Drugi nacin
for (var j = 0; j < zaposleni[0].length; j++) {
    console.log("Zaposleni: " + zaposleni[0][j] + ", ima godina: " + zaposleni[1][j]);
}


// Zadatak 5
// Za zadatu matricu naci koliko jova ima godina
for (var i = 0; i < 2; i++) {
    for (var j = 0; j < 3; j++) {
        if (zaposleni[i][j] == "jova") {
            console.log("Jova ima " + zaposleni[i+1][j] + ", godina");
        }
    }
}


// Zadatak 6
// Za zadatu matricu naci srednju vrednost godina
var ukupno = 0;
for (var i = 0; i < 2; i++) {
    for (var j = 0; j < 3; j++) {
        if (i == 1) {
            // Kako bi ovo uradili drugacije?
            ukupno += zaposleni[i][j];
        }
    }
}

console.log("Srednja vrednost godina zaposlenih je " + (ukupno / 3) + ", godina");


var zaposleni = [
  ["pera",      "jova",     "marko"],
  [28,          31,         39],
  ["inzenjer",  "tehnicar", "doktor"],
  [700,         0,        0]
];


// Zadatak 7
// Za zadate zaposlene izracunati i podesiti plate ostalih zaposlenih tako da:
// tehnicar ima 70% plate inzenjera
// a doktor ima platu tehnicara + pola plate inzenjera
// nakon toga proci kroz zaposlene i ispisati sve zaposlene, njihove radne pozicije i njihove plate

var plata_tehnicar = -1;
var plata_doktor = -1;
var plata_inzenjer = -1;

for (var i = 0; i < zaposleni.length; i++) {
    for (var j = 0; j < zaposleni[i].length; j++) {
        // console.log(zaposleni[i][j]);
        if (zaposleni[i][j] == "inzenjer") {
            plata_inzenjer = zaposleni[i+1][j];
            plata_tehnicar = plata_inzenjer * 0.7;
            plata_doktor = plata_tehnicar + (plata_inzenjer * 0.5);
        }
    }
}


for (var i = 0; i < zaposleni.length; i++) {
    for (var j = 0; j < zaposleni[i].length; j++) {
        // console.log(zaposleni[i][j]);
        if (zaposleni[i][j] == "tehnicar") {
            zaposleni[i+1][j] = plata_tehnicar;
        }
        if (zaposleni[i][j] == "doktor") {
            zaposleni[i+1][j] = plata_doktor;
        }
    }
}


for (var i = 0; i < zaposleni[0].length; i++) {
        console.log(zaposleni[0][i] + " je " + zaposleni[2][i] + " i ima platu od " + zaposleni[3][i]);   
}



var zaposleni = [
  ["pera",      "jova",     "marko"],
  [28,          31,         39],
  ["inzenjer",  "tehnicar", "doktor"],
  [700,         0,        0]
];

// Zadatak 8
var d = new Date();
console.log("Godina je " + d.getFullYear());

var godista = [];
for (var i = 0; i < zaposleni[1].length; i++) {
    var g = zaposleni[1][i];
    godista.push(d.getFullYear() - g);
}

console.log(godista);

zaposleni.push(godista);
console.log(zaposleni);