function calculo(numUno,
                 numDos,
                 funcionCalculo){
    const total = numUno + numDos;
    return funcionCalculo(numUno, numDos, total);
}
const numeroUno = 3;
const numeroDos = 5;
const suma = (numUno, numDos, total) => {
    return total;
};

console.log(suma); // Definición de la FUNCTION   ----------> SIN PARENTESIS
console.log(suma( // Ejecición FUNCTION ---------> CON PARANTESIS
    1,
    2,
    3)
);
const resultadoCalculo = calculo(
        numeroUno,
        numeroDos,
        (numeroUno, numeroDos, total) => {
            return total/2;
}
);
console.log(resultadoCalculo);


function forEachLocal(arreglo, funcion) {
       for(let i = 0;i<arreglo.length;i ++){
        funcion(arreglo[i],i,arreglo);
       }
}
forEachLocal([1,2,3,4,5],
    (valorActual, indiceActual, arreglo)=> {
    console.log('valorActual', valorActual);
    console.log('indiceActual', indiceActual);
    console.log('arreglo', arreglo);
    }
);
function mapLocal(arreglo, funcion, ) {
    for(let i = 0;i<arreglo.length;i ++){
        funcion(arreglo[i],i,arreglo);

    }
}
 mapLocal([1,2,3,4,5,], (valorActual, indiceActual, arreglo)=> {
    console.log('valorActual', valorActual);
    console.log('indiceActual', indiceActual);
    console.log('arreglo', arreglo);
})

const arreglo1 = [1,2,3,4,5];
const respuestaMap = arreglo1;

.map(
    function (indiceActual, valorActual, arreglo1 ) {
        return valorActual + 5;
    }
);
    console.log('respuestaMap', respuestaMap);

