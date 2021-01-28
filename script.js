// La funcion se ejecuta cada vez que se "refresca" la página web.
window.onload = function(){
  //Se crean arrays con valores strings para seleccionarlos previamente. 
  var first = 'Un ';
  var adj = ['perro ', 'sirviente ', 'ratón '];
  var noun = ['anaranjado ','enojado ','blanco '];
  var action = ['se comio ', 'tiró ', 'tomó '];
  var possetion = ['mi tarea ', 'mis llaves ', 'las camisas '];
  var where = ['en la mañana','en la alcantarilla','ayer '];
  
  // Se crean variables por cada elemento aleatorio a seleccionar de las arrays
   var rdm1 = Math.floor((Math.random() * adj.length) );
   var rdm2 = Math.floor((Math.random() * noun.length) );
   var rdm3 = Math.floor((Math.random() * action.length) );
   var rdm4 = Math.floor((Math.random() * possetion.length) );
   var rdm5 = Math.floor((Math.random() * where.length) );
  
    //Con el DOM, se selecciona un elemento de HTML y se le agregan (inner) de manera concatenada las variables con el valor aleatorio en corchetes.
    document.querySelector('#theexcuse').innerHTML = first + adj[rdm1] + noun[rdm2] + action[rdm3] + possetion[rdm4] + where[rdm5]; 
  
}