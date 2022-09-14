
/** La sintaxis es la siguiente:
 * test('Titulo de nuestra prueba', callBack() )
*/
test('Esta prueba no debe de fallar', () => {
    if( 1 === 0 ){
        throw new Error('No puede dividir entre cero');
    }
    //Esta  prueba fallará por que 0/0 no es posible
    // if( 0 === 0 ){
    //     throw new Error('No puede dividir entre cero');
    // }
})