const crypto = require('crypto')
const readline = require('readline-sync')

var d = 0
var e = 1

var func = readline.question("decrypt(0) or encrypt(1)? ")

if (func < e) {
  var msg = readline.question("message to encrypt?: ")
  console.log(msg)

  var seed = readline.question("seed? (leave blank for random seed): ")
  console.log(seed)

} else if (func > d) {
  var seed = readline.question("seed? (leave blank for random seed): ")
  console.log(seed)

} else {
  console.log("please restart the program.")

}
