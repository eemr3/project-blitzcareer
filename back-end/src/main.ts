import 'dotenv/config';
import App from './app';

const port = process.env.PORT || 3001;

App.listen(port, () => {
  console.log(`Server runing at http://localhost:${port}`);
});
