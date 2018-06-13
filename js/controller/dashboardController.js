mainController.controller('dashboardController',
        ['$scope', '$timeout', 'jsonDataService', function ($scope, $timeout, jsonDataService) {

        		$scope.orderByField = 'id';
  				$scope.reverseSort = false;
  				$scope.spinner = true;
            	$scope.getJsonData = [];

            	// json data available to view with delay
				$timeout( function(){
	                jsonDataService.getCakesData().then(function (response) {
	                    $scope.getJsonData = response;      
	                });
	                $scope.spinner = false;
				}, 3000 );

                // search only based on id and name
                $scope.search = function(item) {
				    if (!$scope.query || (item.id.toLowerCase().indexOf($scope.query) != -1) || (item.name.toLowerCase().indexOf($scope.query.toLowerCase()) != -1) ){
				        return true;
				    }
				    return false;
				};



         	}
        ]
);