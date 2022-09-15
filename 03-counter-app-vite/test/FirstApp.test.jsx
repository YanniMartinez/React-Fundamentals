/** @jest-environment jsdom */
import {render} from '@testing-library/react'
import {FirstApp} from '../src/FirstApp'

describe('Pruebas en <FirstApp/>', () => {
  // test('Debe hacer match con el Snapshot', () => {
    
  //   const title='Hola, Soy Goku';
  //   /**Renderiza el componente en memoria, 
  //    * El render también expone ciertos componentes, por ejemplo
  //    * el container y el container contiene el snapshot
  //   */
  //   const { container} = render(<FirstApp title={title}/>)
  //   console.log(container);

  //   /**Cuando termine la siguiente prueba, obtendremos una carpeta
  //    * de snapshots al mismo nivel donde está nuestro archivo de prueba
  //    * dentro de ese archivo ".jsx.snap" veremos el renderizado del componente
  //    * Sirve para comparar si alguien más realizó una modificación, normalmente 
  //    * puede usarse para componentes con pocos componentes.
  //    * Es cuestion de verificar de nuestro lado cuando comparar con snapshots o no
  //    * 
  //    */
  //   expect( container ).toMatchSnapshot();


    
  // })

  test('Debe de mostrar el título en un H1',()=>{
    const title='Hola, Soy Goku';
    /**Además podemos extraer diferentes métodos del render */
    const { container, getByText, getByTestId} = render(<FirstApp title={title}/>);

    //Asegura que en lo que renderizamos exista ese texto
    expect( getByText(title)).toBeTruthy();
    expect( getByTestId('test-title')).toBeTruthy(); //Nos asegura que existe el elemento con ese titulo
    expect( getByTestId('test-title').innerHTML).toContain(title); //Nos asegura ese elemento seleccionado tenga en el HTML el valor del titul


    // /** Container es el documento */
    // const h1 = container.querySelector('h1'); //Buscamos un h1 (Sólo 1)
    // //expect(h1.innerHTML).toBe(title);
    // expect(h1.innerHTML).toContain(title);



  })

  test('Debe mostrar el subtitulo enviado por PROPS',()=>{
    const title='Hola, soy Goku';
    const subTitle='Soy un subtitulo';
    const { getByText}=render(
    //const { getAllByText}=render(      Si quisieramos obtener más de 1 con ese atributo
        <FirstApp 
          title={title}
          subTitle={subTitle}
        />
    );
    expect( getByText(subTitle)).toBeTruthy();
    //expect( getAllByText(subTitle).length).toBe(2); Si esperaramos almenos 2 elementos
  })
  
})
