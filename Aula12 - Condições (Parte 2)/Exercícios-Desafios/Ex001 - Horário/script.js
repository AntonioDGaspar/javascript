function carregar() {
    let texto = document.getElementById("texto")
    let imagem = document.querySelector("img#imagem")
    let conteudo = document.getElementById("conteudo")

    var data = new Date()
    var hora = data.getHours()
    
    texto.innerText = `Agora são ${hora} horas.`
    if (hora >= 0 && hora <= 6) {
        imagem.src = "madrugada.png"
        conteudo.style.backgroundColor = "#595049"
        document.body.style.backgroundColor = "#b39986"
    }

    else if (hora >= 7 && hora < 12) {
        imagem.src = "manhã.png"
        conteudo.style.backgroundColor = "white"
        document.body.style.backgroundColor = "#989574"

    }

    else if (hora >= 12 && hora < 18) {
        imagem.src = "tarde.png"
        document.body.style.backgroundColor = "#f1c57f"

    }

    else {
        imagem.src = "noite.png"
        document.body.style.backgroundColor = "#722b1a"
    }
}