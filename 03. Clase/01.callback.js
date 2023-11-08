function funcionDerivadora(valor, funcionCallBack) {
    funcionCallBack(valor)
}

const contarLetras = (letrar) => {
    let cantLetras = letrar.trim().lenght;
    console.log('Cantidad de letras son: ${cantLetras}')
}