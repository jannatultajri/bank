function getInputFieldById(Id){
    const inputValue = document.getElementById(Id).value;
const inputNumber =parseFloat(inputValue);
    return inputNumber;

}

function getTextFieldById(Id){
    const textValue=document.getElementById(Id).innerText;
    const textNumber=parseFloat(textValue);
    return textNumber;
}

function showSectionByIb(Id){
   
    document.getElementById('transaction-section').classList.add('hidden');
    document.getElementById('donate-section').classList.add('hidden');
   // document.getElementById('pop').classList.add('hidden');


    //show section by providing parameter

    document.getElementById(Id).classList.remove('hidden');
  

}
