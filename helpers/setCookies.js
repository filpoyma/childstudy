
exports.setCookies = ({res, user, token}) => {

  res.cookie('t', token, {
    expire: new Date() + 9999,
    httpOnly: false
  });
  res.cookie('id', user.id, {
    expire: new Date() + 9999,
    httpOnly: false
  });
}
