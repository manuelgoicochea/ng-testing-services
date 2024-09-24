import { Calculator } from './calculator';
describe('Test for Calculator',()=>{

    describe('Test for Multiply',()=>{
        it('#should return a nine',()=>{
            //MANTRA
            //AAA
            //Arrange (preparamos lo que necesitamos para hacer las pruebas)
            const calculator = new Calculator(); 

            //Act (Fase en la que ejecutamos el codigo que debemos probar)
            const rpt = calculator.multiply(3,3);

            //Assert (resolvemos la hipotesis)
            //utilizamos los matchers para validar las respuestas.
            expect(rpt).toEqual(9);

        });

        it('#should return a four',()=>{
            //MANTRA
            //AAA
            //Arrange (preparamos lo que necesitamos para hacer las pruebas)
            const calculator = new Calculator(); 

            //Act (Fase en la que ejecutamos el codigo que debemos probar)
            const rpt = calculator.multiply(1,4);

            //Assert (resolvemos la hipotesis)
            //utilizamos los matchers para validar las respuestas.
            expect(rpt).toEqual(4);

        });  
    });

    describe('Test for divide',()=>{            
        it('#should return a some numbers',()=>{
            //MANTRA
            //AAA
            //Arrange (preparamos lo que necesitamos para hacer las pruebas)
            const calculator = new Calculator(); 

            //Act (Fase en la que ejecutamos el codigo que debemos probar)
            expect(calculator.divide(6,3)).toEqual(2);
            expect(calculator.divide(5,2)).toEqual(2.5);

        });   

        it('#for a zero',()=>{
            //MANTRA
            //AAA
            //Arrange (preparamos lo que necesitamos para hacer las pruebas)
            const calculator = new Calculator(); 

            //Act (Fase en la que ejecutamos el codigo que debemos probar)
            expect(calculator.divide(6,0)).toBeNull();
            expect(calculator.divide(5,0)).toBeNull();
            expect(calculator.divide(5615156165,0)).toBeNull();

        });
        it('#tests  matchers',()=>{
            let name = 'manuel';
            let name2;
    
            expect(name).toBeDefined();
            expect(name2).toBeUndefined();
    
            expect(1 + 3 === 4).toBeTruthy();//4
            expect(1 + 1 === 3).toBeFalsy();
    
            expect(5).toBeLessThan(10);
            expect(20).toBeGreaterThan(10);
    
            expect('123456').toMatch(/123/);
            expect(['apples','oranges','pears']).toContain('oranges');
    
    
        });
    });
    
    
    
    
});

