const ToDoListForm = document.querySelector(".ToDoListForm")
const ToDoListinput = document.querySelector(".ToDoListForm input")
const ToDoList = document.querySelector(".ToDoList")

const TODOLIST_KEY = 'todos' 
let ToDos = [] //생성한 ToDolist를 저장

function saveToDos() {
    localStorage.setItem(TODOLIST_KEY, JSON.stringify(ToDos))
}

function removeToDoList(event){
    let li = event.target.parentElement;
    li.remove();

    // localStorage에 삭제한 데이터 반영 절차
    ToDos = []
    for(let i = 0; i < ToDoList.childElementCount; i++) {
        let value = $(ToDoList).find(`li:nth-child(${i + 1})`).find('span').text();
        ToDos.push(value)
    }
    saveToDos()
}

function paintToDo(newToDo) {   
    console.log(newToDo)
    let li = document.createElement('li')
    let span = document.createElement('span')
    let button = document.createElement("button")
    span.innerText = newToDo;
    button.innerText = "X";
    li.appendChild(span)
    li.appendChild(button)
    ToDoList.appendChild(li)
    button.addEventListener('click', removeToDoList)
}

function ToDoListFormEvent(event){
    event.preventDefault();
    const value = ToDoListinput.value
    ToDoListinput.value = "";
    if(value.length != 0) {
        paintToDo(value)
        ToDos.push(value)
        saveToDos();
    }
}

ToDoListForm.addEventListener("submit", ToDoListFormEvent)


// 라면 감자 고구마

if(localStorage.getItem(TODOLIST_KEY) !== null){
    let getToDoListItem = JSON.parse(localStorage.getItem(TODOLIST_KEY))
    ToDos = getToDoListItem;
    console.log(ToDos)
    for(let i = 0; i < getToDoListItem.length; i++){
        paintToDo(getToDoListItem[i])
    }
}
