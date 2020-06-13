let letras = ["A", "B", "C"]

//**************************************************/

console.log("\nFor")

for (let letra = 0; letra < letras.length; letra++) {
    console.log(letras[letra])    
}

//**************************************************/

console.log("\nForEach")

letras.forEach(letra => console.log(letra));

letras.forEach((letra, i_letra) =>
    console.log(`Posição ${i_letra} é ${letra}`)
)

//**************************************************/

console.log("\nForin")

for (let letra in letras) {
    console.log(letra)
}

//**************************************************/

console.log("\nForof")


for (let letra of letras) {
    console.log(letra)
}

