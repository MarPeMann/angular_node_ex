main_module.directive('ofExample',function(){

	var directive = {};
	// define how the directive is going to be used: 'A' = attribute, 'C' = class, 'E' = element, 'M' = comment

	directive.restrict = 'AE';

	

	//create isolated scope for the directive
	//from now on, custom directive cannot use parent scope

	directive.scope = {

		name: '@myname',
		users: '='

	}
	//compile function is called before this directive is rendered in browser
	//Not usually implemented. Just override the link function in directive
	directive.compile = function(elem, attrs){
		$(elem).css('background-color','lightgrey');

		//must always return link function
		//link function is called when component is rendered in browser
		return function link(scope, elem, attrs){
			
		}
	}

/*	directive.controller = function($scope,$http){
		console.log("directive controller activated");
		$http.get('http://api.openweathermap.org/data/2.5/weather?q={oulu}').
		then(function(data){
			console.log(data);
			$scope.temp = data.temp;
		});
	}*/

	directive.templateUrl = "/FrontEnd/directives/content.html";

	return directive;
});


/* tai sitten näin:
return{
	restrict: 'A',
	templateUrl: '/FrontEnd/directives/content.html'
}

*/

main_module.directive('myNav',function(){
	var directive = {};
	directive.restrict = 'E';
	directive.templateUrl = "/FrontEnd/directives/nav.html";

/*		directive.scope = {

		myNav.data: '='

	}*/
	return directive;
});