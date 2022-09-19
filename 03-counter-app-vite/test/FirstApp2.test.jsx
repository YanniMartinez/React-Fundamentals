/** @jest-environment jsdom */
import {render,screen} from '@testing-library/react'
import {FirstApp} from '../src/FirstApp'

/**El screen es el objeto que estamos renderizando */

describe('Pruebas en <FirstApp/>', () => {

  const title='Hola, Soy Goku';
  const subTitle='Soy un subtitulo';

  test('Debe de hacer match con el Snapshot', () => { 
    const{container}=render(<FirstApp title={title}/>);
    expect(container).toMatchSnapshot();
  })

  test('Debe de mostrar el mensaje "Hola, Soy Goku"',()=>{
    render(<FirstApp title={title}/>);
    screen.debug(); //Obtiene el estado del elemento, sirve para ver el objeto

    expect(screen.getByText(title)).toBeTruthy();

  })

  test('Debe de mostrar el titulo en un H1',()=>{
    render(<FirstApp title={title}/>);
    expect(screen.getByRole('heading',{level:1}).innerHTML).toContain(title);

  })

  test('Debe de mostrar el subtitulo enviado por los props',()=>{
    render(
      <FirstApp 
        title={title}
        subTitle={subTitle}
      />
    );
    expect(screen.getAllByText(subTitle).length).toBe(1);
  })
  
})
