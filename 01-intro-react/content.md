# Fundamentos de REACT

React es una biblioteca o framework que nos permite tener facilidades de JS en una poderosa aplicación.

## Importaciones para usar REACT y BABEL

```
<script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>

```

## Como usar babel
`<script type="text/babel">`

Babel es algo que corre en el Background cuando nosotros ejecutamos algo de REACT. En general Babel nos permite hacer uso de las funcionalidades más recientes de JavaScript incluso en navegadores que no soportan las nuevas funcionalidades, de este modo no tenemos que procuparnos mucho en la compatibilidad.


**NOTA:** React no depende de Babel, por lo que no depende de él, para ello existe JSX

## Como renderizar informacion usando REACT

```
//Busca el elemento con ese ID
    const divRoot = document.querySelector('#root');
    const nombre ='Goku';
    //JSX, mezcla de JS con JSX
    const h1Tag = <h1>Hola, soy {nombre}</h1>;

    //Diciendole a REACT que renderice el elemento h1 en el HTML
    ReactDOM.render(h1Tag, divRoot);


```