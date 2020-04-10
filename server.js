
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extends: true }));

var AWS = require("aws-sdk");

AWS.config.update({
    region: "us-east-1",
    //endpoint: "https://dynamodb.us-east-1.amazonaws.com"
    endpoint: "http://localhost:8000"
});

var dynamodb = new AWS.DynamoDB();
// 테이블 생성 시

var docClient = new AWS.DynamoDB.DocumentClient();


app.get('/api/customers', (req, res) => {

    var params = {
        TableName: 'Customer', // give it your table name 
        Key:{"id" : '1'}
    };

    docClient.get(params, function (err, data) {
        if (err) {
            console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            res.send("[" + JSON.stringify(data, null, 2) + "]");
            //res.send({data});
            //                  JSON.stringify : javascript의 값을 JSON문자열로 변환
            // res.send(
            //     [{
            //         id: 3,
            //         image: 'https://placeimg.com/64/64/3',
            //         name: '홍길동',
            //         birthday: '961011',
            //         gender: '남자',
            //         job: '대학생'
            //     }]
            // )   
        }

        
    });
    
    
});

app.listen(port, () => console.log(`listening on port ${port}`));
    // 여기선 ', "이 아닌 `로 써야 함

// var dynamoClient = new AWS.DynamoDB.DocumentClient();
//   var params = {
//     TableName: config.dynamoClient.tableName, // give it your table name 
//     Select: "ALL_ATTRIBUTES"
//   };

//   dynamoClient.scan(params, function(err, data) {
//     if (err) {
//        console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
//     } else {
//        console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
//     }
// });
// Select all