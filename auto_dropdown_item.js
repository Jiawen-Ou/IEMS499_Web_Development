

var test = angular.module('MyApp', []);
test.controller('MyController', function($scope) {
	$scope.my = { 
				building: '',
				room: '',
				kinect: '',
			};
	$scope.buildings = [{
				Id: '1',
				Name: 'One',
			},  {
				Id: '2',
				Name: 'Two',
			},  {
				Id: '3',
				Name: 'Three',
			// }, 	{
			// 	Id: ': #4',
			// 	Name: 'Four',
			}];
	$scope.rooms = [{
				Id: '1',
				Name: 'One',
			},  {
				Id: '2',
				Name: 'Two',
			// }, 	{
			// 	Id: ': #3',
			// 	Name: 'Three',
			}];
	$scope.kinects = [{
				Id: '1',
				Name: 'One',
			},  {
				Id: '2',
				Name: 'Two',
			}];
});


var test2 = angular.module('MyApp2', []);
test.controller('MyController2', function($scope) {
	$scope.items = [
		{ id: 1, content: '1', 
	      start: "2016-04-29 15:10:44.773",  
	      end:   "2016-04-29 15:10:44.797", 
	      type: 'background'
		},
	  	{ id: 2, content: '2', 
	      start: "2016-04-29 15:10:44.797",  
	      end:   "2016-04-29 15:10:44.813", 
	      type: 'background', 
	      className: 'negative'
	    }
	];
});


















