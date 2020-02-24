# Introducción a Typescript

Habilitar el archivo de configuración de *Typescript*

```bash
tsc --init
```

Modo watcher

```bash
tsc -w
```

## Tipos de variables 

 - var: existe en todos los ámbitos
 - let: existe solo dentro del ámbito 
 - const: no puede cambiar

# Argumentos de funciones

- Argumento obligatorio
  ```Javascript
  function nombre( var ){
      
  }
  ```
- Argumento opcional
  ```Javascript
  function nombre( var? ){

  }
  ```
- Argumento con valor por defecto
  ```Javascript
  function nombre( var = 'Hola Mundo' ){

  }
  ```

## Funciones de flecha

- Las funciones de flecha pueden ser ideales para una sola línea.
- Las funciones de flecha no modifican a donde apunta el **this** dentro de un objeto.
