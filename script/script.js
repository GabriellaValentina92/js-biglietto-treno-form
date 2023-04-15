// variabili globali
let btnGenerator = document.querySelector('.btn-ticket');
let btnReset = document.querySelector('.btn-reset');


btnGenerator.addEventListener('click' , function(){
    // const user_name = document.getElementById("#username").value;
    const km_number = document.getElementById("#distance_km").value; 
    const age = document.getElementById("#age").value;
    const Ticket = document.getElementById('#ticket');
    
    
    let price = km_number * 0.21;

    let discountYoung = price - (price * 20 / 100);
    let discountaged = price - (price * 40 / 100);


    if (age > 0 && age < 17){
        Ticket.innerHTML = discountYoung.toFixed(2);
    } else if (age >= 65){
        Ticket.innerHTML = discountaged.toFixed(2);
    }else {
        Ticket.innerHTML = price;
    }
}) 

btnReset.addEventListener('click' , function() {
    // user_name.value = '';
    km_number.value = '';
	age.value = '';
	Ticket.innerHTML = '';
})