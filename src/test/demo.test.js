describe('Pruebas en <Component></Component> ', () => { 


        // test ('_____', ()=>{ })
        test('Esta prueba no debe de fallar ', () => {
                
                //1. inicializacion 
                const message = 'Hola munudo'
        
                //2.Estimulo 
        
                const message2 = message.trim();
                
                // 3. Observer el compartamiento que se espera...
                // expect(message).toBe(message2);
                expect (message).toBe(message2)
        })
 })
