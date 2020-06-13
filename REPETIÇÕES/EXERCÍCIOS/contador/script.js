function contar() {
    let txtinicio = document.getElementById('txtinicio')
    let txtfinal = document.getElementById('txtfinal')
    let txtpasso = document.getElementById('txtpasso')
    let res = document.getElementById('res')
    
    if (txtinicio.value.length == 0 || txtfinal.value.length == 0 || txtpasso.value.length == 0)
    {
        window.alert("[EERO] Faltam dados")
        res.innerHTML = 'Impossível contar!'
    }
    else {

        res.innerHTML = '<P> Contando: </p>'

        let inicio = Number(txtinicio.value)
        let final = Number(txtfinal.value)
        let passo = Number(txtpasso.value) 

        if (passo <= 0) {
            window.alert("Passo inválido. Considerando Passo = 1")
            passo = 1
        } 
        
        if (inicio < final) {
            // Contagem crescente
            for (let n = inicio; n <= final; n += passo){
                // Unicode emoji list pata pegar código dos emojis      
                res.innerHTML += `${n} \u{1F449} `
                }
        } else {
            // Contagem decrescente
            for (let n = inicio; n >= final; n -= passo){
                // Unicode emoji list pata pegar código dos emojis      
                res.innerHTML += `${n} \u{1F449} `
                }
        }
        
        res.innerHTML += `\u{1F3C1}`
    }

   
}