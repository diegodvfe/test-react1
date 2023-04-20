
import { CounterApp } from './../CounterApp';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Pruebas del component CounterApp', () => {
  
      const intialValue = 10;

      // 1
      test('Debe de hacer match con el snapshot', () => {

            const { container } = render(<CounterApp value={intialValue} />)
            expect (container).toMatchSnapshot();
        
      })

      test('Debe de mostrar e valor inicial de 100 en <CounterApp value={100} />', () => {
            
      render(<CounterApp value={100} />);
      expect(screen.getByText(100)).toBeTruthy();


      })

      test('debe de incrementar con el boton +1', () => {
        render( <CounterApp value={intialValue} />)

        fireEvent.click( screen.getByText('+1'))
        expect( screen.getByText('11')).toBeTruthy();
        
      })
      
      test('debe de decrementar con el boton -1 ', () => {
            
            render( <CounterApp value={intialValue}/>)
            fireEvent.click( screen.getByText('-1'))
             expect( screen.getByText('9')).toBeTruthy()
             screen.debug()
      })

      test('debe de funcionar el boton de reset', () => {
        render ( <CounterApp value={ 355 } />)

        fireEvent.click( screen.getByText('+1'));
        fireEvent.click( screen.getByText('Resest'));

        expect( screen.getByText(355)).toBeTruthy();



      })
      
      
      
      
      

})
