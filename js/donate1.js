document.getElementById('btn-withdraw-1').addEventListener('click',function(event){
    event.preventDefault();

const withdrawField1= getInputFieldById('withdraw-field-1');
//console.log(withdrawField);

  const balance1= getTextFieldById('withdraw-total-1');
   const newBalance1= balance1 + withdrawField1;
  document.getElementById('withdraw-total-1').innerText = newBalance1;


   const totalBalance= getTextFieldById('balance-total');
 const AvailableBalance= totalBalance -withdrawField1 ;
   document.getElementById('balance-total').innerText = AvailableBalance;



   const div1=document.createElement('div1');

div1.innerHTML=`
<h4 class="text-2xl font-bold">Donate for Flood Relief in Feni,Bangladesh </h4>
added: ${withdrawField1} tk.New Balace ${newBalance1}`
console.log(div1);


document.getElementById('transaction-section-2').appendChild(div1);




 })