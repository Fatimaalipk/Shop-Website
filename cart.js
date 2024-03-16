
var product_total_amt  =document.getElementById('product_total_amt');
var Shipping_charge  = document.getElementById('Shipping_charge');
var total_cart_amt  = document.getElementById('total_cart_amt');
var discountcode = document.getElementById('discount_code1');

// decreseNumber
const decreseNumber = (incdec,itemprice) =>{
 var itemval = document.getElementById(incdec);
 var itemprice = document.getElementById(itemprice);

 if( itemval.value < 0 ){
     itemval.value = 0;
     alert('negative value not allowed');
     itemval.style.background = 'orange'
     itemval.style.color = '#fff';
 }else{
     itemval.value = parseInt(itemval.value) - 1;
     itemprice.innerHTML = parseInt(itemprice.innerHTML) - 15;
     product_total_amt.innerHTML = parseInt(product_total_amt.innerHTML) - 15;





     total_cart_amt.innerHTML = parseInt(product_total_amt.innerHTML) + parseInt
     (Shipping_charge.innerHTML);

     }
    }

    // increaseNumber
 const increaseNumber = (incdec,itemprice) =>{
 var itemval = document.getElementById(incdec);
 var itemprice = document.getElementById(itemprice);
 if( itemval.value > 5 ){
     itemval.value = 5;
     alert('max 5 allowed');
     itemval.style.background = 'red';
     itemval.style.color = '#fff';
 }else{
     itemval.value = parseInt(itemval.value) + 1;
     itemprice.innerHTML = parseInt(itemprice.innerHTML) + 15;
     product_total_amt.innerHTML = parseInt(product_total_amt.innerHTML) + 15;
     total_cart_amt.innerHTML = parseInt(product_total_amt.innerHTML) + parseInt(Shipping_charge.innerHTML);879
   console.log(total_cart_amt)

 }
 }


//  discount_code call

 const discount_code = () =>{
    let totalamtcurr = parseInt(total_cart_amt.innerHTML);
    let error_trw = document.getElementById('error_trw');
    if(discountcode.value == 'Fatima'){
        let newtotalamt = totalamtcurr - 15;
        total_cart_amt.innerHTML = newtotalamt;
        error_trw.innerHTML = "Hurray! code is valid";
    }else{
        error_trw.innerHTML = "Try Again! valid code is Fatima";

    }
 }

   
