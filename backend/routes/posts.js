var express = require('express')
    , http = require('http')
    , path = require('path');
var router = express.Router();

var oracledb = require('oracledb');
var dbConfig = require('../dbConfig');



// Oracle Auto Commit 설정
oracledb.autoCommit = true;
/* GET users listing. */
router.get('/', function(requset, response) {
    oracledb.getConnection({
        user: dbConfig.user,
        password: dbConfig.password,
        connectString: dbConfig.connectString
    },
        function (err, connection) {
            if (err) {
                console.error(err.message);
                return;
            }
            let query =
                'select * ' +
                ' from BOARD_MAIN';
            connection.execute(query, [], function (err, result) {
                if (err) {
                    console.error(err.message);
                    doRelease(connection);
                    return;
                }
                console.log(result.rows); // 데이터
                doRelease(connection, result.rows); // Connection 해제
            });
        });
    // DB 연결 해제
    function doRelease(connection, rowList) {
        connection.release(function (err) {
            if (err) {
                console.error(err.message);
            }
            // DB종료까지 모두 완료되었을 시 응답 데이터 반환
            console.log('list size: ' + rowList.length);
            response.send(rowList);
            console.log('send 완료')
        });
    }
});

router.get('/postinfo', function(requset, response) {
    oracledb.getConnection({
        user: dbConfig.user,
        password: dbConfig.password,
        connectString: dbConfig.connectString
    },
        function (err, connection) {
            if (err) {
                console.error(err.message);
                return;
            }
            let query =
                'select * ' +
                ' from BOARD_MAIN where list_no=23';
            connection.execute(query, [], function (err, result) {
                if (err) {
                    console.error(err.message);
                    doRelease(connection);
                    return;
                }
                console.log(result.rows); // 데이터
                doRelease(connection, result.rows); // Connection 해제
            });
        });
    // DB 연결 해제
    function doRelease(connection, rowList) {
        connection.release(function (err) {
            if (err) {
                console.error(err.message);
            }
            // DB종료까지 모두 완료되었을 시 응답 데이터 반환
            console.log('list size: ' + rowList.length);
            response.send(rowList);
            console.log('send 완료')
        });
    }
});

// id 에 따라 상세 postinfo 표시
router.get('/:id', function(request, response) {
    oracledb.getConnection({
        user: dbConfig.user,
        password: dbConfig.password,
        connectString: dbConfig.connectString
    },
        function (err, connection) {
            var id = parseInt(request.params.id, 10);
            if (err) {
                console.error(err.message);
                return;
            }
            let query =
                'select * ' +
                ' from BOARD_MAIN where list_no='+ id;
            connection.execute(query, [], function (err, result) {
                if (err) {
                    console.error(err.message);
                    doRelease(connection);
                    return;
                }
                console.log(result.rows); // 데이터
                doRelease(connection, result.rows); // Connection 해제
            });
        });
    // DB 연결 해제
    function doRelease(connection, rowList) {
        connection.release(function (err) {
            if (err) {
                console.error(err.message);
            }
            // DB종료까지 모두 완료되었을 시 응답 데이터 반환
            response.send(rowList);
            console.log('postShow - send완료')
        });
    }
});

module.exports = router;
