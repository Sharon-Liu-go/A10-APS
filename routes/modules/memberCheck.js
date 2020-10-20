const user = require("../../models/user")

function memberCheck(users, loginEmail, loginPassword) {
  let userName = false
  users.find(user => {
    if ((user.email === loginEmail) && (user.password === loginPassword)) {
      userName = user.firstName
    }
  }
  )
  return userName

}
module.exports = memberCheck