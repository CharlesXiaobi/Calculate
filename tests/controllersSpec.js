



  describe('myController', function() {
    var $scope;

    beforeEach(module('myApp'));

    beforeEach(inject(function($rootScope, $controller) {
      $scope = $rootScope.$new();
      $controller('formCtrl', {$scope: $scope});
	  $scope.firstNumber = "1";
	  $scope.secondNumber = "2";
    }));

    it('should create "names" model with 4 names', function() {
      expect($scope.names.length).toBe(4);
    });
	
	it('should check "addition" function', function() {
	 $scope.operateValue = '+';
	 $scope.calculate();
	 expect($scope.result).toBe(3);
    });
	
	it('should check "subTraction" function', function() {
	 $scope.operateValue = '-';
	 $scope.calculate();
	 expect($scope.result).toBe(-1);
    });
	
	it('should check "multiply" function', function() {
	 $scope.operateValue = '*';
	 $scope.calculate();
	 expect($scope.result).toBe(2);
    });
	
	it('should check "division" function', function() {
	 $scope.operateValue = '/';
	 $scope.calculate();
	 expect($scope.result).toBe(0.5);
    });
	
	it('should check "square" function', function() {
	 $scope.square();
	 expect($scope.result).toBe(1);
    });
	
	it('should check "square root" function', function() {
	 $scope.rootSquare();
	 expect($scope.result).toBe(1);
    });
	
  });
