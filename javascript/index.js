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
    console.log('es administrador');
    break;
  case 'secre':
    console.log('es secretario');
    break;
  case 'user':
    console.log('es usuario');
    break;
  default:
    console.log('no está logueado');
    break;
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
