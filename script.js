let count = 0;
const counterBtn = document.getElementById('counterBtn');
const counterDisplay = document.getElementById('counterDisplay');

counterBtn.addEventListener('click', () => {
    count++;
    counterDisplay.textContent = `This button has been clicked ${count} times.`;
});
