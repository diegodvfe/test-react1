import { useContext } from "../../bases-prueebas/06-deses-obj";

useContext

describe('Esta funcion debe de retorna los elementos del Actor', () => { 
    test('should first', () => { 
        
        const datosEntrada = {
            clave: 'Diego',
            edad: 28
        }

        const personaExpected = {
            nombreClave: datosEntrada.clave,
            anios: datosEntrada.edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        };


         const persona = useContext(datosEntrada )
         console.log(persona)

        expect(persona).toEqual( personaExpected);
        
     })
 })