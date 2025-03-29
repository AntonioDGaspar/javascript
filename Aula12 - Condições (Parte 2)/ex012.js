let nota = 18

if (nota == 20) {
    console.log("Você obteve a melhor nota possível, parabéns!")
}   

else if (nota >= 15 && nota < 20) {
    console.log("Você obteve uma nota Boa.")
}

else if (nota >= 10 && nota < 15) {
    console.log("Você obteve uma nota Mediana.")
}

else if (nota > 20) {
    console.log("Valor Inválido.")
}

else{
    console.log("V8ocê obteve uma nota Negativa.")
}