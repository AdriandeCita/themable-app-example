const express = require('express');
const fs = require('fs');

const themeFile = './api/theme.json';
const app = express();

app.use(express.json());

app.get('/api/getTheme', (req, res) => {
	fs.readFile(themeFile, (err, buf) => {
		if (err) throw err;

		res.send(buf.toString());
	});
});

app.post('/api/setTheme', (req, res) => {
	fs.writeFile(themeFile, JSON.stringify(req.body), err => {
		if (err) throw err;

		res.status(200).json({
			message: `OK`,
			content: req.body,
		});
	});
});

app.use('/assets', express.static('assets'));

app.listen(3012, () => {
	console.log('API server is listening on 3012 port');
});
