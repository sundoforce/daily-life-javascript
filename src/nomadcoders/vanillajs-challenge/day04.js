

const body = document.querySelector("body");
let windowSize;
const superEventHandler = {
    handleWindowResize: function() {
        windowSize = window.innerWidth;
        console.log(windowSize);
        if(windowSize > 1000) {
            body.style.background = "red";
        } else if(windowSize >= 900) {
             body.style.background = "orange";
        } else if(windowSize >= 800) {
             body.style.background = "yellow";
        }else if(windowSize >= 700) {
             body.style.background = "green";
        }else if(windowSize >= 600) {
             body.style.background = "blue";
        }else if(windowSize >= 500) {
             body.style.background = "Indigo";
        }else if(windowSize >= 400) {
             body.style.background = "purple";
        }else if(windowSize >= 300) {
             body.style.background = "skyblue";
        }else if(windowSize >= 200) {
             body.style.background = "black";
        }else if(windowSize >= 100) {
             body.style.background = "white";
        }else if(windowSize >= 0) {
             body.style.background = "tomato";
        }
    },
};

window.addEventListener("resize", superEventHandler.handleWindowResize)
