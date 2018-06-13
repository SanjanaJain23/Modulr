mainController.service('jsonDataService', function ($http) {
    
    return {
        getCakesData: function () {
            return $http({
                method: 'GET',
                url: '../../json/results.json',
                headers: {'Content-Type': 'application/json'}
            }).then(function successCallback(response) {
                return response.data.content;
            }, function errorCallback(response) { });
        }
    }


});