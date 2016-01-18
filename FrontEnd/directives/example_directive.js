main_module.directive('ofExample',function(){

	var directive = {};
	// define how the directive is going to be used: 'A' = attribute, 'C' = class, 'E' = element, 'N' = comment

	directive.restrict = 'E';

	directive.templateUrl = "/FrontEnd/directives/content.html";

	return directive;
});