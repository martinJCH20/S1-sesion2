const task = {
    "Actividad 1" : "Crear objeto",
    "Actividad 2" : "Utilizar el objeto",
    "Actividad 3" : "Modificar un  objeto",
    "Actividad 4" : "Crear objeto a partir de un objeto creado"
}

var alumno = {
    "name":"Gerardo Martín",
    "lastName":"julca Chumpitaz",
    "age": 27,
    "location" : "Lima"
}


console.log('Actividad 1:',alumno);

var cursos = [
    {
        "id" : 1,
        "descripcion":"Apps"
    },
    {
        "id" : 2,
        "descripcion":"Frond end"
    }
]

 console.log('Actividad 2', cursos.map(function(item, index){
     if(item.descripcion === 'Frond end'){
         return item.descripcion;
     }else{
         return item;
     }
}))

const newCurso = cursos.push({"id" : 3, "descripcion":"BackEnd"}); 

console.log("Actividad 3:", cursos);

var cursos2 = {
    "id" : 2,
    "descripcion":"Frond end",
    "dias" : {
        "lunes": "10:30"
    }
}

console.log('Actividad 4:',cursos2.dias.lunes);