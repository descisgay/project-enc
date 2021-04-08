//PACKAGES
const aes256 = require("aes256");
const readline = require("readline");
const crypto = require("crypto");

//VARIABLES
var decrypted, encrypted, testseed, testenc, testdec;

//INITIALIZING READLINE
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//TEST COMMAND FOR NPM
if(process.argv[2] == "-test") {
    console.log("testing");

    testseed = crypto.randomBytes(8).toString("hex");
    testenc = aes256.encrypt(testseed, "testing encryption");
    testdec = aes256.decrypt(testseed, testenc)

    console.log("random test seed: " + testseed);
    console.log(`encrypted string (should result in "testing encryption" when decrypted): ` + testenc)
    console.log(`decrypted string (should be "testing encryption"): ` + testdec)
    
    if(testdec != "testing encryption") {
        console.log("something went wrong, check app.js for any errors, also make sure you have all the requirements installed by running npm init")
    };
    return process.exit();
};

//MAIN
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
