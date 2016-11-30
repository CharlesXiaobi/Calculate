 mainApp.service('CalcService', function(MathService){
            this.multiply = function(a,b) {
               return MathService.multiply(a,b);
            }
			
			this.addition = function(a,b) {
               return MathService.addition(a,b);
            }
			
			this.subTraction = function(a,b) {
               return MathService.subTraction(a,b);
            }
			
			this.division = function(a,b) {
               return MathService.division(a,b);
            }
			
			this.rootSquare = function(a) {
			   
               return MathService.rootSquare(a);
            }
				
         });