'use strict';
//Расчет серы
const ugol = document.getElementById("ugol");
const sera = document.getElementById("sera");
const so2_1 = document.getElementById("so2_1");
const so2_2 = document.getElementById("so2_2");
const display = document.getElementById('display');
const calcResult = document.getElementById('calcResult');

const calcsera = {
    ugol: 4270,
    sera: 0.19,
    so2_1: 0.2,
    so2_2: 0.0,
};

ugol.addEventListener("input", function (e) {
    calcsera.ugol = +e.currentTarget.value;
    recalc(calcsera)
});
sera.addEventListener("input", function (e) {
    calcsera.sera = +e.currentTarget.value;
    recalc(calcsera)
});
so2_1.addEventListener("input", function (e) {
    calcsera.so2_1 = +e.currentTarget.value;
    recalc(calcsera)
});
so2_2.addEventListener("input", function (e) {
    calcsera.so2_2 = +e.currentTarget.value;
    recalc(calcsera)
});
calcResult.addEventListener("click", function () {
    recalc(calcsera);
});

function recalc(globalObj) {
    let {ugol, sera, so2_1, so2_2} = globalObj;
    console.log(JSON.stringify(globalObj));

    display.textContent =  (0.02 * ugol * sera * (1-so2_1) * (1-so2_2)).toFixed(3);
}
// Расчет углерода
const ugol_2 = document.getElementById("ugol_2");
const Cco = document.getElementById("Cco");
const q4 = document.getElementById("q4");
const q3 = document.getElementById("q3");
const R = document.getElementById("R");
const Qri = document.getElementById("Qri");
const displayCarbon = document.getElementById('displayCarbon');
const calcResultCarbon = document.getElementById('calcResultCarbon');
const displayCarbon_2 = document.getElementById('displayCarbon_2');
const calcResultCarbon_2 = document.getElementById('calcResultCarbon_2');

const calcCarbon = {
    ugol_2: 4270,
    Cco: 17.6,
    q4: 3,
    q3: 1,
    R: 1,
    Qri: 17.6,
};

ugol_2.addEventListener("input", function (e) {
    calcCarbon.ugol_2 = +e.currentTarget.value;
    recalcCarbon(calcCarbon)
});
Cco.addEventListener("input", function (e) {
    calcCarbon.Cco = +e.currentTarget.value;
    recalcCarbon(calcCarbon)
});
q4.addEventListener("input", function (e) {
    calcCarbon.q4 = +e.currentTarget.value;
    recalcCarbon(calcCarbon)
});
q3.addEventListener("input", function (e) {
    calcCarbon.q3 = +e.currentTarget.value;
    recalcCarbon_2(calcCarbon)
});
R.addEventListener("input", function (e) {
    calcCarbon.R = +e.currentTarget.value;
    recalcCarbon_2(calcCarbon)
});
Qri.addEventListener("input", function (e) {
    calcCarbon.Qri = +e.currentTarget.value;
    recalcCarbon_2(calcCarbon)
});
calcResultCarbon.addEventListener("click", function () {
    recalcCarbon(calcCarbon);
});
calcResultCarbon_2.addEventListener("click", function () {
    recalcCarbon_2(calcCarbon);
});

function recalcCarbon(calcCarbon) {
    let {ugol_2, Cco, q4, q3, R, Qri} = calcCarbon;
    console.log(JSON.stringify(calcCarbon));

    displayCarbon.textContent =  (0.001 * ugol_2 * Cco * (1 - q4/100)).toFixed(3);
}

function recalcCarbon_2(calcCarbon) {
    let {ugol_2, Cco, q4, q3, R, Qri} = calcCarbon;
    console.log(JSON.stringify(calcCarbon));

    displayCarbon_2.textContent =  (q3 * R * Qri).toFixed(3);
}