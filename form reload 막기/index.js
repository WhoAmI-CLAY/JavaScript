// 자바스크립트 form태그 reload 막는다

//form 태그에서의 기본 event(reload)가 동작하지 않도록 막는다
$('form').submit(function(info) {
    info.preventDefault()
    //preventDefault -> 어떤 event의 기본 행동이 발생되지 않도록 막는다
    console.log($(".TEXT").val()) 
})