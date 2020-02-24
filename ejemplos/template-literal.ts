(function(){
    
    function getEdad(){
        return 100 + 100;
    }

    const nombre   = 'Alan';
    const apellido = 'Alvarez';
    const edad     = 33;

    // const salida = nombre + apellido + edad;
    // const salida = nombre + " " +  apellido + "(Edad: " + edad + ")";
    const salida = `${nombre} ${apellido} (Edad: ${getEdad()})`;
    // Alan Alvarez (Edad: 33)
    
    console.log(salida);



})();