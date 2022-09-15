/** @jest-environment jsdom */
import {render} from '@testing-library/react'
import {FirstApp} from '../src/FirstApp'

describe('Pruebas en <FirstApp/>', () => {
  test('Debe hacer match con el Snapshot', () => {
    
    const title='Hola, Soy Goku';
    /**Renderiza el componente en memoria, 
     * El render también expone ciertos componentes, por ejemplo
     * el container y el container contiene el snapshot
    */
    const { container} = render(<FirstApp title={title}/>)
    console.log(container);

    /**Cuando termine la siguiente prueba, obtendremos una carpeta
     * de snapshots al mismo nivel donde está nuestro archivo de prueba
     * dentro de ese archivo ".jsx.snap" veremos el renderizado del componente
     * Sirve para comparar si alguien más realizó una modificación, normalmente 
     * puede usarse para componentes con pocos componentes.
     * Es cuestion de verificar de nuestro lado cuando comparar con snapshots o no
     * 
     */
    expect( container ).toMatchSnapshot();


    
  })
  
})
