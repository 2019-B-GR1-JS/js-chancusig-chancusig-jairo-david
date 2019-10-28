
const fs = require('fs');
/////////////////Las promesas pueden ser de cosas async o sync
/*
const sumarDosNumeros = ()=>{
    return new Promise(
    (resolve, reject)=>{
        if(correto){
            resolve('YEII')
        } else{
            resolve('BUUU')
        }
    }
    );
};

const promesaSumarDosNumeros = sumarDosNumeros();
console.log('01) Iniciar: ');
promesaSumarDosNumeros
    .then(
        (ok)=>{
            console.log('Ok', ok);
        }
    )
    .catch(
        (error) => {
            console.log('Error', error);
        }
    );
console.log('02) Terminar');
//////////////APESAR DE QUE NUESTRO CODIGO ES SINCRONO
//////////////TODAS LAS PROMESAS SON ASYNC
*/
const leerArchivo = (pathArchivo)=>{
    return new Promise(
        (resolve, reject)=>{
            ///res -> resolve, rej -> reject
            fs.readFile(
                pathArchivo,
                './05-callbacks.js',
                'utf8',
                (error, archivoLeido)=>{ //CallBack
if (error){
    reject(error);
}else {
    resolve(archivoLeido);
}
                }
            );
        }
    );
}

const leerArchivo = (pathArchivo) => {
    return new Promise(
        (resolve, reject) => {
            // res -> resolve, rej -> reject
            fs.readFile(
                pathArchivo,
                'utf8',
                (error, archivoLeido) => { // Callback
                    if (error) {
                        reject(error);
                    } else {
                        resolve(archivoLeido);
                    }
                }
            );
        }
    );
};

leerArchivo( './05-callbacks.js')
.then(
    (contenidoCallBackjs)=>{
        console.log(contenidoCallBackjs);
        return leerArchivo('04-funciones.js') //PROMESA
    }
)
.then(
    (contenidoFuncionesjs)=>{
        console.log(contenidoFuncionesjs);
        return leerArchivo('03-funciones.js') //PROMESA
    }
)