import joi from 'joi';

const courseSchema = joi.object({
  name: joi.string().min(3).trim().required(),
  duration: joi.string().min(5).trim().required(),
});

export const validate = (courseBody) => {
  return courseSchema.validate(courseBody);
};
