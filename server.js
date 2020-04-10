const express = require('express');
const bodyParser = require('body-parser');
const app = express(); 
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extends: true}));

app.get('/api/hello', (req, res) => {
    res.send({message: "hello express!"});
});

app.listen(port, () => console.log(`listening on port ${port}`));
// 여기선 ', "이 아닌 `로 써야 함
