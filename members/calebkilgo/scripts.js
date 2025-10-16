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

function updateScrollProgress() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;
    document.getElementById('scrollProgress').style.height = scrollPercent + '%';
}

window.addEventListener('scroll', updateScrollProgress);
updateScrollProgress();

function updateBuildDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    
    document.getElementById('buildDate').textContent = `BUILD: ${year}.${month}.${day}`;
}

updateBuildDate();

function updateNetworkStats() {
    // Simulate ping (15-45ms)
    const ping = Math.floor(Math.random() * 30) + 15;
    document.getElementById('ping').textContent = ping;
    
    // Simulate latency (slightly higher than ping, 20-60ms)
    const latency = Math.floor(Math.random() * 40) + 20;
    document.getElementById('latency').textContent = latency;
    
    // Simulate packet count (incrementing)
    const currentPackets = parseInt(document.getElementById('packets').textContent) || 0;
    const newPackets = currentPackets + Math.floor(Math.random() * 5) + 1;
    document.getElementById('packets').textContent = newPackets;
}

// Update network stats every 2 seconds
setInterval(updateNetworkStats, 2000);
updateNetworkStats();
