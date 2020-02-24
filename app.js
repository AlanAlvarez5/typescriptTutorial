"use strict";
(() => {
    const sumar = (a, b) => a + b;
    const nombre = () => 'Hola Alan';
    const salario = () => {
        return new Promise((resolve, reject) => {
            resolve('Alan');
        });
    };
    salario().then(a => console.log(a));
})();
