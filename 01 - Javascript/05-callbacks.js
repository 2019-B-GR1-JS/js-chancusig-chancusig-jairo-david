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


/////////////////////////////////////////////////////////////
////////////////DEBER OPERADORES////////////////////////////

///forEach
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

///Map
function mapLocal(arreglo,funcion){
    const nuevoArreglo = [];
    for (let i =0; i<arreglo.length; i ++){
        const nuevoValor = funcion(arreglo[i]);
        nuevoArreglo.push(nuevoValor)
    }
    console.log(nuevoArreglo);
}

mapLocal([1,2,3,4,5],(valorActual)=>{
    return valorActual + 5;
});


///Filter
function filterLocal(arreglo,funcion){
    const nuevoArreglo = [];
    for (let i =0; i<arreglo.length; i++){
        let nuevoValor = funcion(arreglo[i]);

        if (nuevoValor === true ) {
            nuevoArreglo.push(arreglo[i]);
        }
    }
    console.log(nuevoArreglo);
}

filterLocal([1,2,3,4,5],(valorActual)=>{
    return valorActual + 5 >= 10;
});

///Reduce
function reduceLocal(arreglo,funcion){
    //let respuestaReduce = undefined;
    let nuevoValor = 100;
    for (let i =0; i < arreglo.length; i ++){
        nuevoValor = funcion(nuevoValor, arreglo[i]);
    }
    console.log('Resultado:', nuevoValor);
}

reduceLocal([1,2,3,4,5],(valorInicial,valorActual)=>{
    return valorInicial - valorActual;
});

///Some
function someLocal(arreglo,funcion){
    let some = false;
    for (let i =0; i<arreglo.length; i ++){
        const nuevoValor = funcion(arreglo[i]);

        if(nuevoValor === true ){
            some = true;
        }
    }
    console.log('Resultado:', some);
}

someLocal([1,2,3,4,5],(valorActual)=>{
    return valorActual > 2 && valorActual < 5;
});


///Every
function everyLocal(arreglo,funcion){
    let every = true;
    for (let i =0; i<arreglo.length; i ++){
        const nuevoValor = funcion(arreglo[i]);
        if(nuevoValor === false ){
            every = false;
        }
    }
    console.log('Resultado:', every);
}

everyLocal([1,2,3,4,5],(valorActual)=>{
    return valorActual > 2 && valorActual < 5;
});


///Find
function findLocal(arreglo,funcion){
    let find = undefined;
    let i = 0;
    while(i<arreglo.length){
        const nuevoValor = funcion(arreglo[i]);
        if(typeof nuevoValor === "number"){
            find = nuevoValor;
            break;
        }
        i++;
    }
    console.log('Resultado:', find);
}

findLocal([1,2,3,4,5],(valorActual)=>{
    if (valorActual < 5){
        return valorActual;
    }
});


///Find Index
function findIndexLocal(arreglo,funcion){
    let findIndex = undefined;
    let i = 0;
    while(i < arreglo.length){
        const nuevoValor = funcion(arreglo[i],i);
        if(typeof nuevoValor === "number"){
            findIndex = nuevoValor;
            break;
        }
        i++;
    }
    console.log('Resultado:', findIndex);
}

findIndexLocal([1,2,3,4,5],(valorActual,indiceActual)=>{
    if (valorActual > 2){
        return indiceActual;
    }
});


