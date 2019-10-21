

/*function imprimirMensaje() {
    console.log("Mensaje");
    // return NO HAY;
}

const respuesta = imprimirMensaje(1,2,"asd");
console.log(respuesta); //void -> undefined
  */
//////////////////////////////////////////////////////////////////////////////
/*
function imprimirMensaje(mensaje) {
    console.log(`Mensaje ${mensaje}`);
    console.log("Mensaje " + mensaje);          
    // return NO HAY;
}


const respuesta = imprimirMensaje();
console.log(respuesta); //void -> undefined
        */

/////////////////////////////////////////////////////
/*
function imprimirMensaje(mensaje) {
    console.log(`Mensaje ${mensaje}`);
    console.log("Mensaje " + mensaje);
    // return NO HAY;
}

const respuesta = imprimirMensaje(123);
// const respuesta = imprimirMensaje("Carlos");
// const respuesta = imprimirMensaje(123);
console.log(respuesta); //void -> undefined
*/
/*
function imprimirMensaje(mensaje) {
    console.log(`Mensaje ${mensaje}`);
    console.log("Mensaje " + mensaje);
    // return NO HAY;
}

const respuesta = imprimirMensaje({a:1});
// const respuesta = imprimirMensaje("Carlos");
// const respuesta = imprimirMensaje(123);
console.log(respuesta); //void -> undefined
*/

//////////////////////////////////////////////////////
/*
function imprimirMensaje(mensaje) {
    if(typeof mensaje === 'number' ||
        typeof mensaje === 'string'){
        console.log(`Mensaje ${mensaje}`);
    }else {
        console.error("Error");
    }
    console.log("Mensaje " + mensaje);
    // return NO HAY;
}
const respuesta = imprimirMensaje({a:1});
// const respuesta = imprimirMensaje("Carlos");
// const respuesta = imprimirMensaje(123);
console.log(respuesta); //void -> undefined

*/

////////////////////////////////////////////////////
// hapijs -> librería se llama joi (hapijs/joi)
////////////////////////////////////////////////////
/*
function imprimirMensaje(mensaje) {
    if(typeof mensaje === 'number' ||
        typeof mensaje === 'string'){
        const impresion = `Mensaje ${mensaje}`;
            console.log(impresion);
            return impresion;
    }else {
        console.error("Error");
    }
 //   console.log("Mensaje " + mensaje);
}
/*
const respuesta = imprimirMensaje({a:1});
// const respuesta = imprimirMensaje("Carlos");
// const respuesta = imprimirMensaje(123);
console.log(respuesta); //void -> undefined
 */


function sumarDosElementos(numeroUno, numeroDos) {
    return numeroUno + numeroDos;
}
console.log(
    sumarDosElementos(1,6)
);



/// Destructurar parametros ***Para eso sirven los 3 puntos ...

/*function sumarElementos(numeroUno,
                        ...arregloParametrosInfinitos) {
    console.log(arregloParametrosInfinitos) // [2,3,4,5]
    if(arregloParametrosInfinitos){
        //arreglo.reduce((a,b)=> a+b,numeroUno);
        return arregloParametrosInfinitos
            .reduce(
                (valorInicial, valorActual)=>{
                    return valorInicial + valorActual;
                },
            numeroUno
        );
        } else{
    return numeroUno;
    }
    const suma = sumarElementos(1,2,3,4,5);
    console.log(suma);

    ////////////////////////////////////
/*

////****************************************************Rev
    const restar = function restarF() {
        return a - b;

    }
// fat arrow function => Anonymous function
    const restar1 = (a,b) =>{
        return a -b;
    };
//    console.log(restarF(4,2));  /// Así no se puede invocar la función
    console.log(restar1(3,5));


    function restar2(a,b) {
        return  a - b;
    }

    const restar1 ={
        nombre:'restar',
            restarNumeros: (a,b) => {//Anonymous function
            return a - b;
        },
        restarNumeros: function (a, b) { //Anonymous function
            return a - b;
        }
};
    */
/*
const transformarAMayuscula = (letra)=>{
    return letra.toUpperCase();
};

const transformarAMayuscula2 = (letra)=> letra.toUpperCase(); //El return está implicitamente

//////////Cuando solo hay un parametro, también se pueden omitir los parentésis----------------Prueba
const transformarAMayuscula3 = letra => letra.toUpperCase();

//const filtrarArreglo = arreglo.filter(a => a.id > 4); ---- Filtro

const arregloNumerosUno = [1,2,3,4,5,6];
const arregloNumerosDos = [7,8,9,10,11,12];
const arregloUnido = [
    ...arregloNumerosUno, arregloNumerosDos
];

*/
/// Destruturar el arreglo
//sumarElementos(arregloNumerosUno);

// sumarElementos([1,2,3,4,5,6];);
// sumarElementos(1,2,3,4,5,6);
//sumarDosElementos(1,2);


const objetoJairo = {
    nombre: 'Jairo',
};
const objetoChancusig = {
    apellido: 'Chancusig'
};
const objetoJairoChancusig = {
    ...Jairo,
    ...Chancusig,
    edad: 12,
};


////////////stringify transforma un objeto a un Jason String

const oJCEnString = JSON.stringify(objetoJairoChancusig);
console.log(oJCEnString);
const oJCClonado = JSON.parse(oJCEnString);  /////////parse transforma un jason string a objeto
console.log(oJCEnString);
oJCEnString.edad = 21;
console.log(oJCClonado);
console.log(oJCEnString);

function cambiarEdad(edad, objeto) {
    objeto.edad = edad;
    return objeto;
}

const clonadoJC={
    ...objetoJairoChancusig
};
console.log(clonadoJC);
clonadoJC.edad = 21;
console.log(objetoJairoChancusig);
