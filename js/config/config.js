 mainApp.config(function($provide) {
            $provide.provider('MathService', function() {
               this.$get = function() {
                  var factory = {};
                  
                  factory.multiply = function(a, b) {
                     return a * b;
                  }
				  
				  factory.addition = function(a, b) {
                     return a + b;
                  }
				  
				  factory.subTraction = function(a, b) {
                     return a - b;
                  }
				  
				  factory.division = function(a, b) {
                     return a / b;
                  }
				  
				  factory.rootSquare = function(a) {
                     return Math.sqrt(a);
                  }
				  
                  return factory;
               };
            });
         });