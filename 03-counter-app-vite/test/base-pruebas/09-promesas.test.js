import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas en 09-promesas', () => {
    /* Es muy importante tener el Done, debido a que le dice a JEST que se espere
    hasta que ese codigo termine */
  test('getHeroeByIdAsync debe retornar un héroe', ( done ) => {
    
    const id=1;
    getHeroeByIdAsync(id)
        .then( hero =>{
            expect(hero).toEqual({
                id: 1,
                name: 'Batman',
                owner: 'DC'
            });
            //Siempre debe ponerse ahí, para que espere
            done();
        })


  })

  test('getHeroeByIdAsync debe obtener error si un héroe no existe', ( done ) => {
    
    const id=100;
    getHeroeByIdAsync(id)
        //Si el heroe existe:
        .then( hero =>{
            expect(hero).toBeFalsy();
            done();
        })
        //Si no existe el héreo con ese ID
        .catch(error =>{
            console.log(error);

            expect(error).toBe(`No se pudo encontrar el héroe con el ID ${id}`);

            done();
        })


  })
  
})
