const crypto = require('crypto')

// 使用crypto
const secret = 'abcdefg'
const hsh = crypto.createHmac('sha256', secret)
                    .update('I love cupcakes')
                    .digest('hex')
console.log('使用ctypto', hsh)

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
const hash = crypto.createHash('sha256')
hash.update('a')
hash.update('b')
console.log('hash', hash.digest('hex'))

// a: ca978112ca1bbdcafac231b39a23dc4da786eff8147c4e72b9807785afee48bb
// b: 3e23e8160039594a33894f6564e1b1348bbd7a0088d42c4acb73eeaed59c009d
// ab: fb8e20fc2e4c3f248c60c39bd652f3c1347298bb977b8b4d5903b85055620603
// 先a后b: fb8e20fc2e4c3f248c60c39bd652f3c1347298bb977b8b4d5903b85055620603