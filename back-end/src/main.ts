import 'dotenv/config';
import App from './app';

const port = 3000;

App.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
