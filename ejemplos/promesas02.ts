(() => {
    
    const retirarDinero = (monto : number) : Promise<number> =>{
        let dineroActual = 1000;

        return new Promise((resolve, reject) =>{
            if ( monto > dineroActual ){
                reject('No hay dinero sufuciente')
            }else{
                dineroActual -= monto;
                resolve( dineroActual);
            }
        });
    }

    retirarDinero(500)
                    .then( montoActual => console.log(`Queda ${montoActual}`))
                    // .catch( err => console.warn(err));
                    .catch(console.warn)

})();