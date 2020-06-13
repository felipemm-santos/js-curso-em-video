function tabuada() {
    let txtnum = document.getElementById('txtnum')   
    let tab = document.getElementById('seltabuada')
    if (txtnum.value.length == 0) {
        window.alert("O campo número está vazio. Por favor digite um número!")
    } else {
        tab.innerHTML = ""
        let num = Number(txtnum.value)
        for (tabnum = 1; tabnum <= 10; tabnum++){

            let item = document.createElement('option')

            item.text = `${num} x ${tabnum} = ${tabnum * num}`

            item.value = `tab${num}`

            tab.appendChild(item)
        }
    }
    
}