//console.log('Works!');

/*
1. Importaciones
2. Constantes y variables
3. Sentencias
4. Funciones
*/

/*
Modo estricto
*/
'use strict';
//nombre = 'pepita';
//console.log(nombre);

/*
Rest argumentos
*/
function logNombres(...nombres) {
  console.log(nombres);
}

//logNombres('luisa');
//logNombres('luisa', 'daniel', 'pepita');

/*
Spread operator
*/
const arr1 = ['a', 'b', 'c'];
const arr2 = ['d', 'e', 'f'];
const arrCombinado = [...arr1, ...arr2];
//console.log(arrCombinado);

/*
Destructurar
*/
const nevera = ['queso', 'lechuga', 'jamón', 'hielo', 'jugo', 'leche'];
const [q, l, j] = nevera;
//console.log(q, l, j);

const objNevera = {
  queso: 'tajado',
  leche: 'entera',
  hielo: 'triangulitos',
  jamon: 'de pavo',
  lechuga: 'tiritas',
  jugo: 'naranja',
};
objNevera.jamon = 'de pollo';
objNevera['queso'] = 'rayado';

const { queso, lechuga, jamon } = objNevera;
//console.log(queso, lechuga, jamon);

/*
Funciones
*/
//const retornoFuncion = funcion();
//console.log(retornoFuncion);

function funcion() {
  console.log('soy una función');
  console.log('this en una función: ', this);
}

const funcionFlecha = () => {
  console.log('soy una función flecha');
  console.log('this en una función flecha: ', this);
};

//const retornoFuncionFlecha = funcionFlecha();
//console.log(retornoFuncionFlecha);

function funcionConListaDeParametros(param1 = 'valor por defecto') {
  console.log('param1:', param1);
}

//funcionConListaDeParametros('soy argumento o valor');
//funcionConListaDeParametros();

/*
Estrucuras de datos
*/
let arreglo = [];
arreglo = new Array();
arreglo = ['elemento1', 'elemento2', 'elementoN'];
//console.log(arreglo);
//console.log(typeof arreglo);
//console.log(arreglo instanceof Array);

let objeto = new Object();
objeto = {
  llave: 'valor',
  nombre: 'pepita',
  apellido: 'pérez',
  saludar: function () {
    console.log('hola');
  },
};
//console.log(objeto);
//console.log(objeto.nombre);
//console.log(objeto['apellido']);
//console.log(objeto.saludar());
//console.log(typeof objeto);
//console.log(objeto instanceof Object);

class ClasePersona {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }
}

const persona1 = new ClasePersona('pepita', 'pérez');
//console.log(persona1);
const persona2 = new ClasePersona('john', 'doe');
//console.log(persona2);

/*
Control de flujo
*/
const condicion = true;
if (condicion) {
  //console.log('se cumplió la condición');
} else if (condicion) {
  //console.log('se cumplió la 2da condición');
} else {
  //console.log('no se cumplió la condición');
}

const operadorTernario = condicion
  ? 'se cumplió la condición'
  : 'no se cumplió la condición';
//console.log(operadorTernario);

const valorDado = 'anonimo';
switch (valorDado) {
  case 'admin':
    //console.log('es administrador');
    break;
  case 'secre':
    //console.log('es secretario');
    break;
  case 'user':
    //console.log('es usuario');
    break;
  default:
    //console.log('no está logueado');
    break;
}

for (let i = 0; i < 4; i++) {
  //console.log('for... iteración', i);
}

let i = 0;
while (i < 4) {
  //console.log('while... iteración', i);
  i++;
}

i = 10;
do {
  //console.log('do...while... iteración', i);
  i++;
} while (i < 4);

// Truthy and Falsy
let verdadero = true;
verdadero = {};
verdadero = [];
verdadero = -1;
verdadero = 1;
verdadero = '0';
verdadero = 'false';
verdadero = ' ';
verdadero = new Date();
verdadero = Infinity;
verdadero = -Infinity;
if (verdadero) {
  //console.log('el valor es Trusthy');
}

