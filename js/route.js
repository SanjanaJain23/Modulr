app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
                when('/dashboard', {
                    templateUrl: '../partials/dashboard.tmpl',
                    controller: 'dashboardController'
                }).
                otherwise({
                    redirectTo: '/dashboard',
                    controller: 'dashboardController'
                });
    }]);