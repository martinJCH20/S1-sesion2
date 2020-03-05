var cliente = {
    "name":"Gerardo",
    "lastName":"julca",
    "age": 27,
    "location" : "Lima",
    "work" : {
        "company":"Helisur"
    },
    "isworking": true,
    "shoppinglist" : ["water","juice"],
    "number":function(){
        return 12;
    }
}

//console.log('cliente:',cliente.work);
//console.log('work:',cliente.work.company);
//console.log("number", cliente.number());
//console.log("value", cliente.number() === 12 ? cliente.name : cliente.isworking);
//console.log("value", cliente.number() === 3 ? cliente.name : cliente.isworking);

var menufooter = [
    {"title" : "Consultas",
    "navigationName" : "Consultas",
    "image" : "",
    "imageActive" : ""
    },
    {"title" : "Operaciones",
    "navigationName" : "Salud mental",
    "image" : "",
    "imageActive" : ""
    },
    {"title" : "Contacto",
    "navigationName" : "Ubícanos",
    "image" : "",
    "imageActive" : ""
    }
]

// console.log('menufooter', menufooter.map(function(item, index){
//     if(item.navigationName === 'Operaciones'){
//         return item.navigationName;
//     }else{
//         //console.log('item else', item);
//         return item;
//     }
//     //console.log('item', item);
//     //console.log('item', index);
//     //return item;
// }))

var operadores = [
    {
        "id" : 1,
        "descripcion" : "Claro"
    },
    {
        "id" : 2,
        "descripcion" : "Movistar"
    },
    {
        "id" : 3,
        "descripcion" : "Entel"
    }
]

// console.log('Operadores', operadores.map((item, index) => {
//     console.log('item ', item)
// }))

var operadores2 = [
    {
        "id" : 1,
        "descripcion" : "Claro"
    },
    {
        "id" : 2,
        "descripcion" : "Movistar"
    }
]

const menuarray =  operadores2.push({
    "id" : 3,
    "descripcion" : "Bitel"
})

//console.log("Menu Array", menuarray);

var listaCompras = ["Agua", "Gaseosa", "Papel"];

const menuarray2 = listaCompras.push("carne"); 
//console.log("Menu Array", listaCompras);

var partylist = [
    {
        "id" : 1,
        "name" : "water",
        "description" : "to drink"
    },
    {
        "id" : 2,
        "name" : "coke",
        "description" : "to drink"
    }
]

const newPartylist = partylist.push({"id" : 3, "name" : "fish", "description" : "to drink"});
//console.log("Menu Array", partylist);

//Ordena el unshift
const newPartylist2 = partylist.unshift({"id" : 0, "name" : "Beer", "description" : "to drink"});
//console.log("Menu Array", partylist);

// const cars = (name, age, location, owner) => {
//     this.name = name;
//     this.age = age;
//     this.location = location;
//     this. owner = owner;
// }

// var newCar = new ('Ford', '1992','Francia','Julca');

//console.log('new car: ', newCar);

class Person {constructor(fname, lname){
    this.firstName = fname;
    this.lastName = lname;
}}

let person = new Person('Martin', 'Julca');
//console.log('person', person);

person["age"] = 27;
//console.log('person', person);

const nuewPeople = {
    ...person,
    "location" : "Lima"
}

//console.log('newperson', nuewPeople);
