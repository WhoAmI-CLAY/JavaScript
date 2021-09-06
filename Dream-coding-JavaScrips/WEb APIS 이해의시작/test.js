let body = document.querySelector('html')

body.addEventListener('click', function(){
    let str = `클릭된 좌표는 width : ${event.clientX}, height : ${event.clientY}`
    document.querySelector('h1').innerHTML = str

})

window.addEventListener('resize', function(){
    let str = `현재 페이지의 사이즈 width : ${window.innerWidth}, height : ${window.innerHeight}`
    document.querySelector('h1').innerHTML = str
    
})