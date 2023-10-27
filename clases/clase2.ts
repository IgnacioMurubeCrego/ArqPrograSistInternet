let arr=[1,2,3];
const arr2 = [1,2,3];

arr = [1,2];

console.log("Array arr : [" + arr + "]");

const porDos = (a:number) => a=2*a;
let c = 5;
porDos(c);
console.log(c);

// Observamos que como esta función hace ref. al array 'a' original SI modifica el valor de a[0].

const changeArr = (arr:number[]) => arr[0] = 7;
let a = [2,5];
changeArr(a);

console.log("Array a : [" + a + "]");

/* El objetivo de JS es manipular arrays masivos de objetos, 
    por lo que se han añadido funciones especialmente para manipular arrays.

    IMPORTANTE : HAY QUE RESPETAR LA TAREA ESPECIFICA PARA LA CUAL SE HA CREADO C/METODO.

*/

// Metodos de arrays :

// forEach : Es para hacer algo sobre c/dato de un array, pero NO para modificar esos datos.

// forEach((elem,index)=> ...INSTRUCCIONES... )

arr.forEach((element,index) => console.log("Element " + index + " : " + element*2) );

arr = [1,7,8,45,3,52];

arr.forEach(Element => Element > 5 && console.log(Element) ) 

// MAP : arr.map((elem,index) => )
// Tengo un array y lo transformo en otro array. Por ej : [1,7,8] --> [1,14,16] 

const arrP : string[]= ["Maria","Jesus","David","Nicanor", "José","Pepe","Luciano"];

arrP.map((elem : string) =>  elem.length)
    .forEach(element => console.log(element));

// FILTER : Devuelve un array de elementos filtrados de otro array (Agarra un subconjunto del array original).

const arrFilter = arr.filter((elem,i) => elem%2 === 0);
const arrPFilter = arrP.filter((elem) => elem.length > 4);

console.log("Array filtrado : [" + arrFilter + "]");
console.log("Array de nombres filtrado : [" + arrPFilter + "]");

// SOME : Busca si algun elemento del array cumple con una condicion, si lo encuentra, para de buscar. Devuelve un BOOLEANO.

let palabraDe7 : boolean = arrP.some(p => {
    console.log(p);
    return p.length === 7;
})

console.log("\n\n");

palabraDe7 = arrP.every( p=> {
    console.log(p);
    return p.length === 7;
})

// FIND : Devuelve el 1er elemento o referencia que cumpla las condiciones de busqueda. 

const arr3 : Array<Array<number>> = [[1,2],[3,2],[5,4,3]];
const encontrado = arr3.find((elem,i) => elem[0] === 3 && elem[1] === 2);
console.log(arr3);
if(encontrado) encontrado.push(7);
console.log(arr3);

arrP.filter((elem) => elem.length > 5)
    .map((elem) => elem.substring(0,2))
    .forEach(elem => console.log(elem));

// 2da Parte : Objetos === Combinaciones Clave , Valor ; 
// ejemplo : const yo = {name : "Ignacio", age : 22, hasCar : False, saluda : () => console.log("hola")};

// En TypeScript SI es necesario definir el tipo de mi objeto :

type House = {
    m2 : number,
    rooms : number,
}

type Persona = {
    name : string,
    age : number,
    hasCar : boolean,
    friends? : string[],
    house? : House, // La '?' que el attr. es opcional.
}

const p1 : Persona = {
    name : "Alberto",
    age : 18,
    hasCar : true,
    friends :["Jose","Maria"],
    house : {
        m2 : 100,
        rooms : 4
    }
}

console.log(p1.name);

// Distintas formas de indexar un attr. opcional de un objeto.

if(p1.house) console.log(p1.house?.rooms);
p1.house && console.log(p1.house?.rooms);
console.log(p1.house?.rooms);
console.log(p1.house?.rooms || "No tiene casa");

// Este NO : (Unicamente cuando esta MUY justificado)
console.log(p1.house!.rooms); // La '!' indica que p1 TIENE casa ; No debe usarse en general por precaucion.

const arrPers : Persona[]= [{name : "Alberto",age : 18,hasCar : false}, {name : "Maria",age : 21,hasCar : false}, {name : "Javier",age : 23, hasCar : true}];

const algunoTieneCoche : boolean = arrPers.some(p => p.hasCar);
console.log("Alguno Tiene Coche : " + algunoTieneCoche);
const nombres : string[] = arrPers.filter(p=>p.hasCar).map(p=>p.name);
console.log(nombres);

// El filter recorre todo el array.
const todasTienenCoche = arrPers.filter(p => p.hasCar).length === arrPers.length; 
// Mejor usando EVERY dado que en cuanto encuentra un objeto que cumpla la condicion para de recorrer el array.
const todasToditas = arrPers.every(p => p.hasCar);

const ultimoConCoche = (arr : Array<Persona>) => arr.reverse().find(p=> p.hasCar);
const ultimoConCocheNuevo = arrPers.findLast(p=>p.hasCar); // Nuevo Metodo.
console.log(ultimoConCoche(arrPers));
console.log(ultimoConCocheNuevo);