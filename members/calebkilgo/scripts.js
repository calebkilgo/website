function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const milliseconds = now.getMilliseconds().toString().padStart(3, '0');
    
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}.${milliseconds}`;
}

setInterval(updateClock, 1);
updateClock();

function updateBuildDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    
    document.getElementById('buildDate').textContent = `BUILD: ${year}.${month}.${day}`;
}

updateBuildDate();

function updateScrollProgress() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;
    document.getElementById('scrollProgressFill').style.width = scrollPercent + '%';
}

window.addEventListener('scroll', updateScrollProgress);
updateScrollProgress();
