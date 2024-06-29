import statusCodes from 'http-status-codes';
import {
  create,
  find,
  findOne,
  findOneAndDelete,
  findOneAndUpdate,
} from './courses.repository.js';

export const getCourses = async (req, res) => {
  const courses = await find();

  res.status(statusCodes.OK).json({ courses });
};

export const createCourse = async (req, res) => {
  const course = await create(req.body);
  res.status(statusCodes.CREATED).json({ course });
};

export const getCourse = async (req, res) => {
  const { id } = req.params;
  const course = await findOne(id);

  res.status(statusCodes.OK).json({ course });
};

export const updateCourse = async (req, res) => {
  const { id } = req.params;
  const updatedCourseData = await findOneAndUpdate(id, req.body);
  res.status(statusCodes.OK).json({ updatedCourseData });
};

export const deleteCourse = async (req, res) => {
  const { id } = req.params;
  const deletedCourse = await findOneAndDelete(id);
  res.status(statusCodes.OK).json({ deletedCourse });
};
