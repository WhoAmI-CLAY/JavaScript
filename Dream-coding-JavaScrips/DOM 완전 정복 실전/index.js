$(function(){
    $('footer button').click( () => {
        onAdd()
    })

    $('.footer_input').keydown(function(key){
        // console.log(key.keyCode) 아스키 코드 값을 알아낼 수 있다.
        if(key.keyCode == 13) onAdd()
   })

    onRemove = setInterval(function(){
        let trash = document.querySelectorAll('.remove');
        for(let i = 0; i < trash.length; i++){
            $(trash[i]).click( () => {
                $(trash[i]).closest('.item_row').remove()  //돔 요소를 삭제한다.
                //closest 인자 값으로 잡히는 상위 요소 중 가장 근접한 한개를 반환한다.
                //parents 인자 값으로 잡히는 모든 상위 요소를 반환한다.
            })
        }            
    },500)
})

function onAdd(){  //DOM요소 추가       
    let text = $('.footer_input').val()
    
    if(text.length == 0){ //텍스트를 입력했는지 확인한다.
        alert("텍스트를 한글자라도 입력바랍니다."); return;
    }

    // 이미 존재하는 쇼핑 목록인지 확인한다.
    let check = document.querySelectorAll(".value")
    for(let i = 0; i < check.length; i++){
        if($(check[i]).text() === text){
            alert("이미 존재하는 쇼핑 목록입니다.");
            $('.footer_input').val(""); $('.footer_input').focus(); return;
        }
    }

    $('.footer_input').val("")
    $('.footer_input').focus();
    let temp = `
    <li class="item_row">
    <div>
        <span class = "value">${text}</span>
        <button class= "remove"><i class="fas fa-trash-alt"></i></button>
    </div>
    <article class="line"></article>
    </li>
    `
    $(temp).appendTo('ul') //데이터를 맨 뒤에 추가한다.
}

