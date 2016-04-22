

var test = angular.module('MyApp', []);
test.controller('MyController', function($scope) {
	$scope.my = { 
				building: '',
				room: '',
				kinect: '',
			};
	$scope.buildings = [{
				Id: ': #1',
				Name: 'One',
			},  {
				Id: ': #2',
				Name: 'Two',
			},  {
				Id: ': #3',
				Name: 'Three',
			// }, 	{
			// 	Id: ': #4',
			// 	Name: 'Four',
			}];
	$scope.rooms = [{
				Id: ': #1',
				Name: 'One',
			},  {
				Id: ': #2',
				Name: 'Two',
			}, 	{
				Id: ': #3',
				Name: 'Three',
			}];
	$scope.kinects = [{
				Id: ': #1',
				Name: 'One',
			},  {
				Id: ': #2',
				Name: 'Two',
			},  {
				Id: ': #3',
				Name: 'Three',
			}, 	{
				Id: ': #4',
				Name: 'Four',
			}];
});