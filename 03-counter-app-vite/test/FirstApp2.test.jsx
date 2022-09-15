/** @jest-environment jsdom */
import {render,screen} from '@testing-library/react'
import {FirstApp} from '../src/FirstApp'

/**El screen es el objeto que estamos renderizando */

describe('Pruebas en <FirstApp/>', () => {

  const title='Hola, Soy Goku';

  test('Debe de hacer match con el Snapshot', () => { 
    const{container}=render(<FirstApp title={title}/>);
    expect(container).toMatchSnapshot();
  })

  test('Debe de mostrar el mensaje "Hola, Soy Goku"',()=>{
    render(<FirstApp title={title}/>);
    screen.debug(); //Obtiene el estado del elemento, sirve para ver el objeto

    expect(screen.getByText(title)).toBeTruthy();

  })
  
})
