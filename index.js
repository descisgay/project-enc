const aes256 = require("aes256");
const readline = require("readline");
const crypto = require("crypto");

var decrypted, encrypted;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("decrypt or encrypt? ", function(dore) {
    if(dore == "decrypt") {
        rl.question("seed: ", function(dseed) {

            if(dseed == "") {
                console.log("no seed specified, please try again");
                return process.exit();
            };

            rl.question("encrypted string: ", function(dstring) {
                if(dstring == "") {
                    console.log("no string provided, please try again");
                } else {
                    decrypted = aes256.decrypt(dseed, dstring);
                    console.log("decrypted string: " + decrypted.toString());
                    return process.exit();
                };
            });
        });
    } else if(dore == "encrypt") {
        rl.question("seed (leave blank for an auto-generated seed): ", function(eseed) {

            if(eseed == "") {
                eseed = crypto.randomBytes(8).toString("hex");
                console.log("your auto-generated seed: " + eseed);
            };

            rl.question("string to encrypt: ", function(estring) {
                if(estring == "") {
                    console.log("no string provided, please try again");
                } else{
                    encrypted = aes256.encrypt(eseed, estring);
                    console.log("encrypted string: " + encrypted.toString());
                    return process.exit();
                };
            });
        });
    } else if (dore != "decrypt" | dore != "encrypt") {
        console.log("invalid answer, please try again.");
        return process.exit();
    }
});
