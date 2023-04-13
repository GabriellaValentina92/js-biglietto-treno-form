// variabili globali

let Name = document.getElementById('#first_lastname');
let km_number = document.querySelector('#distance_km'); 
let age = document.querySelector('#age');
let btnGenerator = document.querySelector('.btn-ticket');
let btnDelete = document.querySelector('.btn-delete');

// calcolo ticket
let price = (km_number * 0.21);

let discountYoung = price - (price * 20 / 100);
let discountaged = price - (price * 40 / 100);

let discount = discountYoung.toFixed(2)
let Discount = discountaged.toFixed(2)


if (age < 18){
    btnGenerator.innerHTML = discount;
} else if (age > 65){
    btnGenerator.innerHTML = Discount;
}else {
    btnGenerator.innerHTML = price;
}

// const btn = function (){
//     document.querySelector('.btn-ticket').addEventListener ('click' , ticket-price);
// }

// const Btn = function (){
//     document.querySelector('.btn-delete').addEventListener ('click' , reset);
// }