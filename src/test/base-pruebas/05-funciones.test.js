import { getUser, getUsuarioActivo } from "../../bases-prueebas/05-funciones"



describe('Pruebas en 05-funciones', () => {

    test('getUser deber de retornar un objeto ', () => { 

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser()
        // console.log(user);

        expect(testUser).toStrictEqual(user);
     })

     describe('getUsuario debe de retorna nombre', () => { 

        const name = 'Diego'

        

        const usuario = getUsuarioActivo(name )

        expect( usuario ).toEqual( {
            uid: 'ABC567',
            username: name
        } );
      })
 })

