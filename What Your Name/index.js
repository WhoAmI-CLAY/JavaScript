const form = document.querySelector('form')
const myNameIs  = document.querySelector(".name-content h1")
const reloadbutton = document.querySelector('button')
const USERNAME_KEY = "userName"


function formContentActive() {
    $(form).css({"display":"block"})    
}

function formContentRemove() {
    $(form).css({"display":"none"})    
}

function nameContentActive() {
    $('.name-content').css({"display":"flex","align-items":"center"})
}

function nameContentRemove() {
    $('.name-content').css({"display":"none"})
}

if(localStorage.getItem(USERNAME_KEY) !== null) {
    formContentRemove();
    myNameIs.innerText = `안녕하세요 제 이름은 ${localStorage.getItem(USERNAME_KEY)}입니다.`   
    nameContentActive();
} else {
    //
}

function formEvent(event) {
    event.preventDefault();
    let input = document.querySelector('.userName');
    let userName = input.value;
    input.value = "";
    localStorage.setItem(USERNAME_KEY, userName)
    formContentRemove();
    myNameIs.innerText = `안녕하세요 제 이름은 ${localStorage.getItem(USERNAME_KEY)}입니다.`   
    nameContentActive();
}

function reloadEvent() {
    localStorage.removeItem(USERNAME_KEY);
    formContentActive();
    nameContentRemove();
}

form.addEventListener('submit', formEvent)
reloadbutton.addEventListener('click',reloadEvent )