import app from './app';
import 'dotenv/config';

const PORT = process.env.API_PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});