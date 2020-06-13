/*
let num = [5, 4, 6] -> Cria o array [5, 4, 6]

num[3] = 8 -> Põe o valor 8 na osição 3 do array

num.push(7) -> Põe o valor 7 no final do array

num.sort() -> Organiza o array na ordem crescente

num.indexOf(7) -> Encontra a posição do número 7 no array 
OBS: Se não encontrar nada retorna -1

*/
let num = [5, 4, 6]

console.log(`\nNosso vetor é: ${num}`)

num[3] = 8

console.log(`\nDepois de \"num[3] = 8\"  num é: ${num}`)

num.push(7)

console.log(`\nDepois de \"num.push(7)\" ele é: ${num}`)

num.sort()

console.log(`\nE depois de \"num.sort()\" -> ${num}`)

console.log(`\nO comprimento de num é ${num.length} `)

console.log(`\nO primeiro elemento de num é ${num[0]}`)

let posição = num.indexOf(7)

console.log(`\nO valor 7 está na posição ${posição}`)

posição = num.indexOf(10)

if (posição == -1) {
    console.log(`\nO valor 10 não existe no array`)
}