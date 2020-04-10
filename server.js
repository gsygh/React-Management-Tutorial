const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extends: true }));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            id: 1,
            image: 'https://placeimg.com/64/64/1',
            name: '윤지석',
            birthday: '961011',
            gender: '남자',
            job: '대학생'
        },
        {
            id: 2,
            image: 'https://placeimg.com/64/64/2',
            name: '강현지',
            birthday: '971225',
            gender: '여자',
            job: '대학생'
        },
        {
            id: 3,
            image: 'https://placeimg.com/64/64/3',
            name: '홍길동',
            birthday: '961011',
            gender: '남자',
            job: '대학생'
        }
    ]);
});

app.listen(port, () => console.log(`listening on port ${port}`));
// 여기선 ', "이 아닌 `로 써야 함
