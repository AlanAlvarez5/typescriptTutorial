(() => {
    
    const avenger = {
        nombre: 'steve',
        clave: 'capitan america',
        poder: 'droga'
    }
    
    //Sin orden
    const { nombre, clave, poder } = avenger;

    const extraer = ( {nombre, poder}: any) => {
        console.log(nombre);
        console.log(poder);

    }

    // extraer(avenger);


    
    const avengers: string[] = ['Thor', 'IronMan', 'SpiderMan'];
    // Orden 
    const [thor, ironman, spiderman] =  avengers;
    const [, , arania] =  avengers;

    const extraerArr = ([thor, ironman, spiderman]: string[]) => {
        console.log(thor);
        console.log(ironman);
        console.log(spiderman);
    }
    extraerArr(avengers);


    

})();