import { render, screen } from "@testing-library/react"
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


})