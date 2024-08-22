document.getElementById("btn-enviar").addEventListener("click", function(){
    document.getElementById("gracias").style.display = "block";
});

document.getElementById("nube1").addEventListener("mouseover", function () {
    this.classList.remove("fa-cloud");
    this.classList.add("fa-cloud-rain");
});

document.getElementById("nube2").addEventListener("mouseover", function () {
    this.classList.remove("fa-cloud");
    this.classList.add("fa-cloud-rain");
});

document.getElementById("nube3").addEventListener("mouseover", function () {
    this.classList.remove("fa-cloud");
    this.classList.add("fa-cloud-rain");
});

document.addEventListener("DOMContentLoaded", function() {
    var diassemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    var hoy = new Date();
    var diasemana = diassemana[hoy.getDay()];
    var dia = hoy.getDate();
    var mes = meses[hoy.getMonth()];
    var ano = hoy.getFullYear();

    var fechadehoy = diasemana + " " + dia + " de " + mes + " del " + ano

    document.getElementById("fecha").textContent = fechadehoy;
});