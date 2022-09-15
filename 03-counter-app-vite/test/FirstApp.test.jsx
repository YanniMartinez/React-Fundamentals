/** @jest-environment jsdom */
import {render} from '@testing-library/react'
import {FirstApp} from '../src/FirstApp'

describe('Pruebas en <FirstApp/>', () => {
  test('Debe hacer match con el Snapshot', () => {
    
    const title='Hola, Soy Goku';
    //Renderiza el componente en memoria
    render(<FirstApp title={title}/>)
  })
  
})