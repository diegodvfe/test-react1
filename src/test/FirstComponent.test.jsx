import {  render } from "@testing-library/react"
import { FirstComponent } from "../FirstComponent"


describe('Prueba en <FirstComponent', () => { 

    // test('debe de hacer un match con el snapshot', () => { 

    //     const title = 'Hola, soy Diego '

    //     const {container, getByText} = render( <FirstComponent title={title} />);
    //     expect( container ).toMatchSnapshot();
    // })
    
    test('debe de evaluar el h1', () => { 
        
        const title = 'Hola,soy Diego';
        
        const {container, getByText, getByTestId} = render( <FirstComponent title={title}/>)
        // expect( getByText(title)).toBeTruthy();

        expect (getByTestId('test-title').innerHTML).toBe( title )


        // const h1 = container.querySelector('h1');
        // console.log(h1.innerHTML)

        // expect( h1.innerHTML).toContain( title );


      })

      test('debe de mostrar el subtitulo enviado por props', () => {

            const title = 'Hola, soy Diego';
            const subTitle = 'Soy un subtitulo';
            const { getAllByText } = render(
            <FirstComponent 
            title={title} 
            subTitle={subTitle} 
            />
            );

            expect(getAllByText(subTitle).length).toBe(2);
       })
 })