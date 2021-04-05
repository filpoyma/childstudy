const User = require('../models/users');

// exports.postTecResults = (req, res) => {
//   //console.log('req.body.result', req.body.result);
//   User.updateOne({_id: req.profile._id},
//     {$push: {'results.tectest': req.body.result}},
//     {safe: true, upsert: true, },
//     (error, user) => {
//       if (error) {
//         return res.status(400).json({status: false,
//           message: "Ошибка записи результатов теста"
//         });
//       }
//       user.hashed_password = undefined;
//       user.salt = undefined;
//       console.log('TEC REsultss updated')
//       return res.json({status: 'ok', user} );
//     });
// };

exports.postTecResults = (req, res) => {
  //console.log('req.body.result', req.body.result);
  User.findOneAndUpdate({_id: req.profile._id},
    {$push: {'results.tectest': req.body.result}},
    {safe: true, upsert: true, new: true},
    (error, user) => {
      if (error) {
        return res.status(400).json({status: false,
          message: "Ошибка записи результатов теста"
        });
      }
      user.hashed_password = undefined;
      user.salt = undefined;
      console.log('TEC REsultss updated')
      return res.json({status: 'ok', message: 'Результаты теста сохранены', user} );
    });
};

exports.deleteTecResults = (req, res) => {
  console.log('req.body.deleter', req.body.id);
  User.findOneAndUpdate({_id: req.body.id},
    {$pop: {'results.tectest': 1}}, // удаляет последний эл-т массива
    {safe: true, upsert: true, new: true},
    (error, user) => {
      if (error) {
        return res.status(400).json({status: false,
          message: "Ошибка удаления результатов теста"
        });
      }
      user.hashed_password = undefined;
      user.salt = undefined;
      console.log('TEC REsultss deleted');
      return res.json({status: 'ok', message: 'Результаты теста удалены', user} );
    });
};