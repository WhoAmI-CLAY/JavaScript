let clock = document.querySelector('.clock');


function getClock() {
    const date = new Date();

    //padStart�� �⺻ ������ ����
    //padStart ��� ���� : 10:12:1, 1�� �տ� 0�� �ٿ��� ������ �� �ڸ��� ������ �ϱ� ���ؼ�(��,�е� ��������)
    let hours = String(date.getHours()).padStart(2, "0")
    let minus = String(date.getMinutes()).padStart(2, "0")
    let seconds = String(date.getSeconds()).padStart(2, "0")
    clock.innerText = `${hours}:${minus}:${seconds}` 
}

getClock()  //���⼭ ���� �Լ��� ȣ���ؾ� 00:00:00���� �� ������ �ٷ� �ð��� �ݿ��Ѵ�.
setInterval(getClock, 1000)


// setInterval�̶� Ư�� �Լ��� ms �������� ��� �����Ѵ�.
// setInterval�� �� ���� ���ڸ� �޴´� 
// setInterval(function , ms)
// setInterval(sayHello, 5000)

// setTimeout�̶� ms�� �� Ư�� �Լ��� �����Ѵ�.
// setTimeout�� �� ���� ���ڸ� �޴´�.
// setTimeout(function , ms)
//setTimeout(sayHello, 5000)