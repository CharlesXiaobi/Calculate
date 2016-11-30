



  describe('myService', function() {
    var service;

    beforeEach(module('myApp'));

    beforeEach(inject(function($injector) {
      service = $injector.get('CalcService');
	  expect(service).not.toBeNull();
    }));

    it('should check "addition" service', function() { 
	 expect(service.addition(1,2)).toBe(3);
    });
	
	it('should check "multiply" service', function() { 
	 expect(service.multiply(1,2)).toBe(2);
    });
	
	it('should check "subTraction" service', function() { 
	 expect(service.subTraction(1,2)).toBe(-1);
    });
	
	it('should check "division" service', function() { 
	 expect(service.division(1,2)).toBe(0.5);
    });
	
	it('should check "division" service', function() { 
	 expect(service.rootSquare(1)).toBe(1);
    });
	
  });
