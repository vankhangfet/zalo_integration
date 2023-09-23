const helper = require('./helper');

let code_verify = helper.generateCodeverify(43);
console.log("Code verify:" + code_verify);


let code_challenge = helper.encodeCodeVerifier(code_verify);
console.log("Code challenge:"+ code_challenge);