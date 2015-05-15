'use strict';

/**
 * @ngdoc function
 * @name seba1511githubioApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the seba1511githubioApp
 */
angular.module('seba1511githubioApp')
    .controller('AboutCtrl', function($scope, $firebase, $firebaseSimpleLogin) {
        var projectsRef =
            'https://blazing-fire-2321.firebaseio.com/projects',
            blogsRef = 'https://blazing-fire-2321.firebaseio.com/blogs',
            firebaseRef = 'https://blazing-fire-2321.firebaseio.com/';

        $scope.projects = $firebase(projectsRef);
        $scope.blogs = $firebase(blogsRef);
        $scope.auth = $firebaseSimpleLogin(firebaseRef);
        $scope.loggedIn = false;

        $scope.login = function() {
            $scope.auth.$login('password', {
                    email: $scope.email,
                    password: $scope.password,
                    rememberMe: true
                })
                .then(function (user) {
                    $scope.loggedIn = true;
                }, function (error) {
                    alert('Login failed: ' + error);
                });
        }
    });
