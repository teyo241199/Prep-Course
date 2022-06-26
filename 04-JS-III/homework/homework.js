// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length-1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for (let i=0;i<array.length;i++){
    console.log( array[i]+1);
  }
 }


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var x="";
  for (let i=0;i<palabras.length;i++){
    x=x + " " + array[i];

  }
  console.log(x);
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for (let i=0;i<array.length;i++){
    if (elemento==array[i]){
        return true;
    }
   
  }
  return false;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var x = 0;
  for (let i=0;i<numeros.length;i++){
    x=x+numeros[i];
  }
  return x;   
  }



function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var x = 0;
  for (let i=0;i<resultadosTest.length;i++){
    x=x+resultadosTest[i];
  }
  return x/resultadosTest.length;

}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var mayor=numeros[0];
  for (let i=0;i<numeros.length-1;i++){
    if ( mayor<numeros[i+1]){
      mayor=numeros [i+1];
    }
    
  }
  return mayor;
}


function multiplicarArgumentos(a,b,c) {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var x=1;
  for (let i=0;i<arguments.length;i++){
    x=x*arguments[i];
  }
  if(arguments.length>0){return x;}
  else {return 0;}
  
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var x = 0;
  for (let i=0;i<arreglo.length;i++){
    if (arreglo [i]>18){x=x+1;}
  }
  return x;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  
    if(numeroDeDia==1||numeroDeDia==7)
    {
      return "Es fin de semana";
    }
    else{
      return "Es dia laboral";  
    }
  
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var x = n.toString();
  if (x[0]==9){return "numero empieza en 9"}
  else return "otro numero";
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  var x = 0;
  var i=1;
  while(i<arreglo.length)
  {
      if(arreglo[i-1]==arreglo[i]) x=1
      else x=0;
      i=i+1;
  }
  if (x==0) return "Numeros diferentes";
  else return "numeros iguales";
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
var array2= [];
var x=0;

for (let i=0;i<array.length;i++){
  if(array[i]=="Enero"||array[i]=="Marzo"||array[i]=="Noviembre"){
    array2.push(array[i]);
    x=1;
  }
  else x=0;
}
if (x==1) return array2;
else return "meses no encontrados"; 
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:

var array2= [];
var x=0;

for (let i=0;i<array.length;i++){
  if(array[i]>=0&&array[i]<=200){
    if(array[i]>100){
      array2.push(array[i]);
    }
  }
}
return array2;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var x=0;
  var numero2= new Array();
  while(x<10){
    numero2[x]=numero[x]+2;
    x=x+1;
    if (x==numero2[x]) {return "se interrumpe ejecucion";break;}
    
  }
  return numero2;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:

  var x=0;
  var numero2= new Array();
  while(x<10){
    numero2[x]=numero[x]+2;
    x=x+1;
    if (x==5) {x=x+1;continue;}
    
  }
  return numero2;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
