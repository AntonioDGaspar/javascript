function calcular() {
    let txtinit = document.getElementById("txtinit")
    let txtfim = document.querySelector("input#txtfim")
    let txtpasso = document.getElementById("txtpasso")

    let res = document.getElementById("res")

    if (txtinit.value.length == 0 || txtfim.value.length == 0 || txtpasso.value.length == 0) {
        alert("[ERRO] Escreva todos os Dados.")
    }

    else {
        let inicio = Number(txtinit.value)
        let fim = Number(txtfim.value)
        let passo = Number(txtpasso.value)

        if (passo <= 0) {
            alert("Passo Inválido. O Passo será considerado com 1")
            passo = 1
        }
        if (inicio < fim) {
            // Contagem Crescente
            for (let c = inicio; c <= fim; c+=passo) {
                res.innerText += `${c} \u{1F449}`
            }
        }     

        else {
            // Contagem Decrescente
            for (let c = inicio; c >= fim; c-=passo) {
                res.innerText += `${c} \u{1F449}`
            }
        }

        res.innerText += `\u{1F3C1}`
    }
    res.innerHTML = ""
}