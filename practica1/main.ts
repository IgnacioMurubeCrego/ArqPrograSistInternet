// Arquitectura y Programacion de Sistemas en Internet - Practica 1 - Ignacio Murube Crego

<<<<<<< HEAD
    // Space Seed :

// 1.  

// Interfaz pasajero :

type Passenger = {
    origin? : string;
    name? : string;
    height : number;
    age : number;
    weight : number;
    gender : string;
} 

// Algunos pasajeros y rescatados :

const Kirk : Passenger = {
    name : "James T. Kirk",
    origin : "Tierra",
    height : 1.78,
    age : 92,
    weight : 79,
    gender : "H"
}

const Spock : Passenger = {
    name : "Sr.Spock",
    height : 1.82,
    age : 231,
    weight : 78,
    gender : "H"
}

const JeanLuc : Passenger = {
    name : " Jean-Luc Picard",
    origin : "Tierra",
    height : 1.84,
    age : 63,
    weight : 85,
    gender : "H"
}

const rescatado1 : Passenger = {
    origin : "Marte",
    height : 1.80,
    age : 23,
    weight : 78,
    gender : "H"
}

const rescatado2 : Passenger = {
    origin : "Venus",
    name : "Alkedtjar",
    height : 1.60,
    age : 34,
    weight : 67,
    gender : "M"
}

const passengers : Array<Passenger> = [Kirk,Spock,JeanLuc,rescatado1,rescatado2];
=======
// · Space Seed :

// 1.

type Passenger = {
  origin? : string
  name? : string
  height : number
  weight : number
  gender : string
}

const p1 : Passenger = {
  height : 1.43,
  weight : 50,
  gender : "M"
}

const p2 : Passenger = {
  origin : "Mars",
  name : "Alekdtir",
  height : 1.61,
  weight : 47,
  gender : "F"
}

const survivors : Array<Passenger> = [p1,p2];
>>>>>>> fede4029c756994cf084bbf93081cdd197a8405f

// 2.

interface Capsule {
<<<<<<< HEAD
    peso : number;
    dimensiones : number[];
    capVelCurv : number;
    passengers : Passenger[];
=======
  weight : number
  dimensions : Array<number>
  curvSpeedCap : number
  passengers : Array<Passenger>
}

const escapeCapsule : Capsule = {
  weight : 50000,
  dimensions : [30,10,20],
  curvSpeedCap : 4000,
  passengers : survivors
} 

// 3.

const james : Passenger = {
  origin : "Earth",
  name : "James Tiberius Kirk",
  height : 1.80,
  weight : 85,
  gender : "M"
}

const spock : Passenger = {
  origin : "Vulcan",
  name : "Spock",
  height : 1.60,
  weight : 76,
  gender : "M"
}

const leonard : Passenger = {
  origin : "Earth",
  name : "Leonard Horatio McCoy",
  height : 1.82,
  weight : 83,
  gender : "M"
>>>>>>> fede4029c756994cf084bbf93081cdd197a8405f
}

// 3.

let enterprise : Capsule = {
<<<<<<< HEAD
    peso : 350000,
    dimensiones : [3000,2000,10000],
    capVelCurv : 500000,
    passengers : passengers
};

// 4. 

const dataKeys : string[][] = enterprise.passengers.filter(p => p.name).map(p => Object.keys(p));
const dataValues : (string|number)[][] = enterprise.passengers.filter(p => p.name).map(p => Object.values(p));

const dataCrew : Array<(string|number)[][]> = [dataKeys,dataValues];

// Impresiones por pantalla :

console.log("\n\n\n Space Seed : \n\n\n");
passengers.forEach(e => console.log('\nPasajero : ',e));
console.log('\nDatos del Enterprise : ',enterprise);
console.log(Object.keys(enterprise.passengers[0]));
console.log("\nDatos de los tripulantes con nombre :",dataCrew);


    //  This Side of Paradise :
