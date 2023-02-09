import app from './config/app';

const port = process.env.PORT || 3001;

app.get('/', (req, res) => res.send('Inicio de uma jornada :)'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
