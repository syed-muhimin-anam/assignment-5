// get inner text value
function getTextValue(id) {
    const catchTarget = document.getElementById(id).innerText;
    return parseFloat(catchTarget);
}
// get input value
function getValue(id) {
    const catchTarget = document.getElementById(id).value;
    return parseFloat(catchTarget);
}
// history card
function history(amountId, id, text) {
    const div = document.createElement('div');
    div.style.border = "1px solid gray"
    div.style.padding = "32px"
    div.style.borderRadius = "16px"
    div.style.marginTop = "20px"
    const date = new Date();
    div.innerHTML = `
            <h1 class="text-lg lg:text-xl font-bold">${getValue(amountId)} Taka is ${text}. </h1>
            <p class="text-textColor">Date: ${date} </p>
            `
    document.getElementById(id).appendChild(div);
}
// total donate sections function
function donate(amount, totalDonationAmount, titleId) {
    const inputValue = getValue(amount);
    const donateAmount = getTextValue(totalDonationAmount);
    const donateTitle = document.getElementById(titleId).innerText;
    const totalRequiredBalance = getTextValue('required-balance');
    if (inputValue < 1 || isNaN(inputValue) || inputValue > totalRequiredBalance){
        alert(`sorry you can't donate less than one tk or above required amount and you have to input the amount in numbers.`);
        return document.getElementById(amount).value = '';
    }
    else {
        const modal = document.getElementById('my_modal').showModal();
        const historySection = history(amount, 'history-section', donateTitle);
        return document.getElementById(totalDonationAmount).innerText = donateAmount + inputValue, document.getElementById('required-balance').innerText = totalRequiredBalance - inputValue, document.getElementById(amount).value = '', modal, historySection;
    }
}


