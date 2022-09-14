import { getUser } from "../../src/base-pruebas/05-funciones";


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
  
})