=======
  weight : 750000,
  dimensions : [700,560,355],
  curvSpeedCap : 100000,
  passengers : [james,spock,leonard,p1,p2]
}

// 4.

const survivorsData : (string|number)[][][] = survivors.filter((s : Passenger) => s.name)
                                                                           .map((s : Passenger) =>  [Object.keys(s),Object.values(s)]);

// Impresiones por pantalla :

console.log("\n\n\n Space Seed \n\n\n");
console.log("Datos de los tripulantes de la capsula : ",survivors);
console.log("\nDatos de la capsula de escape : ",escapeCapsule);
console.log("\nDatos del Enterprise : ",enterprise);
console.log("\nDatos de los rescatados con nombre : ",survivorsData);

// · This Side of Paradise :
>>>>>>> fede4029c756994cf084bbf93081cdd197a8405f

// 1.

interface CrewMember extends Passenger {
<<<<<<< HEAD
    sano : boolean;
}

let survivors : CrewMember[] = [];

// Transformamos a los pasajeros en tripulantes que pueden estar o no infectados,
// y los introducimos en el array de supervivientes :

passengers.forEach(pas => {
    const t : CrewMember ={
        ...pas,
        sano : Boolean(Math.round(Math.random()))
    }
    survivors.push(t);
});

function showSaneSurvivors (arr : Array<CrewMember>) {
    console.log("\n\nTripulantes Sanos :\n\n")
    arr.filter(e => e.sano).forEach(element => console.log(element));
}

// 2.

// Funcion de comprobacion:
function showSomeInfected (arr : Array<CrewMember>){
    arr.every(tripulante => tripulante.sano) ? 
    console.log("\nLa tripulacion ha sido curada.") : console.log("\nAlgun tripulante esta infectado.");
}

// Funcion para curar a todos:
function healAll (arr : Array<CrewMember>){
    arr.forEach(tripulante => tripulante.sano = true)
}

// Funcion para generar un numero pseudoaleatorio en un rango:
function getRandomInt(min : number, max : number) : number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Funcion para infectar un tripulante aleatorio :
function infectOne (arr : Array<CrewMember>) : Array<CrewMember> {
    arr[getRandomInt(0,arr.length-1)].sano = false;
    return arr;
=======
    infected : boolean
}

let crew : Array<CrewMember> = enterprise.passengers.map((p : Passenger) => {
    const member : CrewMember = {
      ...p,
      infected : Boolean(Math.random())
    }
    return member;
})

const saneCrew : Array<CrewMember> = crew.filter((cm : CrewMember) => cm.infected = false);

// 2.

