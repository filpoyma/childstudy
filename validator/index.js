const { body, validationResult } = require('express-validator')

const userValidationRules = () => {
  return [
    body('name', 'Короткое имя').isLength({min: 4}),
    // email must be an email
    body('email', 'Некорректный Email').normalizeEmail().isEmail(),
    // password must be at least 6 chars long
    body('password', 'Короткий пароль').isLength({ min: 6 }),
  ]
}

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty())
    return next();
  const extractedErrors = [];
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))
  return res.status(422).json({
    message: JSON.stringify(extractedErrors[0]),
  })
}

module.exports = {
  userValidationRules,
  validate,
}