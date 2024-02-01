//모듈 밑에 하기!

//서버 만들기 기초

const http = require('http'); //모듈을 가져옴
const fs = require('fs');

//http안에 있는 creatServer 함수
const server = http.createServer(function (req, res) {
    // res.writeHead(200); //헤더에 200 코드를 보냄
    // res.write('<h1>Hello Nodejs</h1>'); //서버를 여는 순간 실행되는 코드
    // res.end('<p>End</p>');

    //파일 전송!
    try {
        //백엔드 서버를 만들때 여기다가 쓰는 코드는 정상적으로 작동할 때_백엔드 개발할때 굉장히 많이 씀
        const data = fs.readFileSync('./index.html');
        res.writeHead(200);
        res.end(data);
    } catch (error) {
        //여기는 오류일때
        console.log(error);
        res.writeHead(404);
        res.end(error.message);
    }
});

// server.on('request', function () {
//     console.log('요청 이벤트');
// });

// server.on('connection', function () {
//     console.log('접속 이벤트');
// });

//listen: 서버를 실행
server.listen(8000, function () {
    console.log('8000번 포트 실행');
});
