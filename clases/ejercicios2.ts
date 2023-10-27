// Ejercicios JS post-clase 2 : ejercicios con funciones de arrays + otras funciones.

const arr : number[] = [1,2,3,4,5,6,7,8,9];

// Ej1 : Dado un array de números, escribe una función que encuentre el número más grande en el array.

function numMayorDe (arr:number[])  {
    let mayor : number = arr[0];
    arr.forEach(element => {
        element > mayor && (mayor = element);
    });
    return mayor;
}

let numMayorFlecha = arr[0];
arr.forEach(e => (e > numMayorFlecha) && (numMayorFlecha = e));

console.log("Numero Mayor : " + numMayorDe(arr)) + "\n";
console.log("Numero Mayor con funcion 'forEach' sobre array: " + numMayorFlecha) + "\n\n";

/*
    Ej2 :
    Escribe una función que determine si una cadena de texto 
    es un palíndromo (se lee igual de izquierda a derecha que 
    de derecha a izquierda), ignorando espacios y mayúsculas/minúsculas.
*/

const arrStr : string[] = ["ElPepe","ala","Hola que tal","Anita lava la tina"];

function esPalindromo (str : string) {
    const limpia = str.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
    const reversa = limpia.split('').reverse().join('');
    return limpia === reversa;   
}

arrStr.forEach(str=> console.log("\nLa cadena '" + str + "' es palindroma : " + esPalindromo(str) + "\n"));
const arrPalindromas = arrStr.filter(str => esPalindromo(str));
console.log("Array de cadenas palindromas : [" + arrPalindromas + "]\n");








