document.getElementById('btn-withdraw').addEventListener('click',function(event){
    event.preventDefault();

const withdrawField= getInputFieldById('withdraw-field');
//console.log(withdrawField);

 const balance= getTextFieldById('withdraw-total');
 const newBalance= balance + withdrawField;
 document.getElementById('withdraw-total').innerText = newBalance;


 const totalBalance= getTextFieldById('balance-total');
 const AvailableBalance= totalBalance -withdrawField ;
 document.getElementById('balance-total').innerText = AvailableBalance;


//  const p=document.createElement('p');
//  p.innerText =`added:${withdrawField}`

const div=document.createElement('div');

div.innerHTML=`
<h4 class="text-2xl font-bold">Donate for Flood at Noakhali, Bangladesh </h4>
added: ${withdrawField} tk.New Balace ${newBalance}`
console.log(div);


document.getElementById('transaction-section-1').appendChild(div);
 







})

