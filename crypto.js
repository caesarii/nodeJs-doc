const crypto = require('crypto')

// 使用crypto
const secret = 'abcdefg'
const hash = crypto.createHmac('sha256', secret)
                    .update('I love cupcakes')
                    .digest('hex')
console.log('使用ctypto', hash)

// 使用cipher
const cipher = crypto.createCipher('aes192', 'a password')
let encrypted = cipher.update('ab', 'utf8', 'hex')
// encrypted = cipher.update('b', 'utf8', 'hex')
console.log('update', encrypted)
encrypted += cipher.final('hex')
console.log('cipher', encrypted)

// a: 509ffc9d6467fa1bf969f563e357be06
// b: 4f733529b3a35a2265a1aa13cf1851c9
// 先a后b；5c5fcb851d611e1c57ecbfe125717a1a
// ab: 5c5fcb851d611e1c57ecbfe125717a1a

// 使用 decipher
const decipher = crypto.createDecipher('aes192', 'a password')
let encryp = '5c5fcb851d611e1c57ecbfe125717a1a'
let decrypted = decipher.update(encryp, 'hex', 'utf8')
decrypted += decipher.final('utf8')
console.log('decrypted', decrypted)
// a
// b
// ab

// 使用 hash

