import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";


describe('Pruebas en 05-Funciones', () => {
  test('getUser debe de retornar un objeto', () => {
    
    //1
    const testUser = {
        uid: 'ABC123',
        username: 'El_Papi1502'
    };
    //2
    const user = getUser();
    //3
    expect( testUser ).toEqual( user);
    //Equivalente expect( testUser ).toStrictEqual( user);
  })

  /**Ejercicio:
   * Se espera un objeto donde venta también el nombre que le especificamos
   * Si le mando el name a la función, esa parte del name también debe ser
   * evaluada en el expect( testUser ).toEqual( user);
   */
  test('getUsuarioActivo debe de retornar un objeto',() =>{
    //1
    const name='Yanni';
    //2
    const user = getUsuarioActivo( name );
    console.log(user);

    //3
    expect( user ).toStrictEqual({
        uid:'ABC567',
        username: name
    })
    
  });
  
})
