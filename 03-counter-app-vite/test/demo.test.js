/**
 * * Para realizar alguna agrupación podemos poner la siguiente sintaxis:
 * * describe('Nombre del grupo', () => { Contenido }
 */
describe('Pruebas en <DemoComponent/>', () => {

    //**************  AQUI DENTRO TODAS LAS PRUEBAS DEL GRUPO ****************** */

    /** La sintaxis es la siguiente:
     * * test('Titulo de nuestra prueba', callBack() )
    */
    test('Esta prueba no debe de fallar', () => {
        //1. Inicialización
        const message1 = 'Hola Mundo';

        //2. Estimulo
        const message2= message1.trim();

        //3. Observar el comportamiento ... esperado?
        expect( message1 ).toBe( message2 );

    })
})
