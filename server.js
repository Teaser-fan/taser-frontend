const express = require('express');

const app = express();

app.use(express.static('./dist/Taser'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/Taser'}),
);

app.listen(process.env.PORT || 8080);
