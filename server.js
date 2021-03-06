const express = require('express');

const app = express();

app.use(express.static('./Taser'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'Taser'}),
);

app.listen(process.env.PORT || 8080);
