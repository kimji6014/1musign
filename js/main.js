$('.gnb li a').mouseenter(function(){
    var bar = $(this).position().left;
    //console.log(bar)
    var widNum=$(this).width();
    console.log(widNum)
    $('.bar').animate({
        'left':bar + 'px',
        'width':widNum + 'px',
        'opacity':1
    },300)
});

$('.gnb').mouseleave(function(){
    $('.bar').animate({
        'left':0,
        'width':0,
        'opacity':0
    },10)
});


$('.animate').scrolla({
    // default
    mobile: true,
    once: false,
});



/* menuOpen 열기 */

/* $('.menuOpen button.open').on('click',function(){}); */
$('.menuOpen button.open').click(function(){
    $('.menuOpen .menuWrap').addClass('on');
});

$('.menuWrap .close').click(function(){
    $('.menuOpen .menuWrap').removeClass('on');
});



//background color 변경
$(window).scroll(function(){
    //var scrollTop = $(document).scrollTop();
    var scrollTop = $(this).scrollTop();
    console.log(scrollTop)
    var offset=$('.service').offset().top - 400;
    if(scrollTop > offset){
        $('body').addClass('on')
    }else{
        $('body').removeClass('on')
    }
});