const express = require('express');
const fs = require('fs');

const themeFile = './api/theme.json';
const dataPath = './data/';
const app = express();

app.use(express.json());

app.get('/data/:dataSource', (req, res) => {
	const { params: { dataSource }} = req;
	const dataFile = `${dataPath}${dataSource}.json`;

	fs.readFile(dataFile, (err, buf) => {
		if (err) {
			res.status(404).send('Not Found');
		} else {
			res.send(buf.toString());
		}
	})
});

app.get('/api/getTheme', (req, res) => {
	fs.readFile(themeFile, (err, buf) => {
		if (err) throw err;

		res.send(buf.toString());
	});
});

app.post('/api/setTheme', (req, res) => {
	fs.writeFile(themeFile, JSON.stringify(req.body, null, 2), err => {
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
