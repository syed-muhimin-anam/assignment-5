// get inner text value
function getTextValue(id) {
    const catchTarget = document.getElementById(id).innerText;
    const catchTargetsNumber = parseFloat(catchTarget)
    return catchTargetsNumber;
}
// get input value
function getValue(id) {
    const catchTarget = document.getElementById(id).value;
    const catchTargetsNumber =parseFloat(catchTarget)
    return catchTargetsNumber;
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
        const displayDonateAmount = donateAmount + inputValue;
        const displayRequiredBalance = totalRequiredBalance - inputValue;
        return document.getElementById(totalDonationAmount).innerText = displayDonateAmount.toFixed(2) , document.getElementById('required-balance').innerText = displayRequiredBalance.toFixed(2), document.getElementById(amount).value = '', modal, historySection;
    }
}


