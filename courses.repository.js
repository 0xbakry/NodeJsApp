import * as fs from 'fs/promises';
import path from 'path';
import { cwd } from 'process';
import { v4 as uuid } from 'uuid';
const coursesDataPath = path.join(cwd(), 'app', 'database', 'courses.json');

export const create = async (courseBody) => {
  const courses = await readCourses();
  courseBody.id = uuid();
  courses.push(courseBody);
  await fs.writeFile(coursesDataPath, JSON.stringify(courses));

  return courseBody;
};

export const find = async () => {
  const courses = await readCourses();
  return courses;
};

export const findOne = async (id) => {
  const courses = await readCourses();
  const courseFound = courses.find((course) => course.id == id);
  return courseFound;
};

export const findOneAndUpdate = async (id, updateData) => {
  const courses = await readCourses();

  const courseFound = courses.find((course) => course.id == id);

  const newCourse = { ...courseFound, ...updateData };

  const newCourses = courses.map((course) => {
    if (course.id == id) {
      return newCourse;
    }
    return course;
  });

  await fs.writeFile(coursesDataPath, JSON.stringify(newCourses));

  return newCourse;
};

export const findOneAndDelete = async (id) => {
  const courses = await readCourses();

  const courseIndex = courses.findIndex((course) => course.id == id);

  const deletedCourse = courses.splice(courseIndex, 1);

  await fs.writeFile(coursesDataPath, JSON.stringify(courses));

  return deletedCourse;
};

const readCourses = async () => {
  const coursesData = await fs.readFile(coursesDataPath, { encoding: 'utf8' });
  const parsedData = JSON.parse(coursesData);
  return parsedData;
};
