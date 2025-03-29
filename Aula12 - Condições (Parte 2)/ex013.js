let data = new Date()
let hora = data.getHours()

console.log(`Agora são exatamente ${hora} horas.`)

if (hora <= 12 && hora >= 7) {
    console.log("Bom Dia!")
}

else if (hora <= 18 && hora >= 13) {
    console.log("Boa Tarde!")
}

else if (hora >= 0 && hora <= 6) {
    console.log("Boa Madrugada")
}

else {
    console.log("Boa Noite!")
}