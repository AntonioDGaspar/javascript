let a_num = []
let res = document.getElementById("res")

function adicionar() {
    let txtnum = document.querySelector("input#txtnum")
    let selec = document.getElementById("txtsel")

    if (txtnum.value.length == 0) {
        alert("Por favor, digite algum valor.")
    }

    else {
        let num = Number (txtnum.value)
        
        if (num > 100 || a_num.indexOf(num) != -1 || num <= 0) {
            alert("O Número Digitado já está no Array ou não está no intervalor solicitado.")
        }

        else {
            a_num.push(num)

            let item = document.createElement("option")
            selec.appendChild(item)

            item.text = `Valor ${num} adicionado.`

            res.innerHTML = ""
        }
        txtnum.value = ""
        txtnum.focus()
    }
}

function verificar () {
    let menor = 0
    let maior = 0
    let soma = 0

    if (a_num.length == 0){
        alert("Adicione valores para verificar.")
    }

    else {
        for (let c = 0; c < a_num.length; c++) {
            if (a_num[c] > maior) {
                maior = a_num[c]
            }

            soma += a_num[c]
        }

        a_num.sort()
        menor = a_num[0]
        let media = soma / a_num.length

        res.innerText = ""
        res.innerHTML += `Ao todo, temos ${a_num.length} Valores. <br>`
        res.innerHTML += "<hr>"
        res.innerHTML += `O maior valor informado foi ${maior}. <br>`
        res.innerHTML += "<hr>"
        res.innerHTML += `O menor valor informado foi ${menor}. <br>`
        res.innerHTML += "<hr>"
        res.innerHTML += `Somando todos os valores temos: ${soma}. <br>`
        res.innerHTML += "<hr>"
        res.innerHTML += `A média dos valores digitados é: ${media}.`
    }
}
