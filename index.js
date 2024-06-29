import express from 'express';
import coursesRoutes from './app/courses/courses.route.js';

const PORT = 3000;
const app = express();

app.use(express.json({}));

app.get('/', (req, res) => {
  res.send('courses api');
});

app.use('/courses', coursesRoutes);

//localhost:3000/courses/courses
app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
