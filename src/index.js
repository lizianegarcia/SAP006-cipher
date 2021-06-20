import cipher from './cipher.js';

const offset = document.getElementById('offset')
const encryptMsg = document.getElementById('encryptmsg')
const encryptBtn = document.getElementById('btnencrypt')
const decryptMsg = document.getElementById('decryptmsg')
const decryptBtn = document.getElementById('btndecrypt')

encryptBtn.addEventListener('click', () => {
  const offsetValue = parseInt(offset.value)
  const word = encryptMsg.value
  document.getElementById('decryptmsg').value = cipher.encode(offsetValue, word)
  document.getElementById('encryptmsg').value = ""
})

decryptBtn.addEventListener('click', () => {
  const offsetValue = parseInt(offset.value)
  const word = decryptMsg.value
  document.getElementById('encryptmsg').value = cipher.decode(offsetValue, word)
  document.getElementById('decryptmsg').value = ""
})
