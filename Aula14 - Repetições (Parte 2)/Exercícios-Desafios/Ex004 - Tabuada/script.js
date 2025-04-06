function calcular () {
    let num = document.getElementById("txtn")
    let tab = document.getElementById("seltab")

    if(num.value.length == 0) {
        alert("Por Favor digite um número.")
    }

    else {
        let n = Number(num.value)

        tab.innerHTML = ""

        for (let c = 1; c <= 12; c++) {
            let item = document.createElement("option")
            item.text = `${n} x ${c} = ${n*c}`

            item.value = `tab${c}` // Para Linguagens Futuras
            
            tab.appendChild(item)
        }
    }
}