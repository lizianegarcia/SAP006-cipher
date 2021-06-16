const cipher = {
  encode: function (deslocamento, palavra) {
    const deslocamentoVazio = !deslocamento
    const deslocamentoLetra = typeof deslocamento !== "number"
    if (deslocamentoVazio || deslocamentoLetra) {
      throw new TypeError
    }

    let resultEncrypt = ""

    for (let i = 0; i < palavra.length; i++) {
      let encrypt = palavra.charCodeAt(i)
      if (encrypt >= 65 && encrypt <= 90) {
        encrypt = ((encrypt - 65 + deslocamento) % 26) + 65
      } else if (encrypt >= 97 && encrypt <= 122) {
        encrypt = ((encrypt - 97 + deslocamento) % 26) + 97
      }
      resultEncrypt += String.fromCharCode(encrypt)
    }
    return resultEncrypt
  },

  decode: function (deslocamento, palavra) {
    const deslocamentoVazio = !deslocamento
    const deslocamentoLetra = typeof deslocamento !== "number"
    if (deslocamentoVazio || deslocamentoLetra) {
      throw new TypeError
    }

    let resultDecrypt = ""

    for (let i = 0; i < palavra.length; i++) {
      let decrypt = palavra.charCodeAt(i)
      if (decrypt >= 65 && decrypt <= 90) {
        decrypt = ((decrypt - 90 - deslocamento) % 26) + 90
      } else if (decrypt >= 97 && decrypt <= 122) {
        decrypt = ((decrypt - 122 - deslocamento) % 26) + 122
      }
      resultDecrypt += String.fromCharCode(decrypt)
    }
    return resultDecrypt
  }
}

export default cipher;
