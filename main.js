const container = document.getElementById('progressContainer');
const thumb = document.getElementById('progressThumb');
const bar = document.getElementById('progressBar');
const tooltip = document.getElementById('tooltip');

let isDragging = false;

container.addEventListener('click', (e) => {
    updateProgress(getPercentage(e));
});

thumb.addEventListener('mousedown', () => {
    isDragging = true;
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    updateProgress(getPercentage(e));
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});

function getPercentage(e) {
    const rect = container.getBoundingClientRect();
    let x = e.clientX - rect.left;
    if (x < 0) x = 0;
    if (x > rect.width) x = rect.width;
    return (x / rect.width) * 100;
}

function updateProgress(percentage) {
    percentage = Math.round(percentage);
    thumb.style.left = `${percentage}%`;
    bar.style.width = `${percentage}%`;
    tooltip.textContent = `${percentage}$`;
}

