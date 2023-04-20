import { string } from "prop-types"
import { getImagen } from "../../bases-prueebas/11-async-await"


describe('Pruebas en async await', () => { 

    test('getImagen debe de retornar un URL de la imagen', async() => { 

        const url = await getImagen()
        // console.log(url)

        expect( typeof url ).toBe('string')

     })

 })