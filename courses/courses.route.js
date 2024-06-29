import express from 'express';
import {
  createCourse,
  deleteCourse,
  getCourse,
  getCourses,
  updateCourse,
} from './courses.controller.js';
import { authorize } from '../middlewares/authorize.middleware.js';
import { validate } from './courses.model.js';
import { StatusCodes } from 'http-status-codes';


const router = express.Router();

router.get('/', authorize, getCourses);

router.post(
  '/',
  (req, res, next) => {
    const { error } = validate(req.body);
    if (error) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: error.message });
    }
    next();
  },
  createCourse
);
router.get('/:id', getCourse);
// router.put('/:id', updateCourse);
router.patch('/:id', updateCourse);
router.delete('/:id', deleteCourse);

export default router;
