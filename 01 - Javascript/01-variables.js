// JSON
// var nombre = "Adrian";
// Mutable (No queremos)
let nombre = "Jairo"
// nombre = "Carolina";
nombre = 1;
// No Mutables (Inmutable) (No cambia)
const cedula = 550269872;
const mensaje = `
Siempre usar "const"
Si ya toca usar "let"
Nunca vamos a usar "var"
`;

let nombres = "Adrian";
console.log(typeof nombres, 'nombres');
let numeros = 1;
console.log(typeof numeros, 'numeros');
numeros = 1.1;
console.log(typeof numeros, 'numeros decimales');
let casado = false;
console.log(typeof casado, 'casado');
let hijos = null;
console.log(typeof hijos, 'hijos');
let mascotas = [];
console.log(typeof mascotas, 'mascotas');
let hermana = {};
console.log(typeof hermana, 'hermana');
// Condicion!
// Truty
// Falsy
// cmd + alt + l
// ctrl + alt + l
if ("") {
    console.log("Truty");
} else {
    console.log("Falsy"); // Falsy
}


if ("a") {
    console.log("Truty"); // Truty
} else {
    console.log("Falsy");
}

if (-1) {
    console.log("Truty"); // Truty
} else {
    console.log("Falsy");
}


if (0) {
    console.log("Truty");
} else {
    console.log("Falsy"); // Falsy
}

if (1) {
    console.log("Truty"); // Truty
} else {
    console.log("Falsy");
}


if (null) {
    console.log("Truty");
} else {
    console.log("Falsy"); // Falsy
}

if ({}) {
    console.log("Truty"); // Truty
} else {
    console.log("Falsy");
}

if ([]) {
    console.log("Truty"); // Truty
} else {
    console.log("Falsy");
}

// JSON - JS
const jairo = {
    "nombre": 'Jairo',
    'apellido': "Chancusig",
    edad: 10,
    casado: false,
    hijos: null,
    hermana: {nombre: "Carolina"},
    mascotas: [
        {
            nombre: "Cachetes",
        }
    ],
};
console.log(adrian.nombre); // Adrian
console.log(adrian.hermana); // { nombre: "Carolina" }
console.log(adrian.mascotas[0].nombre);
adrian.sueldo = 1.2;
adrian["deudas"] = 10000;
console.log(adrian);
delete adrian.hijos;
console.log(adrian);