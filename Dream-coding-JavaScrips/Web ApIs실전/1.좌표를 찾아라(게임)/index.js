let width = document.querySelector('.line_width')
let height = document.querySelector('.line_height')
let target = document.querySelector('.target')
let tag = document.querySelector('.location')

let body = document.querySelector("html")

body.addEventListener("mousemove", function(){

    $(width).css({"top":event.clientY})
    $(height).css({'left':event.clientX})
    $(".target").css({'left':event.clientX, 'top':event.clientY})
    $(tag).css({'left':event.clientX, 'top':event.clientY})
    tag.innerHTML = `width : ${event.clientX}, height : ${event.clientY}`

})