
/*

https://codesandbox.io/s/day-three-blueprint-forked-pk9r2


✅ The text of the title should change when the mouse is on top of it.
마우스가 title위로 올라가면 텍스트가 변경되어야 합니다.

✅ The text of the title should change when the mouse is leaves it.
마우스가 title을 벗어나면 텍스트가 변경되어야 합니다.

✅ When the window is resized the title should change.
브라우저 창의 사이즈가 변하면 title이 바뀌어야 합니다.

✅ On right click the title should also change.
마우스를 우 클릭하면 title이 바뀌어야 합니다.

✅ The colors of the title should come from a color from the colors array.
title의 색상은 colors 배열에 있는 색을 사용해야 합니다.

✅ DO NOT CHANGE .css, or .html files.
.css 와 .html 파일은 수정하지 마세요.

✅ ALL function handlers should be INSIDE of "superEventHandler"
모든 함수 핸들러는 superEventHandler내부에 작성해야 합니다.

모든 조건이 충족되지 못하면 ❌를 받습니다.
*/
const superEventHandler = {
    handleMouseEnter: function() {
        title.innerText = "The mouse is here!";
        title.style.color = "blue";
    },
    handleMouseLeave: function() {
        title.innerText = "The mouse is gone!";
        title.style.color = "skyblue";
    },
    handleWindowResize: function() {
        title.innerText = "You just resized!";
        title.style.color = "purple";
    },
    handleMouseRightClick: function(event) {
        event.preventDefault();
        if (event.button === 2)   title.style.color = "tomato";
    }

};
const title = document.querySelector("h2");

title.addEventListener("mouseenter", superEventHandler.handleMouseEnter);
title.addEventListener("mouseleave", superEventHandler.handleMouseLeave);
window.addEventListener("resize", superEventHandler.handleWindowResize)
title.addEventListener("mousedown", superEventHandler.handleMouseRightClick)
document.addEventListener("mousedown", superEventHandler.handleMouseRightClick);

/*
https://developer.mozilla.org/ko/docs/Web/Events

https://developer.mozilla.org/ko/docs/Web/API/Window

https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseenter_event

https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseleave_event

https://developer.mozilla.org/en-US/docs/Web/API/Element/contextmenu_event

https://developer.mozilla.org/ko/docs/Web/API/Window/resize_event

 */

// 우 클릭
// title.addEventListener("contextmenu",);