function randomInt(min : number, max : number) { 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function someInfected(crew : Array<CrewMember>) : boolean {
  return crew.some((cm : CrewMember) => cm.infected === true)
}

function healAll(crew : Array<CrewMember>) : Array<CrewMember> { 
    const healthyCrew = crew.map((cm : CrewMember) => {
      cm.infected = false
      return cm;
    });
    return healthyCrew;
}

function allHealthy(crew : Array<CrewMember>) : boolean{
    return crew.every((cm : CrewMember) => cm.infected === false);
}

function infectCrew(crew : Array<CrewMember>) : Array<CrewMember>{
  for(let i = 0 ; i < randomInt(0,crew.length/2) ; i++){
    crew[randomInt(0,crew.length-1)].infected = true;
  }
  return crew;
}

function findNextInfected(crew : Array<CrewMember>) : CrewMember|undefined{
  return crew.find((cm : CrewMember) => cm.infected === true);
>>>>>>> fede4029c756994cf084bbf93081cdd197a8405f
}

// Impresiones por pantalla :

<<<<<<< HEAD
console.log("\n\n\n This Side of Paradise : \n\n\n");

// La infeccion se distribuye entre la tripulacion del Enterprise :
for(let i = 0 ; i < getRandomInt(1,survivors.length/2) ; i++){
    survivors = infectOne(survivors);
}

// Kirk aún esta sano.
survivors.filter(s => s.name === "James T. Kirk")[0].sano = true;
showSaneSurvivors(survivors);

// Comprobamos si algun tripulante esta infectado.
showSomeInfected(survivors);

// Si hay algun infectado curamos a la tripulacion y chequeamos que todos han sido curados.
if(!(survivors.every(s => s.sano))){
    healAll(survivors);
    showSomeInfected(survivors);
}

// Infectamos varios tripulantes aleatoriamente y buscamos al primero que encontremos :
for(let i = 0 ; i < getRandomInt(1,survivors.length/2) ; i++){
    survivors = infectOne(survivors);
}
console.log("\nProximo infectado : ",survivors.find(s => s.sano === false));


        // The City on the Edge of Forever :

// 1.

// Listado de fechas
const datesList : Array<string> = 
["2342-56-98-03-15-03","-234","2532-87-61-35-42-40","-3421","2001-84-65-13-58-23"];

// Filatramos las fechas comprensibles :
const okDates : Array<string> = datesList.filter((date : string) => parseInt(date) > 0);

// 2.

// Transformamos las fechas para obtener instantes exactos :
const dateTimeStamps : Array<Array<string>> = okDates.map((date : string) => {
    const strDate : string = date.slice(0,11).split('-',3).join('/');
    const strTime : string = date.slice(11,date.length).split('-').join(':');
    const dateArray : Array<string> = [strDate,strTime];
    return dateArray;
});

// Impresiones por pantalla :

console.log("\n\n\n The City on the Edge of Forever : \n\n\n");
console.log("Fechas Halladas : ",datesList);
console.log("Fechas Comprensibles : ",okDates);
console.log("Fechas Exactas : ",dateTimeStamps);

        // The Trouble with Tribbles
=======
console.log("\n\n\n This Side of Paradise \n\n\n");
console.log("Miembros sanos de la tripulacion : ",saneCrew);
console.log("\nComprobando el estado de infeccion : ");
console.log(someInfected(crew) ? "\nHay alguien infectado entre la tripulacion." : 
                                 "\nToda la tripulacion esta sana.")
crew = healAll(crew);
console.log("\n\nComprobando el estado de infeccion : ");
console.log(allHealthy(crew) ? "\nToda la tripulacion esta sana." :
                               "\nHay alguien infectado entre la tripulacion.")

crew = infectCrew(crew);
console.log("\n\nProximo Infectado : ",findNextInfected(crew) ? 
                                       findNextInfected(crew) : "No hay infectados");


// · The City on the Edge of Forever :

// 1.

function genDates(n : number) : Array<string> {
  const dates : Array<string> = [];
  for(let i = 0 ; i < n ; i++){
    let year : string = (randomInt(-9999,9999).toString()).concat("-");
    while(year.length < 5) year = "0".concat(year);
    let month : string = (randomInt(1,12).toString()).concat("-");
    if(month.length === 2) month = "0" + month;
    let day : string = (randomInt(1,30).toString()).concat("-");
    if(day.length === 2) day = "0" + day;
    let hour : string = (randomInt(0,23).toString()).concat("-");
    if(hour.length === 2) hour = "0" + hour;
    let minute : string = (randomInt(0,60).toString()).concat("-");
    if(minute.length === 2) minute = "0" + minute;
    let second : string = (randomInt(0,60).toString());
    if(second.length === 1) second = "0" + second;

    dates.push(year+month+day+hour+minute+second);
  }
  return dates;
}

const dateList : Array<string> = genDates(10);
const okDates : Array<string> = dateList.filter((d : string) => parseInt(d) > 0);

// 2.

const exactDates : Array<Array<string>> = okDates.map((d:string) => {
  const yearMonthDay : string = d.slice(0,10).split('-').join('/');
  const timeStamp : string = d.slice(11,d.length).split('-').join(':');
  return [yearMonthDay,timeStamp];
})

// Impresiones por pantalla :

console.log("\n\n\n This Side of Paradise \n\n\n");
console.log("\nLista de fechas encontradas : ",dateList);
console.log("\nLista de fechas comprensibles : ",okDates);
console.log("\nLista de fechas exactas : ",exactDates);

// · The Trouble with Tribbles :
>>>>>>> fede4029c756994cf084bbf93081cdd197a8405f

// 1.

interface turboConduct{
<<<<<<< HEAD
    num : number
    damage : number;
    numTribbles : number;
}

// Generacion de lista de conductos con valores aleatorios : 

function scanConducts(num : number) : Array<turboConduct> {
    const arr : Array<turboConduct> = [];
    for(let i = 0 ; i < num ; i++){
        const conduct : turboConduct = {
            num : i,
            damage : getRandomInt(0,100),
            numTribbles : getRandomInt(0,100)
        }
        arr.push(conduct);
    }
    return arr;
}

const conductList : Array<turboConduct> = scanConducts(10);

// Obtenemos el  número total de tribbles en todos los turbo conductores con  más de 20 daños:

const numOfTribbles : number = 
conductList.reduce((acc : number, e : turboConduct) => e.damage > 20 ? acc+e.numTribbles : acc,0);

// Señal lisa de un nivel que pase en serie el número del turbo conductor, 
// sus daños y el número de tribbles, uno tras otro, sin diferenciarlos :

const flatSignal : Array<number> = conductList.map((e : turboConduct) => [e.num,e.damage,e.numTribbles]).flat();

// Mandando solo datos de  peligro o no, si el número de tribbles supera en un 50% al de los daños:

const conductState : Array<string> = conductList.flatMap((c : turboConduct) => 
(c.numTribbles > c.damage*(1.5)) ? "Conduct"+c.num+"->IN_DANGER": "Conduct"+c.num+"->OK");

// Impresiones por pantalla :

console.log("\n\n\n The City on the Edge of Forever : \n\n\n");
console.log("\nResultados del escaneo de conductos: ",conductList);
console.log("\nNumero Total de Tribbles en todos los turbo conductos con >20 danios : ",numOfTribbles);
console.log("\nSeñal Plana : ",flatSignal);
console.log("\nEstado de los conductos : ",conductState);
=======
  serialNum : number
  damage : number
  tribbles : number
}

