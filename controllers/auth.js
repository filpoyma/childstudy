const User = require('../models/users');
const {errorHandler} = require('../helpers/dbErrorHandler')
const jwt = require('jsonwebtoken'); // generate token
const expressJwt = require('express-jwt'); // autorization check
const rateLimit = require("express-rate-limit")

exports.createAccountLimiter = rateLimit({
  windowMs: 60 * 60 * 500, // 0.5 hour window
  max: 30, // start blocking after 25 requests
  message:
    "Too many accounts created from this IP, please try again after an half hour"
});

exports.signup = (req, res) => {
  console.log('boooody', req.body);
  const user = new User(req.body);
  const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET);
  user.save((error, user) => {
    if (error) {
      return res.status(400).json({
        status: false,
        message: errorHandler(error)
      })
    }
    //setCookies({res, user});
    user.salt = undefined;
    user.hashed_password = undefined;
    res.json({status: 'ok', message: "Пользователь создан", user, token});
  })
}

exports.signin = (req, res) => {
  // based on email address
  const {email, password} = req.body
  User.findOne({email}, (error, user) => {
    if (error || !user) {
      return res.status(400).json({
        status: false,
        message: 'Пользователь не найден'
      })
    }
    if (!user.authenticate(password)) {
      return res.status(401).json({
        status: false,
        message: "Неправильный пароль"
      })
    }
    const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET);
    //setCookies({res, user});
    user.salt = undefined;
    user.hashed_password = undefined;
    res.json({status: 'ok', message: "Успешный вход", user, token})

    // const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET);
    // res.cookie('t', token, {
    //   expire: new Date() + 9999,
    //   httpOnly: false
    // });
    // res.cookie('id', user.id, {
    //   expire: new Date() + 9999,
    //   httpOnly: false
    // });
    // const {_id, name, email, role} = user;
    // res.json({status: 'ok', token, user: {_id, name, email, role}})
  })
}

exports.signout = (req, res) => {
  // res.clearCookie('t');
  // res.clearCookie('id');
  res.json({
    status: 'ok',
    message: 'hombrecillo.'
  })
};
try {
  exports.requireSignin = expressJwt({
    secret: process.env.JWT_SECRET,
    userProperty: "auth"
  })
} catch (e) {
  console.log('error requireSignin', e)
}

exports.isAuth = (req, res, next) => {
  let user = req.profile && req.auth && req.profile._id == req.auth._id
  if (!user) {
    return res.status(403).json({
      status: false,
      message: 'Доступ запрещен'
    });
  }
  next();
}

// exports.isAuthForAllUsers = (req, res, next) => {
//   let user = req.profile && req.auth
//   if (!user) {
//     return res.status(500).json({
//       status: false,
//       message: 'Ошибка получения данных'
//     });
//   }
//   next();
// }

exports.isAdmin = (req, res, next) => {
  if (req.profile.role === 0) {
    return res.status(403).json({
      status: false,
      message: 'Admin resourse! Access denied'
    });
  }
  next();
}
