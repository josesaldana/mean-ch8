angular.module('example')
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'example/views/example.client.view.html',
        controller: function() { 
          console.log('here'); 
        }
      }).
      otherwise({
        redirectTo: '/'
      });
    }
  ]);