function genConducts(n : number) : Array<turboConduct>{
    const conducts : Array<turboConduct> = [];
    for(let i = 1; i < n+1 ; i++){
      const conduct : turboConduct = {
        serialNum : i,
        damage : randomInt(0,100),
        tribbles : randomInt(0,100)
      }
      conducts.push(conduct);
    }
    return conducts;
}

const scanedConducts : Array<turboConduct> = genConducts(10);
const numOfTribbles : number = scanedConducts.reduce((acc: number, c : turboConduct) => (c.damage > 20) ? acc+c.damage : acc,0);
const flatSignal : Array<number> = scanedConducts.map((c : turboConduct) => {
    return [c.serialNum,c.damage,c.tribbles];
}).flat();
const conductState : Array<string> = scanedConducts.flatMap((c : turboConduct) => (c.tribbles > c.damage*(1.5)) ? "IN_DANGER" : "OK");

// Impresiones por pantalla :

console.log("\n\n\n The Trouble with Tribbles \n\n\n");
console.log("\nLista de turbo conductos : ",scanedConducts);
console.log("\nNumero total de Tribbles en los conductos con >20 danios : ",numOfTribbles);
console.log("\nSenial lisa de 1 nivel : ",flatSignal);
console.log("\nEstado de los turbo conductos : ");
conductState.forEach((text:string, index : number) => console.log("CONDUCT "+index.toString()+"->"+text));


>>>>>>> fede4029c756994cf084bbf93081cdd197a8405f







