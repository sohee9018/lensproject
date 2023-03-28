var player1;

function onYouTubeIframeAPIReady() {
    player1 = new YT.Player('player1', {
        videoId: 'CHp0Kaidr14',
        playerVars: {
            autoplay: true,
            loop: true,
            playlist: 'CHp0Kaidr14', //반복 재생 할 유튜브 영상 id를 다시 적음
            // loop:true(무한 루프)일 때 반복할 목록을 다시 한번 적어야한다.
        },
        events: {
            // 영상이 준비되면 함수가 실행됨
            'onReady': function (event) {
                event.target.mute(); //음소거, target은 영상 자체를 말함
            },
        }
    }); //YT.Player

var player2;
    player2 = new YT.Player('player2', { //html의 id와 동일
            videoId: 'DAEK5GrLb_Y',
            height: '800',
            width: '650',
            playerVars: {
            autoplay: true,
            loop: true,
            playlist: 'DAEK5GrLb_Y', //반복 재생 할 유튜브 영상 id를 다시 적음
            // loop:true(무한 루프)일 때 반복할 목록을 다시 한번 적어야한다.
        },
        events: {
            // 영상이 준비되면 함수가 실행됨
            'onReady': function (event) {
                event.target.mute(); //음소거, target은 영상 자체를 말함
            },
        }
    }); //YT.Player






} //function