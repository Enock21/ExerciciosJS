var nome = window.prompt('Qual é seu nome?')
document.write(`Olá <strong>${nome}</strong>! Seu nome tem ${nome.length} letras!<br/>`) //document.write() escreve uma mensagem na tela. Opção alternativa ao window.alert(). A tag <strong> deixa em negrito
document.write(`Seu nome em maiúsculas é ${nome.toUpperCase()}<br/>`)
document.write(`Seu nome em minúsculas é ${nome.toLowerCase()}`)