let target = document.querySelector('.target')
let button = document.querySelector('.find')

button.addEventListener("click", function(){
    let location = $(target).offset().top - (window.innerHeight / 2)
    target.scrollIntoView({behavior: "smooth", block : "center"})

    
})