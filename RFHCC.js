/**
*   @author Thompson, Charles (Coti5432@gmail.com)
*   @version 0.0.1
*   @summary Find total salary
*   @todo
*/

"use strict";
const PROMPT = require('readline-sync');

const BASE_PRICE = 50000, BEDROOM = 17000, BATHROOM = 12500, CAR = 6000;
let numLot, numBed, numBath, numCar, total;

function main(){
    setLot();
    setBed();
    setBath();
    setCar();
    math();
    printResult();
}

main();

function setLot() {
    numLot = Number(PROMPT.question(`\nPlease enter the lot number: `));
}

function setBed() {
    numBed = Number(PROMPT.question(`\nPlease enter the number of bedrooms: `));
}

function setBath() {
    numBath = Number(PROMPT.question(`\nPlease enter the number of bathrooms: `));
}

function setCar() {
    numCar = Number(PROMPT.question(`\nPlease enter the amount of cars in the garage: `));
}

function math(){
    total = (numBed * BEDROOM) + (numBath * BATHROOM) + (numCar * CAR) + BASE_PRICE;
}

function printResult(){
    console.log("\nLot number " + numLot + " will be a total of $" + total);
}