let positionLeft = 0;


$(".pages > li > button").click(function(){
    $(this).addClass("active");
    let inx = $(this).parent().index();
    $(".gallery_list").css({
        transition : "all ease 0.5s",
        "margin-left" :inx * -300 + "px",
    });

    $(this).blur(function(){
        $(this).removeClass("active");
    })
    if(inx === 0){
        $(".btn_back").addClass("gray")
    }else{
        $(".btn_back").removeClass("gray")
    }
    if(inx === 4){
        $(".btn_next").addClass("gray")
    }else{
        $(".btn_next").removeClass("gray")
    }
})

$(".btn_next").click((e) => {
    if(positionLeft === 4){
        e.preventDefault();
    }else{
        positionLeft++;
    $(".gallery_list").css({
        transition : "all ease 0.5s",
        "margin-left" : positionLeft * -300 + "px",
    });
    }
})

$(".btn_back").click((e) => {
    if(positionLeft === 0){
        e.preventDefault();
    }else{
        positionLeft--;
    $(".gallery_list").css({
        transition : "all ease 0.5s",
        "margin-left" : positionLeft * -300 + "px",
    });
    }
})

//슬라이드 다음, 이전버튼(button태그) 만들기
//다음버튼 클릭시 -> 좌로 300px 이동 e.preventDefault(); 정지
//이전버튼 클릭시 -> 우로 300px 이동

//메뉴 -> jQuery로 만들기