import { getSaludo } from "../../bases-prueebas/02-template-string";

describe('Pruebas en 02-templates-strings ', () => { 
    
        test('getSaludo debe retornar "Diego"', ()=>{

            const name = 'Diego';
            const message = getSaludo( name );

            expect( message ).toBe(` ${ name } `)

        })
    
     })