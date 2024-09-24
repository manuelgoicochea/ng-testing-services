//import { TestBed } from '@angular/core/testing';

import { ValueService } from './value.service';

fdescribe('ValueService', () => {
  let service: ValueService;

  beforeEach(()=>{
    service = new ValueService();
  });

  it('Should be created',()=>{
    //prueba insolada 
    expect(service).toBeTruthy();
  });

  describe('Test for getValue',()=>{
    it('Should return "my value"',()=>{
      expect(service.getValue()).toBe('my value');
    });
  });

  describe('Test for setValue',()=>{
    it('Should change the value',()=>{
      expect(service.getValue()).toBe('my value');
      service.setValue('change');
      expect(service.getValue()).toBe('change');
    });
  });

  describe('Test for getPromiseValue',()=>{
    it('Should return "promise value" from promise with then',(doneFn)=>{
      service.getPromiseValue()
      .then((value)=>{
        //assert (hipotesis)
        expect(value).toBe('promise value');
        doneFn();//se tiene que indicar de forma explicita donde termina la función
      });
    });

    it('Should return "promise value" from promise using async',async()=>{
      const rta = await service.getPromiseValue();
      expect(rta).toBe('promise value');
    });
  });



});
