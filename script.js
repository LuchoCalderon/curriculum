console.log("Cargando JavaScript");

function mostrarHabilidades(){
    var habilidades = document.getElementById("habilidades");
    if( habilidades.style.display === "none"){
        habilidades.style.display = "block";
    } else {
        habilidades.style.display = "none";
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

document.getElementById("contacteme").addEventListener("submit", function(event){
    event.preventDefault();
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;

    alert("Gracias por contactarme, " + nombre + " en un momento te comparto más información.");
});