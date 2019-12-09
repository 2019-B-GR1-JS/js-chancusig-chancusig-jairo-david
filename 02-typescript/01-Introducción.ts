// Transpilador
// Tipo de compulador que transforma de un lenguaje a otro
// TYPESCRIPT
// NOS DA:
// 1) TIPOS DE DE DATOS (TIPADOS)
// 2) DECORADORES
// 3) CLASES

//const numero = 0;
const numero: number = 0;
//let nombre: string = "Jairo";

// DUCK TYPING
// INFIERE EL TIPO DE DATO
let nombre = "Jairo";
// nombre = 1; ERROR
let fecha: Date; // Date -> Clase
                // Tipo de dato "Date"
fecha = new Date();
let jairo: Estudiante;  // Date -> Interfaz
                        // Tipo de dato "Estudiante"
jairo = {
    nombre:"Jairo",

};
interface Estudiante{
    nombre : string;
    edad? : number;
}

function holaMundo(): void {
    console.log('Hola');
}
function mensaje(nombre:string): void {
    console.log('Hola', nombre);
}
function calculadora(
    numUno:number,
    ... numeros: number[]
): number {
    console.log('Hacer calculadora');
    return numUno;
}

function universidad(
    nombre: string,
    edad?: number   // No quiero que siempre me manden la edad (Opcional)
): string {
    return `${nombre} Edad: ${edad}`;
}
universidad("Jairo");

interface Facultad{
    nombre: string;
    id : number;
}
interface Departamento {
    nombre: string;
    id: number;
    facultad: Facultad | number; // | boolean;
}

const departamentoSistemas = {
    nombre: "Sistemas",
    id: 1,
    facultad : { // Cuando la Facultad está relacionada (En la base de datos se va a ver así)
        nombre: "Sistemas",
        id:1,
    }
};

const departamentoSistemasSinRelaciones: Departamento = {
    nombre: "Sistemas",
    id: 1,
    facultad : 1
};

function  imprimirDepartamento(
    departamento : Departamento
) {
    //const departamentoId = departamento.facultad as number + 1;
    //const departamentoId = <number>departamento.facultad + 1;
    const departamentoId = departamento.facultad + 1;
}
//universidad("Jairo",2);

///¿Por qué es necesario Typar los Datos?
///- Para reducir los errores

//fecha = 1;
//fecha = "1";

