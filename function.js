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
            <h1 class="text-lg lg:text-xl font-bold">${getValue(amountId)} Taka is Donated for ${text} </h1>
            <p>Date: ${date} </p>
            `
    document.getElementById(id).appendChild(div);
}
// total donate sections function
function donate(amount, totalDonationAmount, text) {
    const inputValue = getValue(amount);
    const donateAmount = getTextValue(totalDonationAmount);
    const totalRequiredBalance = getTextValue('required-balance');
    if (inputValue < 1 || isNaN(inputValue)) {
        alert(`sorry sir you can't donate less than zero amount`);
        return document.getElementById(amount).value = '';
    }
    else {
        const modal = document.getElementById('my_modal').showModal();
        const historySection = history(amount, 'history-section', text);
        return document.getElementById(totalDonationAmount).innerText = donateAmount + inputValue, document.getElementById('required-balance').innerText = totalRequiredBalance - inputValue, document.getElementById(amount).value = '', modal, historySection;
    }
}


