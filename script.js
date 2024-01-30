function toggleDivs() {    
  let Espanol = document.getElementById("Espanol");
  let Ingles = document.getElementById("Ingles");  
  let estiloEspanol = window.getComputedStyle(Espanol);    
  if (estiloEspanol.display === "block") {    
    Espanol.style.display = "none";
    Ingles.style.display = "block"; 
    window.location.href = "#elevator-speech2";  
  } else {
    Espanol.style.display = "block";
    Ingles.style.display = "none";
    window.location.href = "#elevator-speech";
  } 
}

