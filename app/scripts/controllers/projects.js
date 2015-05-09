'use strict';

/**
 * @ngdoc function
 * @name seba1511githubioApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the seba1511githubioApp
 */
angular.module('seba1511githubioApp')
    .controller('ProjectsCtrl', function($scope, $firebase,
        $firebaseSimpleLogin) {
        var projectsRef = new Firebase(
            "https://blazing-fire-2321.firebaseio.com/projects");

        $scope.projects = $firebase(projectsRef);
        $scope.auth = $firebaseSimpleLogin(projectsRef);

        $scope.projects.$on("loaded", function() {
            var indexes = $scope.projects.$getIndex();
            $scope.quantum = [];
            $scope.ai = [];
            $scope.misc = [];
            indexes.map(function(el) {
                var proj = $scope.projects[el];
                proj.key = el;
                if (proj.quantum) {
                    $scope.quantum.push();
                }
                else if (proj.ai) {
                    $scope.ai.push(proj);
                }
                else {
                    $scope.misc.push(proj);
                }
            });
        });

        $scope.current = {
            title: '',
            date: new Date()
                .getTime(),
            link: '',
            description: ''
        };

        $scope.login = function() {
            $scope.auth.$login('password', {
                    email: $scope.email,
                    password: $scope.password,
                    rememberMe: true
                })
                .then(function(user) {
                        console.log('Logged in as: ', user.uid);
                    },
                    function(error) {
                        console.error('Login failed: ', error);
                    });
        };
    });
