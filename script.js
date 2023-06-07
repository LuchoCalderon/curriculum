

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

function mostrarDetalles(id){
    var detalles = document.getElementById(id);
    if(detalles.style.display === "none"){
        detalles.style.display = "block";
            } else {
                detalles.style.display = "none";
            }
}



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


        // dataInfo.onsuccess =(event) =>{

        //     let data = dataInfo.result;

        //     console.log(data);


        //     var infoStructure = "";



        //     data.map((element)=>{
        //         console.log(element);
        //         infoStructure += "Nombre: " + element.name + " ";
        //         infoStructure += "Correo: " + element.email + " ";
        //         infoStructure += "Mensaje: " + element.message + " ";
        //         infoStructure += "<br>";
        //     });

        //     myP.innerHTML = infoStructure;


        // }
        

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



