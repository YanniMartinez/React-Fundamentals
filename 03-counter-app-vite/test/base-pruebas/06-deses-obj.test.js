import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Pruebas en 06-deses-obj', () => {
  test('usContext debe retornar un objeto en base a los parametros que recibe ', () => {
    //1
    const persona = {
        nombre: 'Tony',
        clave: 'Ironman',
        edad: 45
    };
    
    //Desestructurando sólo para verificar que extrae todo bien
    const {clave,edad} = persona;

    //2
    const person = usContext(persona);
    // console.log('La persona es: ',person);
    // console.log("Los valores son: ",clave, edad)
    
    //3
    expect(person).toStrictEqual({
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    })

  })
  
})
