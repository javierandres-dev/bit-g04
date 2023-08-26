//console.log('Works!');
/*
Modo estricto
*/
'use strict';
//nombre = 'pepita';
//console.log(nombre);

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

/*
Pedir nombre y edad al usuario y responder si es o no es mayor de edad.
si se llama Pepita y es mayor de edad permitir ingreso a sala de espera 1,
si se llama Pepita y es menor de edad permitir ingreso a sala de espera 2,
si no se llama Pepita pero es mayor de edad permitir ingreso a sala de espera 3,
sino dirigir a la sala de espera general.
*/
/*
const nombre = prompt('Ingrese su nombre: ');
const edad = parseInt(prompt('Ingrese su edad: '));
let esMayorDeEdad = false;
if (edad >= 18) {
  alert(`${nombre} es mayor de edad`);
  esMayorDeEdad = true;
} else {
  alert(`${nombre} es menor de edad`);
}
const esPepita = nombre === 'pepita' ? true : false;
const caso =
  esPepita && esMayorDeEdad
    ? '1'
    : esPepita && !esMayorDeEdad
    ? '2'
    : !esPepita && esMayorDeEdad
    ? '3'
    : '4';
switch (caso) {
  case '1':
    alert(`${nombre} pasar a la sala de espera ${caso}`);
    break;
  case '2':
    alert(`${nombre} pasar a la sala de espera ${caso}`);
    break;
  case '3':
    alert(`${nombre} pasar a la sala de espera ${caso}`);
    break;
  default:
    alert(`${nombre} pasar a la sala de espera general`);
    break;
}
*/
