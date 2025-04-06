let valores = [1, 2, 5, 6, 7, 8, 9, 0, 12, 56]

/*
for(let pos = 1; pos < valores.length; pos++) {
    console.log(`A Posição ${pos} tem o Valor: ${valores[pos]}`)
}
*/

for (let pos in valores) {
    console.log(`A Posição ${pos} tem o Valor: ${valores[pos]}`)
}