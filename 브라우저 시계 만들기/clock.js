let clock = document.querySelector('.clock');


function getClock() {
    const date = new Date();

    //padStart는 기본 문법에 저장
    //padStart 사용 이유 : 10:12:1, 1초 앞에 0을 붙여서 무조건 두 자리로 나오게 하기 위해서(시,분도 마찬가지)
    let hours = String(date.getHours()).padStart(2, "0")
    let minus = String(date.getMinutes()).padStart(2, "0")
    let seconds = String(date.getSeconds()).padStart(2, "0")
    clock.innerText = `${hours}:${minus}:${seconds}` 
}

getClock()  //여기서 먼저 함수를 호출해야 00:00:00으로 안 나오고 바로 시간을 반영한다.
setInterval(getClock, 1000)


// setInterval이란 특정 함수를 ms 간격으로 계속 실행한다.
// setInterval은 두 개의 인자를 받는다 
// setInterval(function , ms)
// setInterval(sayHello, 5000)

// setTimeout이란 ms뒤 이 특정 함수를 실행한다.
// setTimeout은 두 개의 인자를 받는다.
// setTimeout(function , ms)
//setTimeout(sayHello, 5000)