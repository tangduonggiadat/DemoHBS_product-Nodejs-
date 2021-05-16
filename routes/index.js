var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var auth = require('../ultinites/authen');
var userController = require('../controller/UserControllers')

/* GET home page. */
router.get('/', auth.authenticate, function (req, res, next) {
  //Kiemtra Login

  res.redirect('/SanPham')
});

/* GET Login page. */
router.get('/Login', function (req, res, next) {
  res.render('Login')
});
/* Post Login page. */
router.post('/Login', async function (req, res, next) {
  let { username, password } = req.body
  let user = await userController.login(username, password)
console.log('>>>>>>>>>>>>',user);
  if (user) {
    var token = jwt.sign({ user }, process.env.JWT_KEY);
    req.session.token = token
    res.redirect('/SanPham')
  } else {
    res.redirect('/Login')
    alert('Khong tim thay')
  }
});
/* GET Logout page. */
router.get('/Logout', function (req, res, next) {
  req.session.destroy(function (err) {
    res.render('Login')
  })

});

module.exports = router;
