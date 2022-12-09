require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser').json();
const userRouter = require('./api/v1/users/user.router');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/users', userRouter);

app.post('/api/v1/users', (req, res) => {
	res.json(req.body);
});

app.listen(process.env.APP_PORT, () => {
	console.log('server running with ', process.env.APP_PORT);
});
