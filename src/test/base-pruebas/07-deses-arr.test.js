import { retornaArreglo } from "../../bases-prueebas/07-deses-arr"

describe('Pruebas de O7', () => { 

    test('debe de retornar un string y un numero', () => {

        const [letters, numbers] = retornaArreglo();

        expect( letters ).toBe('ABC');
        expect( numbers ).toBe( 123 );

        expect(typeof letters ).toBe('string');
        expect(typeof numbers ).toBe( 'number');

        expect( letters ).toStrictEqual( expect.anything(String) )
        
    })
 })