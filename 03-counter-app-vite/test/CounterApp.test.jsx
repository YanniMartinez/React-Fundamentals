import { fireEvent, render, screen } from "@testing-library/react"
import { CounterApp } from "../src/CounterApp";

describe('Pruebas de <CounterApp/>', () => { 

    const initialValue=10;

    test('Debe hacer match con el Snapshot', () => { 
        const {container} = render(<CounterApp value={initialValue}/>);
        expect(container).toMatchSnapshot();
    });

    test('Compara el valor inicial del Value proveniente del PROPS',()=>{
        const {container} = render(<CounterApp value={100}/>);
        expect(screen.getByText(100)).toBeTruthy();
    })

    test('Debe de incrementar el botón +1',()=>{
        render(<CounterApp value={initialValue}/>);
        //fireEvent se importa y detona eventos,nos da las opciones, por ejemplo el click
        //Nos pregunta a cual le simularemos, para ello será por referencia;
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText('11')).toBeTruthy();
    })

    test('Debe de decrementar el botón -1',()=>{
        render(<CounterApp value={initialValue}/>);
        //fireEvent se importa y detona eventos,nos da las opciones, por ejemplo el click
        //Nos pregunta a cual le simularemos, para ello será por referencia;
        fireEvent.click(screen.getByText('-1'));

        //screen.debug();
        expect(screen.getByText('9')).toBeTruthy();
    })

    test('Debe de funcionar el botón de reset',()=>{
        render(<CounterApp value={initialValue}/>);
        //fireEvent se importa y detona eventos,nos da las opciones, por ejemplo el click
        //Nos pregunta a cual le simularemos, para ello será por referencia;
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('Reset'));

        screen.debug();
        expect(screen.getByText(initialValue)).toBeTruthy();
    })


})