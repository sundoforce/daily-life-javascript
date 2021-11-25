const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
];
const button = document.querySelector("#press");
button.addEventListener("click", changeColor);

function changeColor(){

    let color1= colors[Math.floor(Math.random()*colors.length)];
    let color2= colors[Math.floor(Math.random()*colors.length)];
    console.log(color1,color2);
    filterDuplicates(color1,color2);

    // jS -> HTML 추가
    const bg = document.querySelector("body");
    bg.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
    // image를 body 내에 추가
    // document.body.appendChild(bg); // prepend도 가능


}

function filterDuplicates(color1,color2){
    if (color1 === color2){
        while(color1 !== color2){
            let color2 = colors[Math.floor(Math.random()*colors.length)];
            console.log(color1,color2);
        }

        return color1, color2
    }
    return

}