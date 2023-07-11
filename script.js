console.log("Cargando JavaScript");

function mostrarHabilidades(){
    var habilidades = document.getElementById("habilidades");
    if( habilidades.style.display === "none"){
        habilidades.style.display = "block";
    } else {
        habilidades.style.display = "none";
        }

}

function mostrarHobbies(){
    var hobbies = document.getElementById("hobbies");
    if( hobbies.style.display === "none"){
        hobbies.style.display = "block";
    } else {
        hobbies.style.display = "none";
        }

}

function mostrarFortalezas(){
    var fortalezas = document.getElementById("fortalezas");
    if( fortalezas.style.display === "none"){
        fortalezas.style.display = "block";
    } else {
        fortalezas.style.display = "none";
        }

}

function mostrarDetalles1(){
    var detalles = document.getElementById("servicio1");
    if(detalles.style.display === "none"){
        detalles.style.display = "block";
            } else {
                detalles.style.display = "none";
            }
}

function mostrarDetalles2(){
    var detalles = document.getElementById("servicio2");
    if(detalles.style.display === "none"){
        detalles.style.display = "block";
            } else {
                detalles.style.display = "none";
            }
}

function mostrarDetalles3(){
    var detalles = document.getElementById("servicio3");
    if(detalles.style.display === "none"){
        detalles.style.display = "block";
            } else {
                detalles.style.display = "none";
            }
}


function saveContact(){
    let nameC = document.getElementById("name");
    let emailC = document.getElementById("email");
    let messageC = document.getElementById("message");


    let contact = {
        name: nameC.value,
        email: emailC.value,
        message: messageC.value,

    }
    console.log(contact);

    let url= "http://localhost:8000/api/contact";

    let params= {
        method:"POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
    }
    fetch(url, params).then(response =>{
        console.log("response");
        console.log(response.json());

        if(response.status === 201){
            alert("created successfully");
        }else{
            alert("error");
        }
    });

    return true;
}

function getContact(){


    let url = "localhost:8000/api/contact";
    let params = {
    method: "GET",
    headers:{
        "Content-Type": "application/json"
    },
    }

    fetch(url,params).then((response) =>{
        console.log(response);
        console.log(response.json());
    });



    
    url = "https://api.agify.io/?name=meelad";
    params = {      
    method: "GET",
    headers:{
        "Content-Type": "application/json"
    },
    }

    fetch(url,params).then((response) =>{
        console.log(response);
        console.log(response.json());
    });


    return true;
}
/*
const processForm = (event)=>{

    event.preventDefault();
    console.log("Envio Formulario");

    var nameData = document.getElementById("name").value;
    var emailData = document.getElementById("email").value;
    var messageData = document.getElementById("message").value;

    var idRandon = Array.from({ length: 5 }, () => Math.random().toString(36).charAt(2)).join('');

    var user = {
        id: idRandon,
        name: nameData,
        email: emailData,
        message: messageData,
    }


    console.log(user);

    //Crear o Abrir Base Datos
    var dataBase = window.indexedDB.open("myDataBase",3);

   

    // Ejecución Correcta Crear o Abrir Base Datos
    dataBase.onsuccess = (event)=>{

        console.log("Creación o Error en Abrir Base Datos Correcta !!");
        let db = dataBase.result;
        console.log(db);
        var instanceTransaction = db.transaction('users','readwrite').objectStore('users');
        //Guardar Datos
        var saveData = instanceTransaction.add(user);
        alert("Gracias por contactarme, " + nameData + " en un momento te comparto más información.");
        form.reset();

        
        let myP = document.getElementById("Data");

        var dataInfo = instanceTransaction.getAll();
        

    }

    // Ejecución al iniciar o Crear base datos

    dataBase.onupgradeneeded = (event)=>{

    console.log("Creación Object")

     let db = event.target.result;

     var createObjectData = db.createObjectStore("users", { keyPath: 'id'});

    }


    // Ejecución Error Crear o Abrir Base Datos
    dataBase.onerror = (event)=>{
        console.log("Error Creación o Error en Abrir Base Datos !!!");
    }




}



var form = document.getElementById("myForm");

form.addEventListener('submit',processForm);



const loadBody = (event)=>{

    var dataBase = window.indexedDB.open("myDataBase",3);


    // Ejecución Correcta Crear o Abrir Base Datos
    dataBase.onsuccess = (event)=>{

        console.log("Creación o Error en Abrir Base Datos Correcta !!");
        let db = dataBase.result;
        console.log(db);
        var instanceTransaction = db.transaction('users','readwrite').objectStore('users');

        let myP = document.getElementById("Data");

        var dataInfo = instanceTransaction.getAll();
        

        dataInfo.onsuccess =(event) =>{

            let data = dataInfo.result;

            console.log("Informacion Almacenada =>", data);


            var infoStructure = "";


            if(data.map){
                data.map((element)=>{
                    infoStructure += "Nombre: " + element.name + " ";
                    infoStructure += "Edad: " + element.email + " ";
                    infoStructure += "Correo: " + element.message + " ";
                    infoStructure += "<br>";
                });
            }


            myP.innerHTML = infoStructure;


        }
        
        }

    // Ejecución al iniciar o Crear base datos

    dataBase.onupgradeneeded = (event)=>{

    console.log("Creación Object")

     let db = event.target.result;

     var createObjectData = db.createObjectStore("users", { keyPath: 'id'});

    }


    // Ejecución Error Crear o Abrir Base Datos
    dataBase.onerror = (event)=>{
        console.log("Error Creación o Error en Abrir Base Datos !!!");
    }

}


*/
