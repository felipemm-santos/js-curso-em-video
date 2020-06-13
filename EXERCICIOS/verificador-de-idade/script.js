function verificar() {
    var data = new Date()
    var ano_atual = data.getFullYear()
    var ano_form = document.getElementById("txtano")
    var res = document.querySelector("div#res")
    if (ano_form.value.length == 0 || ano_form > ano_atual)
    {
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    }
    else {
        var sexo_form = document.getElementsByName("radsex")
        var idade = ano_atual - Number(ano_form.value)
        var gênero = ""
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sexo_form[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 12) {
                // Criança
                img.setAttribute('src', 'imagens/bebe-menino.png')
            } else if (idade >= 12 && idade < 22) {
                // Jovem
                img.setAttribute('src', 'imagens/homem-jovem.png')
            } else if (idade >= 22 && idade < 50) {
                // Adulto
                img.setAttribute('src', 'imagens/homem-adulto.png')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/homem-idoso.png')                   
            }            
        } else {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 12) {
                // Criança
                img.setAttribute('src', 'imagens/bebe-menina.png')
            } else if (idade >= 12 && idade < 22) {
                // Jovem
                img.setAttribute('src', 'imagens/mulher-jovem.png')
            } else if (idade >= 22 && idade < 50) {
                // Adulto
                img.setAttribute('src', 'imagens/mulher-adulta.png')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/mulher-idosa.png')                   
            }           
        }
        res.style.textAlign = 'center'
        res.innerHTML = `${gênero} com ${idade} anos`
        res.appendChild(img)
    }
}