import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => {
  test('getHeroeById debe retornar un héroe por ID ', () => {
    const id=1;
    const hero = getHeroeById(id);
    console.log(hero);

    expect(hero).toEqual({ id: 1,name: 'Batman',owner: 'DC'});

  })


  test('getHeroeById debe retornar undefined si no existe el ID ', () => {
    const id=100;
    const hero = getHeroeById(id);
    console.log(hero);

    expect(hero).toBeFalsy(); //Algo nulo, undefined ó false.

  })

  /**Actividad:
   * Debe retornar un arreglo con los héroes de DC
   * Length === 3
   * toEqual al arreglo filtrado
   * 
   * Debe retornar un arreglo con los héroes de Mrvel
   * Length === 2
   */
  test('getHeroeByOwner debe retornar los heroes de DC', () => {
    const owner ='DC';
    const heroes = getHeroesByOwner(owner);

    expect(heroes.length).toBe(3); //Verifica que la longitud es de 3
    expect(heroes).toEqual([
        {
            id: 1,
            name: 'Batman',
            owner: 'DC'
        },{
        id: 3,
        name: 'Superman',
        owner: 'DC'
        },
        {
            id: 4,
            name: 'Flash',
            owner: 'DC'
        }
    ]);


    //La ventaja de hacerlo así es que si aumentan los heroes es dinámico
    expect(heroes).toEqual( heroes.filter( (heroe) => heroe.owner === owner ));

  })

  test('getHeroeByOwner debe retornar los heroes de DC', () => {
    const owner ='Marvel';
    const heroes = getHeroesByOwner(owner);

    expect(heroes.length).toBe(2); //Verifica que la longitud es de 3
    expect(heroes).toEqual( heroes.filter( (heroe) => heroe.owner === owner ));

    console.log(heroes);
  })

  
})
