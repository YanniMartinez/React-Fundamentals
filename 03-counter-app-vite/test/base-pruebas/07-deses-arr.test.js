import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"

describe('Prueba en 07-deses-arr', () => {
  test('retornaArreglo debe retornar un arreglo sencillo con string y numero ', () => {
    //1
    const [ letters, numbers] = retornaArreglo();

    //Evaluando el contenido exacto que retorna nuestra función
    expect( letters ).toBe('ABC');
    expect( numbers ).toBe(123);

    //Otra prueba que podriamos hacer es verificar los tipos de datos
    //Normalmente se hace en diferentes test, pero bueno..
    expect( typeof letters).toBe('string');
    expect( typeof numbers).toBe('number');

    //Otro modo de hacerlo es mediante sentencias de JEST:
    expect(letters).toEqual(expect.any(String));

  })
  
})
