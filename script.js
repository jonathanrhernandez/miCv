function toggleDivs() {    
  var Espanol = document.getElementById("Espanol");
  var Ingles = document.getElementById("Ingles");  
  var estiloEspanol = window.getComputedStyle(Espanol);  
  // var estiloIngles = window.getComputedStyle(Ingles);  
  if (estiloEspanol.display === "block") {    
    Espanol.style.display = "none";
    Ingles.style.display = "block";
  } else {
    Espanol.style.display = "block";
    Ingles.style.display = "none";
  }
 
}

