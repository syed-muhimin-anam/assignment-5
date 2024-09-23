// donate for noakhali
document.getElementById('doante-btn-noakhali').addEventListener('click', function () {
    donate('noakhali-amount', 'toal-donation-noakhali', 'noakhali-title');
});

// donate for feni
document.getElementById('donate-btn-feni').addEventListener('click', function () {
    donate('feni-amount', 'total-donation-feni', 'feni-title');

});

// donate for quota
document.getElementById('donate-btn-quota').addEventListener('click', function () {
    donate('quota-amount', 'total-donation-quota', 'quota-title');
});

// donate for orphans
document.getElementById('donate-btn-orphan').addEventListener('click', function () {
    donate('orphan-amount', 'total-donation-orphan', 'orphan-title');
});

// close modal
document.getElementById('closeBtn').addEventListener('click', function () {
    document.getElementById('my_modal').close();
});

// history button activated
document.getElementById('history-btn').addEventListener('click', function () {
    document.getElementById('history-btn').classList.add('bg-primary', 'border-none');
    document.getElementById('donation-btn').classList.remove('bg-primary', 'border-none');

    document.getElementById('history-section').classList.remove('hidden');
    document.getElementById('donate-section').classList.add('hidden');
});

// donate button activated
document.getElementById('donation-btn').addEventListener('click', function () {
    document.getElementById('donation-btn').classList.add('bg-primary', 'border-none');
    document.getElementById('history-btn').classList.remove('bg-primary', 'border-none');

    document.getElementById('donate-section').classList.remove('hidden');
    document.getElementById('history-section').classList.add('hidden');
});