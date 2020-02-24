(() => {
    
   const sumar = ( a:number, b:number):number => a+b;

   const nombre = ( ):string => 'Hola Alan';

   const salario = (): Promise <string> => {
       return new Promise((resolve, reject) =>{
            resolve('Alan');

       });
   }

    salario().then(a => console.log(a))


})();