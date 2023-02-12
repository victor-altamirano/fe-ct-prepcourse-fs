/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
    return string;
}



// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   // Retorna el resultado de su suma.
   var suma = x + y;
   return suma;
   
}

function resta(x, y) {
   var resta = x - y;
   return resta;
}

function divide(x, y) {
   // Retorna el resultado de su división.
   var divide = x / y;
   return divide;
}

function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   var multiplica = x * y;
   return multiplica;
}

function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   var obtenerResto = x % y;
   return obtenerResto;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