let falso = false;
falso = 0;
falso = -0;
falso = '';
falso = null;
falso = undefined;
falso = NaN;
if (!falso) {
  //console.log('el valor es Falsy');
}

/*
Operadores
*/
const numero1 = 10;
const numero2 = 5;
let resultado = null;
resultado = numero1 + numero2;
resultado = numero1 - numero2;
resultado = numero1 * numero2;
//console.log('valor: ', resultado);
//console.log('tipo de dato: ', typeof resultado);
//console.log(`${numero1} x ${numero2} = ${resultado}`);
//console.log(numero1 + ' x ' + numero2 + ' = ' + resultado);
resultado = numero1 / numero2;
resultado = numero1 % numero2;
const cadena1 = 'ab';
const cadena2 = 'cd';
//resultado = cadena1 + cadena2;
let numero = 0;
//console.log(numero);
numero++;
//console.log(numero);
numero--;
//console.log(numero);
resultado = ++numero;
//console.log(resultado);
resultado = --numero;
//console.log(resultado);
resultado = 1 < 1;
resultado = 1 <= 1;
resultado = 1 > 1;
resultado = 1 >= 1;
resultado = 1 == 1;
resultado = 1 == '1';
resultado = 1 === '1';
resultado = 'hola' < 'ola';
resultado = 'hola' < 'bola';
resultado = 10 === 10;
//console.log(!resultado);
resultado = 10 === 10 && 5 === 5;
resultado = 10 === 10 || 5 === 6;
//console.log(resultado);

/*
Interacción
*/
//console.log('Imprimir en consola');
//alert('Imprimir en pantalla');
//const confirmado = confirm('Imprimir en pantalla, retorna un booleano');
//console.log(confirmado);
//const entrada = prompt('Mostar mensaje en pantalla y leer dato de usuario');
//console.log(entrada);

/*
Conversión de tipos
*/
let conversion = '10';
//console.log('valor: ', conversion);
//console.log('tipo de dato: ', typeof conversion);
//conversion = +conversion;
//console.log('valor convertido: ', conversion);
//console.log('tipo de dato convertido: ', typeof conversion);
//conversion = parseInt(conversion);
//console.log('valor convertido: ', conversion);
//console.log('tipo de dato convertido: ', typeof conversion);
conversion = parseFloat(conversion);
//console.log('valor convertido: ', conversion);
//console.log('tipo de dato convertido: ', typeof conversion);

/*
Tipos de datos primitivos
*/
let datoPrimitivo = undefined;
datoPrimitivo = null;
datoPrimitivo = '';
datoPrimitivo = 'a';
datoPrimitivo = 'abc';
datoPrimitivo = 10;
datoPrimitivo = 10.5;
datoPrimitivo = NaN;
datoPrimitivo = true;
datoPrimitivo = false;
//console.log('valor: ', datoPrimitivo);
//console.log('tipo de dato: ', typeof datoPrimitivo);

/*
Ámbito de las variables
*/
var variableVarGlobal = 'variable global VAR';
let variableLetGlobal = 'variable global LET';
//console.log('desde fuera del bloque: ', variableVarGlobal);
//console.log('desde fuera del bloque: ', variableLetGlobal);
{
  //console.log('desde dentro del bloque: ', variableVarGlobal);
  //console.log('desde dentro del bloque: ', variableLetGlobal);
}

{
  var variableVarLocal = 'variable local VAR';
  let variableLetLocal = 'variable local LET';
  //console.log('desde dentro del bloque: ', variableVarLocal);
  //console.log('desde dentro del bloque: ', variableLetLocal);
}
//console.log('desde fuera del bloque: ', variableVarLocal);
//console.log('desde fuera del bloque: ', variableLetLocal);

/*
Variables
*/
var variableVar = null;
let variableLet = null;
const variableTipoConstante = null;
//console.log(variableVar);
//console.log(variableLet);
//console.log(variableTipoConstante);
