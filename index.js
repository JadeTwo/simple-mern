import 'dotenv/config'

import express from 'express'
import path from 'path'
import routeTasks from './src/routes/tasks.js'

const app = express();
const __dirname = path.resolve()
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/tasks', routeTasks);

app.use(express.static(path.join(__dirname, 'client/dist')));

app.get('*all', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/dist/index.html'));
});

app.listen(port, () => console.log(`Listening on port: http://localhost:${port}`));