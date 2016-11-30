mainApp.controller('formCtrl', function($scope,CalcService) {
	
	$scope.names = ["+", "-", "*","/"];
    $scope.calculate = function (){
		var firstNumber = parseInt($scope.firstNumber);
		var operation = $scope.operateValue;
		var secondNumber = parseInt($scope.secondNumber);
		
		if(operation == '+'){
			$scope.result = CalcService.addition(firstNumber,secondNumber);
		
		}else if(operation == '-'){
			$scope.result = CalcService.subTraction(firstNumber,secondNumber);
		}else if(operation == '*'){
			$scope.result = CalcService.multiply(firstNumber,secondNumber);
			
		}else if(operation == '/'){
			$scope.result = CalcService.division(firstNumber,secondNumber);
		}else{
			$scope.result = 'Please select a operation';
		}	
	}
	
	$scope.square = function (){
		var number = parseInt($scope.firstNumber);
		
		if(number != ''){
			$scope.result = CalcService.multiply(number,number);
		}else{
			$scope.result = 'Please input number in the first field!';
		}
	}
	
	$scope.rootSquare = function (){
		var number = parseInt($scope.firstNumber);
		
		if(number != ''){
			$scope.result = CalcService.rootSquare(number);
		}else{
			$scope.result = 'Please input number in the first field!';
		}
	}
});