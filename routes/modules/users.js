const express = require('express')
const router = express.Router()

const users = require('../../models/user')
const memberCheck = require('./memberCheck')

router.post('/:user', (req, res) => {
  const loginEmail = req.body.Email
  const loginPassword = req.body.Password
  console.log(req.body)
  let userName = ""
  users.find()
    .lean()
    .then(users => {
      let userName = memberCheck(users, loginEmail, loginPassword)
      if (userName) {
        res.render('user', { userName })
      } else {
        userNone = !userName
        res.render('index', { loginEmail, userNone })
      }
    })
    .catch(error => console.log(error))
})

module.exports = router
