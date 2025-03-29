function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let ano_nas = document.getElementById("txtano")
    let res = document.querySelector("div#res")

    if (ano_nas.value.length == 0 || Number(ano_nas.value) > ano) {
        alert("Os Dados estão Errados, Escrava-os novamente.")
    }
    
    else{
        let sexo = document.getElementsByName("radiosex")
        idade = ano - Number(ano_nas.value)
        let img = document.createElement("img")
        img.setAttribute("id", "foto")

        let genero = ""

        if (sexo[0].checked) {
            genero = "Homem"

            if (idade >= 0 && idade <= 12) {
                img.setAttribute("src", "criança-homem.png")
                document.body.style.backgroundColor = "#6784f1"
            }
            
            else if (idade >= 13 && idade <= 18) {
                img.setAttribute("src", "adolescente-homem.png")
                document.body.style.backgroundColor = "#6784f1"
            }

            else if (idade >= 19 && idade <= 25) {
                img.setAttribute("src", "adulto-homem.png")
                document.body.style.backgroundColor = "#6784f1"
            }

            else{
                img.setAttribute("src", "idoso-homem.png")
                document.body.style.backgroundColor = "#6784f1"
            }
        }

        else if (sexo[1].checked) {
            genero = "Mulher"

            if (idade >= 0 && idade <= 12) {
                img.setAttribute("src", "criança-mulher.png")
                document.body.style.backgroundColor = "#d65757"
            }
            
            else if (idade >= 13 && idade <= 18) {
                img.setAttribute("src", "adolescente-mulher.png")
                document.body.style.backgroundColor = "#d65757"
            }

            else if (idade >= 19 && idade <= 25) {
                img.setAttribute("src", "adulto-mulher.png")
                document.body.style.backgroundColor = "#d65757"
            }

            else{
                img.setAttribute("src", "idoso-mulher.png")
                document.body.style.backgroundColor = "#d65757"
            }   
        }

        res.innerText = `${genero} com ${idade} anos.`
        res.innerHTML += "<br>"
        res.appendChild(img)
    }
        
}