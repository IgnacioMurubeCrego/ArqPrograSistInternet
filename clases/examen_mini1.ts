// const numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const numeroPares : number[] = numeros.filter(e => e % 2 === 0);
// console.log(numeroPares);

interface Estudiante {
    nombre : string;
    nota : number;
}

// const estudiantes: Estudiante[] = [
//     { nombre: "Alicia", nota: 85 },
//     { nombre: "Luis", nota: 70 },
//     { nombre: "Carlos", nota: 45 },
//     { nombre: "David", nota: 60 },
//   ];

//   const aprobados : Estudiante[] = estudiantes.filter(e => e.nota >= 60);
//   console.log(aprobados);


//   const numeros: number[] = [5, 10, 15, 20, 25];

//   const suma : number = numeros.reduce((acc,e) => acc+e,0);
//   console.log(suma);

// const estudiantes: Estudiante[] = [
//     { nombre: "Alicia", nota: 85 },
//     { nombre: "Jose", nota: 70 },
//     { nombre: "Carlos", nota: 92 },
//     { nombre: "David", nota: 88 },
//   ];

//   const menosDe50 : boolean = estudiantes.some(e => e.nota < 50);
//   console.log(menosDe50);

// const numeros: number[] = [1, 2, 3, 4, 5, 6];

// const numeros2 : number[] = numeros.map(e => {
//     if(e % 2 === 0) return e*2;
//     else return e*3;
// })
// console.log(numeros2);

// const estudiantes: Estudiante[] = [
//     { nombre: "Alice", nota: 85 },
//     { nombre: "Bob", nota: 70 },
//     { nombre: "Charlie", nota: 92 },
//     { nombre: "David", nota: 88 },
//   ];

// const todosMasDe50 : boolean = estudiantes.every(e => e.nota > 50);
// console.log(todosMasDe50);

const palabras: string[] = ["manzana", "banana", "fresa", "kiwi", "sandía"];

const masLarga : string = palabras.reduce((p : string, e : string) => e.length > p.length ? e : p,"");
console.log(masLarga);