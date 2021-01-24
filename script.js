window.onload = function(){
  //array with the words
  var first = 'Un ';
  var adj = ['perro ', 'sirviente ', 'ratón '];
  var noun = ['anaranjado ','enojado ','blanco '];
  var action = ['se comio ', 'tiró ', 'tomó '];
  var possetion = ['mi tarea ', 'mis llaves ', 'las camisas '];
  var where = ['en la mañana','en la alcantarilla','ayer '];
  
  // declaring random variables
   var rdm1 = Math.floor((Math.random() * adj.length) );
   var rdm2 = Math.floor((Math.random() * noun.length) );
   var rdm3 = Math.floor((Math.random() * action.length) );
   var rdm4 = Math.floor((Math.random() * possetion.length) );
   var rdm5 = Math.floor((Math.random() * where.length) );
  
    //creating a sentence (the excuse)
    document.querySelector('#theexcuse').innerHTML = first + adj[rdm1] + noun[rdm2] + action[rdm3] + possetion[rdm4] + where[rdm5]; 
  
}