(function(){
    
    const miFuncion = function(a:string){
        return a.toUpperCase();
    }

    // function funcion2 ( a:string ){
    //     return a
    // }

    const miFuncionF = ( a:string ) =>  a.toUpperCase();
    
     const sumarN = function(a:number, b:number){
         return a+b;
     }

     const sumarNF = (a:number, b:number) => a+b;

    const hulk = {
        nombre: 'hulk',
        smash(){

            setTimeout( () => {
                console.log(`${this.nombre} smash!!`);
            }, 1000 );

        }
    }

    hulk.smash()

    

})();