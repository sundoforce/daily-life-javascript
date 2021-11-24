const timer = document.querySelector("h2");

// You're gonna need this
function getTime() {
    // Don't delete this.
    const date = new Date();
    const xmasDay = new Date("2021-12-24:00:00:00+0900");
    const gap = xmasDay - date;
    const day = Math.ceil(gap / (1000 * 60 * 60 * 24));
    const hour = Math.ceil((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const min = Math.ceil((gap % (1000 * 60 * 60)) / (1000 * 60));
    const sec = Math.ceil((gap % (1000 * 60)) / 1000);
    timer.innerText = `${day}d ${hour < 10 ? `0${hour}` : hour}h ${
        min < 10 ? `0${min}` : min
    }m ${sec < 10 ? `0${sec}` : sec}s`;
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}
init();
