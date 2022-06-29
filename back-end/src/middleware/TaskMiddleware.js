const { taskSchema } = require('../schemas/TaskSchema');

const taskMiddleware = (req, res, next) => {
  console.log(req.body);
  const { error } = taskSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.message });
  }

  next();
};

module.exports = {
  taskMiddleware,
};
