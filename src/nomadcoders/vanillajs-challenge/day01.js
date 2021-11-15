const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(evnet) {
    const li = evnet.target.parentElement;
    console.log(li.id);
    li.remove();
}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    const button = document.createElement("button");
    button.innerText ="X";
    button.addEventListener("click", deleteToDo);


    event.prevetDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text: newTodo,
        id: Date.now(),
    };

    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}


if(saveToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;

    parsedToDos.forEach(paintToDo);
}

