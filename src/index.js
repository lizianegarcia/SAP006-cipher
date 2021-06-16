import cipher from './cipher.js';

const deslocamento = document.getElementById('deslocamento')
const msgcriptada = document.getElementById('encryptmsg')
const btncript = document.getElementById('btnencrypt')
const msgdecript = document.getElementById('decryptmsg')
const btndecript = document.getElementById('btndecrypt')

btncript.addEventListener('click', () => {
  const deslocamentoValor = parseInt(deslocamento.value)
  const palavra = msgcriptada.value
  document.getElementById('decryptmsg').value = cipher.encode(deslocamentoValor, palavra)
})

btndecript.addEventListener('click', () => {
  const deslocamentoValor = parseInt(deslocamento.value)
  const palavra = msgdecript.value
  document.getElementById('encryptmsg').value = cipher.decode(deslocamentoValor, palavra)
})
