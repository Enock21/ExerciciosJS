var n1 = window.prompt('Digite um número')//Lendo numero 1

var n2 = window.prompt('Digite outro número')//Lendo numero 2

var soma1 = Number.parseInt(n1) + Number.parseInt(n2)//Convertendo n1 e n2 para inteiro e somando
window.alert(`Soma de inteiros: ${soma1}`)//Exibindo soma1 com place holder

var soma2 = parseFloat(n1) + parseFloat(n2)//Convertendo n1 e n2 para float e somando
window.alert(`Soma de floats: ${soma2}`)//Exibindo soma2 com place holder

var soma3 = parseInt(n1) + parseFloat(n2)//Convertendo n1 para int e n2 para float e somando
window.alert(`Soma de int e float: ${soma3}`)//Exibindo soma3 com place holder

var soma4 = Number(n1) + Number(n2)//Convertendo n1 e n2 para tipos genéricos Number (pode ser tratado como int ou float)
window.alert(`Soma de números genéricos: ${soma4}`)//Exibindo soma4 com place holder