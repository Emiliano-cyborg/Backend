const arregloOriginal = [1,2,3,4,5,6];

const nuevosValores = arregloOriginal.map(x => x +1);

const funcionPar = (valor) =>{

    if(valor%2 === 0){

        return valor
        
    }else{
        return 'No es par'
    }


}

const pares = arregloOriginal.map(funcionPar);

console.log(pares)
