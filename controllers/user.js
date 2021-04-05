const User = require("../models/users");

exports.userById = (req, res, next, id) => {
  User.findById(id).exec((error, user) => {
    if (error || !user) {
      return res.status(400).json({
        status: false,
        message: "User not found",
      });
    }
    req.profile = user;
    next();
  });
};

exports.allUsers = (req, res, next) => {
  User.find({}, (error, users) => {
    if (error) {
      return res.status(400).json({
        status: false,
        message: "Ошибка получения пользователей",
      });
    }
    req.profile = users;
    next();
  });
};

exports.read = (req, res) => {
  req.profile.hashed_password = undefined;
  req.profile.salt = undefined;
  const user = req.profile;
  console.log("req.profile readed");
  return res.json({ status: "ok", user });
};

exports.update = (req, res) => {
  User.findOneAndUpdate(
    { _id: req.profile._id },
    { $set: req.body },
    { $new: true },
    (error, user) => {
      if (error) {
        return res.status(400).json({
          message: "You are not authorized to perform this",
        });
      }
      user.hashed_password = undefined;
      user.salt = undefined;
      return res.json({ status: "ok", user });
    }
  );
};

exports.del = (req, res) => {
  User.findOneAndDelete({ _id: req.body.id }, (error) => {
    if (error) {
      return res.status(400).json({
        message: "You are not authorized to perform this",
      });
    }
    return res.json({
      status: "ok",
      message: `Пользователь ${req.body.id} удален`,
    });
  });
};
