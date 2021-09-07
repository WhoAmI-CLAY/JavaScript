
// 브라우저가 나의 정보 기억하게 만들기
// 새로고침해도 나의 이름을 기억하고 있게 만들어야 한다. (브라우저 작은 DB사용하기)

const USERNAME_KEY = "username"

let Loginform = $('form').submit(function(info){
    console.log("여기")
    info.preventDefault();
    let username = $(this).find(".read").val();
    localStorage.setItem(USERNAME_KEY, username)
    $('.tit').text(`반갑습니다 ${username} 회원님`)
    $('.tit').removeClass('hidden')
    $(this).addClass('hidden')
})

const saveUserName = localStorage.getItem(USERNAME_KEY)

if(saveUserName === null) {
    $('form').removeClass('hidden')
    Loginform()
} else {
    $('.tit').text(`반갑습니다 ${saveUserName} 회원님`)
    $('.tit').removeClass('hidden')
    $('form').addClass('hidden')
}
