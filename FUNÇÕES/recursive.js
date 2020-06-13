
function fatorial(num) {
    let fat = 1
    for (let c = num; c > 1; c--){
        fat *= c
    }
    return fat
}

console.log((`Fatorial \n${fatorial(5)}`))

function recursive_fatorial(num) {
    if (num == 1) {
        return 1
    } else {
        return num * fatorial(num - 1)
    }  
}

console.log(`Fatorial recursivo \n${recursive_fatorial(5)}`)
