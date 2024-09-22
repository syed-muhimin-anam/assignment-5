function getTextValue(id) {
    const catchTarget = document.getElementById(id).innerText;
    return parseFloat(catchTarget);
}

function getValue(id) {
    const catchTarget = document.getElementById(id).value;
    return parseFloat(catchTarget);
}

function donate(amount,totalDonationAmount) {
    const inputValue = getValue(amount);
    const donateAmount =  getTextValue(totalDonationAmount); 
    const totalRequiredBalance =  getTextValue('required-balance');
    
    if (inputValue < 1 || isNaN(inputValue)) {
             alert (`sorry sir you can't donate less than zero amount`);
            return document.getElementById(amount).value = '';
         }
        
         else{
            const modal = document.getElementById('my_modal').showModal();
            return document.getElementById(totalDonationAmount).innerText = donateAmount + inputValue, document.getElementById('required-balance').innerText = totalRequiredBalance - inputValue,  document.getElementById(amount).value = '', modal;
            }
}

