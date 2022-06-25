const app = require('./app');
require('dotenv').config();

const PORT = process.env.API_PORT || 3001;

app.get('/', (_req, res) => res.send('Hello World!'));

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
