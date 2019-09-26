var username = prompt('welcome, what is your name?');


// print out user name in console
console.log(username);

console.log('Hi, ' + username + '!')
// print in html page
document.write('<p> Hi, ' + username +  '</p>')

var wantToByeChicken = prompt('Do you want to order?');

if(wantToByeChicken == 'yes'){
    document.write('<p> Thank you for being loyal customer.Please head over to front desk or go to Online Payment <a href ="Order.html">Order </p>');
    alert('Thank you for being loyal customer');
   
    

}
else{
    document.write('<p> Thank you for visiting us. </p>');
    
    confirm ("Are you sure you don't want to order?");
    alert ('Thank you for visiting us, see you again !');
}


function myFunction(){
    var txt = confirm('You are awesome');
}
