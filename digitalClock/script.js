const but = document.getElementById("but");

function updateClock() {
    const now = new Date();
    let hr = now.getHours();
    const min = String(now.getMinutes()).padStart(2, '0');
    const sec = String(now.getSeconds()).padStart(2, '0');

    const ampm = hr >= 12 ? 'PM' : 'AM';
    hr = hr % 12 || 12;
    hr = String(hr).padStart(2, '0');

    document.getElementById("yay").innerText = `${hr}:${min}:${sec} ${ampm}`;
}

but.onclick = function() {
    setInterval(updateClock, 1000);
    updateClock();
};
