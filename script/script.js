// variabili globali
let Name = document.getElementById('#first_lastname');
let km_number = document.querySelector('#distance_km'); 
let age = document.querySelector('#age');
let btnGenerator = document.querySelector('.btn-ticket');
let btnDelete = document.querySelector('.btn-delete');


btnGenerator.addEventListener('click' , function(){
    
    let Name = document.getElementById('#first_lastname');
    let km_number = document.querySelector('#distance_km'); 
    let age = document.querySelector('#age').value;
    
    // calcolo ticket
    let price = (km_number.value * 0.21);
    
    let discountYoung = price - (price * 20 / 100);
    let discountaged = price - (price * 40 / 100);
    
    let discount = discountYoung.toFixed(2)
    let Discount = discountaged.toFixed(2)
    
    
    if (age === under 18){
        discountYoung = price - (price * 20 / 100)
    } else if (age === over 65){
        discountaged = price - (price * 40 / 100)
    }else {
        price = (km_number * 0.21)
    }
}) 