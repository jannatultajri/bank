 document.getElementById('btn-withdraw-2').addEventListener('click',function(event){
     event.preventDefault();

 const withdrawField2= getInputFieldById('withdraw-field-2');
 //console.log(withdrawField);

  const balance2= getTextFieldById('withdraw-total-2');
  const newBalance2= balance2 + withdrawField2;
  document.getElementById('withdraw-total-2').innerText = newBalance2;


 const totalBalance= getTextFieldById('balance-total');
 const AvailableBalance= totalBalance -withdrawField2 ;
 document.getElementById('balance-total').innerText = AvailableBalance;


 const div2=document.createElement('div2');

 div2.innerHTML=`
 <h4 class="text-2xl font-bold">Aid for Injured in the Quota Movement </h4>
 added: ${withdrawField2} tk.New Balace ${newBalance2}`
 console.log(div2);
 
 
 document.getElementById('transaction-section-3').appendChild(div2);
 
 

 })
   