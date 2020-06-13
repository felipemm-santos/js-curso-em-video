let amigo = {
    nome: 'José',
    sexo: 'Masculino',
    peso: 70.5,
    engordar(Kg=0) {
        console.log('Engordou')
        this.peso += Kg
    }
}
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)

amigo.engordar(2)

console.log(`Agora ele pesa ${amigo.peso}Kg`)