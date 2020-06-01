import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('listagem de usuarios');

    response.json([
        'carlos',
        'eduardo',
        'nicolas',
        'luis'
    ]);
});

app.listen(3333);