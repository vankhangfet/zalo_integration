const crypto = require('crypto');

function encodeCodeVerifier(codeVerifier) {
  // Create a SHA-256 hash of the ASCII code verifier
  const hash = crypto.createHash('sha256').update(codeVerifier, 'ascii').digest();

  // Encode the hash in Base64
  const base64Hash = hash.toString('base64');

  //console.log("Code challenge:"+base64Hash)

  return base64Hash;
}

function generateCodeverify(length) {
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      result += charset.charAt(randomIndex);
    }
  
    return result;
  }

module.exports = {
    encodeCodeVerifier: encodeCodeVerifier,
    generateCodeverify: generateCodeverify
}