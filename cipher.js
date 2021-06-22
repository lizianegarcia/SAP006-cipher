const cipher = {
  encode: function (offset, word) {
    if (typeof offset !== "number" || typeof word !== "string") {
      throw new TypeError ("Erro!")
    }

    let resultEncrypt = ""
    for (let i = 0; i < word.length; i++) {
      let encrypt = word.charCodeAt(i)
      if (encrypt >= 65 && encrypt <= 90) {
        encrypt = ((encrypt - 65 + offset) % 26) + 65
      } else if (encrypt >= 97 && encrypt <= 122) {
        encrypt = ((encrypt - 97 + offset) % 26) + 97
      }
      resultEncrypt += String.fromCharCode(encrypt)
    }
    return resultEncrypt
  },

  decode: function (offset, word) {
    if (typeof offset !== "number" || typeof word !== "string") {
      throw new TypeError ("Erro!")
    }

    let resultDecrypt = ""
    for (let i = 0; i < word.length; i++) {
      let decrypt = word.charCodeAt(i)
      if (decrypt >= 65 && decrypt <= 90) {
        decrypt = ((decrypt - 90 - offset) % 26) + 90
      } else if (decrypt >= 97 && decrypt <= 122) {
        decrypt = ((decrypt - 122 - offset) % 26) + 122
      }
      resultDecrypt += String.fromCharCode(decrypt)
    }
    return resultDecrypt
  }
}

export default cipher;
