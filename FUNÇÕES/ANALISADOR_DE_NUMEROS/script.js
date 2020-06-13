let txtnum = document.querySelector('input#txtnum')
txtnum.focus()
let lista = document.getElementById('lista')
let res = document.getElementById('res')
let numeros = []

function NumberinLista(num , numeros) {
    if (numeros.indexOf(Number(num)) != -1) {
        return true
    } else {
        return false
    }
}

function isNumber(num) {
    if (Number(num) >= 1 && Number(num) <= 100) {
        return true
    } else {
        return false
    }        
}

function adicionar() { 
    if (isNumber(txtnum.value) && !NumberinLista(txtnum.value, numeros)) {
        res.innerHTML = ''

        let num = Number(txtnum.value)

        let item = document.createElement('option')

        item.text = `O valor ${num} foi adicionado`

        item.value = `numero${num}`

        lista.appendChild(item)

        numeros.push(num)        

    } else {
        window.alert("Valor inválido , ou já existe na lista.")
    }
    txtnum.value = ""
    txtnum.focus()
}

function minorListItem(list) {
    let minor = list[0]
    for (const item of list) {
        if (item < minor) {
            minor = item
        }
    } 
    // list.forEach(item => {
    //     if (item < minor) {
    //         minor = item
    //     }
    // });
    return minor
}

function majorListItem(list) {
    let major = list[0]
    for (const item of list) {
        if (item > major) {
            major = item
        }
    } 
    // list.forEach(item => {
    //     if (item > major) {
    //         major = item
    //     }
    // });
    return major
}

function SumList(list) {
    let result = 0
    for (const item of list) {
        result += item
    }
    return result
}

function MeanList(list, cases) {
    let mean = SumList(list) / list.length
    return Number(mean.toFixed(cases))
}

function finalizar() {
    let qnumeros = numeros.length

    res.innerHTML = `<p> Ao todo temos ${qnumeros} números cadastrados </p>`

    res.innerHTML += `<p> O maior valor informado foi ${Math.max.apply(this , numeros)} </p>`

    res.innerHTML += `<p> O menor valor informado foi ${Math.min.apply(this , numeros)} </p>`

    // res.innerHTML += `<p> Somando todos os valores temos  ${SumList(numeros)} </p>`

    // res.innerHTML += `<p> O menor valor informado foi ${minorListItem(numeros)} </p>`

    res.innerHTML += `<p> Somando todos os valores temos  ${SumList(numeros)} </p>`
    
    res.innerHTML += `<p> A média dos valores digitados é ${MeanList(numeros , 2)} </p>`

}

