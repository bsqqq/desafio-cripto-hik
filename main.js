/*
    O desafio era descriptografar uma string, onde a chave de descriptografia 
    era 1 byte, ou seja, poderia ser um valor entre 0 a 255 e depois descriptografar 
    esse resultado de base64 para texto plano normal; Neste repositorio, recriei a essencia
    do desafio, porem aqui você pode encriptar e desencriptar e com o tamanho do xor que quiser...
    
    Quer implementar cifra de césar ou ROT13? É só trocar a operação de XOR (^) pela soma (+), 
    ou adicione depois que fizer as operações de XOR antes de fazer o push pro array na função de encode(), depois
    na função de decode() é fazer o processo reverso, antes de fazer o XOR, subtraia pelo mesmo valor que adicionou 
    na função anterior, mas também pode mudar a ordem das operações antes de retornar o resultado, só tome cuidado para
    fazer as operações na ordem correta de criptografia e descriptografia.
*/

// texto = texto a ser encriptado
// key = chave criptografica XOR

function encode(texto, key) {
  let str = btoa(texto)
  let arrAux = []
  for(let i = 0; i < str.length; i++) {
      arrAux.push(str[i].charCodeAt() ^ key)
      arrAux[i] = String.fromCharCode(arrAux[i])
  }
  return arrAux.join().replaceAll(",", "")
}

function decode(texto, key) {
  let arrAux = []
  for(let i = 0; i < texto.length; i++) {
      arrAux.push(texto[i].charCodeAt() ^ key)
      arrAux[i] = String.fromCharCode(arrAux[i])
  }
  return atob(arrAux.join().replaceAll(",", ""))
}
