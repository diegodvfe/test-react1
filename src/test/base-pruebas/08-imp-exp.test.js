
import heroes from '../../data/heroes';
import { getHeroesByOwner } from './../../bases-prueebas/08-imp-exp';
import { getHeroeById } from './../../bases-prueebas/08-imp-exp';


describe('Pruebas en 08', () => { 

    test('getHeroById debe regresar un heroe por ID 1', () => { 

        const id = 1;
        const hero = getHeroeById( id );
        console.log(hero)

        expect( hero ).toEqual( { id: 1, name: 'Batman', owner: 'DC'});


    })

    test('getHeroById debe de regresar un heroe por Id 2', () => { 

        const id = 2;
        const hero = getHeroeById( id );
        console.log( hero );

        expect( hero ).toEqual( {id:2, name: 'Spiderman', owner: 'Marvel'} )

     })

     test('getHeroById debe de regresar un heroe por Id 3', () => {

            const id = 5;
            const hero = getHeroeById( id );
            console.log( hero );

            expect( hero ).toEqual( {id: 5, name: 'Wolverine', owner: 'Marvel' });

      })

      test('getHeroById debe de retornar undefined si no existe 4', () => { 

        const id = 100;
        const hero = getHeroeById( id );
        expect( hero ).toBeFalsy();
       })

       test('getHeroesByOwner debe de retornar el dueño de la peliculas 5', () => {

        const owner = 'Marvel'
        const marca = getHeroesByOwner ( owner );
       

        expect(marca.length).toBe( 2 );

        expect(marca).toEqual(heroes.filter((heroe) => heroe.owner === owner));
       

       });

       test('getHeroeByOwner debe de retornara la peliculas de DC', () => { 

            const owner = 'DC';
            const marcas2= getHeroesByOwner( owner );

            expect( marcas2.length ).toBe( 3 );

            expect( marcas2 ).toEqual(heroes.filter((heroe)=> heroe.owner === owner ))

        })

 })