// Clase 3 ejercicios : 

// Mongo Atlas => Crear Cuenta

// Array function REDUCE examples

const arr : number[] = [1,2,5,7,8];
const arr4 : number[] = [2,3,4,45,5,4,4,3,65,23,23];
const arrP : string[] = ["Pepe","Hola","LaPiedra","Pizza"];

const res : number = arr.reduce((x,e) => {
    console.log(x>e?x:e);
    return x>e?x:e;
},0)

/*
    Secuencia paso a paso :
    x = 0 ; e = 1 => x = 0+1,
    x = 1 ; e = 2 => x = 1+2,
    x = 3 ; e = 5 => x = 3+5,
    x = 8 ; e = 7 => x = 8,
    x = 8 ; e = 8 => x = 8 

    Entonces, esta funcion se queda con el numero maximo del array.
*/

console.log(res);

// Filter solo pares : con Reduce

const evenNum = arr.reduce((acc : number[], e) => {
    e%2 === 0 && acc.push(e);
    return acc;
},[])

console.log(evenNum);

// que sume todos los elementos de un array

const suma : number = arr.reduce((acc : number, e) => acc+e,0)

console.log(suma);

// que calcule el producto de todos los elementos del array

const producto : number = arr.reduce((acc : number, e) => acc*e,1)

console.log(producto);

// promedio

const media = arr.reduce((acc,e) => (acc+e)/arr.length,0);

console.log(media);

// valor minimo

const minimo = arr.reduce((min,e) => min < e ? min : e);
console.log(minimo);

// concatenar strings

const conc = arrP.reduce((str,e) => str.concat(e),"");
console.log(conc);

// cuantas veces aparece un elemento

const conteo = arr4.reduce((cuenta,e) => e === 4 ? cuenta+1 : cuenta,0);
console.log(conteo);

// eliminar duplicados de un array

const sinDuplicados : number[] = arr4.reduce((acc : number[],e) => {
    if(acc.includes(e))
        return acc;
    else 
        return [...acc,e];
},[])

console.log(sinDuplicados);

// solo mayores que 5

const mayorQue5 : number[] = arr4.reduce((acc : number[], e) => e > 5 ? [...acc,e] : acc,[])

console.log(mayorQue5);
