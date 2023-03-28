var scrollBody=$('.fix_motion');
var scrollHeight; //스크롤의 높이
var sectionOffsetTop;
var sectionScrollTop;
var scrollRealHeight; //스크롤의 실제 움직이는 높이
var winScrollTop; //스크롤바의 높이
var scrollPercent; //스크롤 백분률 값
var percent;

function scrollFunc(){
    scrollHeight= scrollBody.height();
    sectionOffsetTop=scrollBody.offset().top;
    console.log(sectionOffsetTop)
    console.log("탑"+$(window).scrollTop())
    scrollRealHeight = scrollHeight-$(window).height();
    sectionScrollTop=$(window).scrollTop() - sectionOffsetTop;
    scrollPercent=sectionScrollTop/scrollRealHeight;
    console.log("일"+ scrollPercent)
    percent = scrollPercent * 100;

    contentIn();
}

function contentIn(){
    var deviceImg = $('.fix_motion .slide .child');
    var imgWidth = deviceImg.width(); //100vw
    console.log("%"+ percent);
    if(percent>=0 && percent <25){
        $('.fix_motion .slide .child1').addClass('active');
        slideChange(imgWidth * 0);
    }
    if(percent>=25 && percent <50){
        $('.fix_motion .slide .child2').addClass('active');
        slideChange(imgWidth * 1);
    }
    if(percent>=50 && percent <75){
        $('.fix_motion .slide .child3').addClass('active');
        slideChange(imgWidth * 2);
    }
    if(percent>=75){
        $('.fix_motion .slide .child4').addClass('active');
        slideChange(imgWidth * 3);
    }
    if(percent<0){
        $('.fix_motion .slide .child').removeClass('active');
    }
}
function slideChange(moveX){
    var slide=$('.fix_motion .slide');
    slide.css({transform:'translateX(' + -moveX + 'px)'})
}

scrollFunc();
$(window).scroll(function(){
    scrollFunc();
});