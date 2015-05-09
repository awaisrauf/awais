'use strict';

/**
 * @ngdoc function
 * @name seba1511githubioApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the seba1511githubioApp
 */
angular.module('seba1511githubioApp')
    .controller('BlogCtrl', function($scope, $firebase, $firebaseSimpleLogin) {
        var projectsRef = new Firebase(
            "https://blazing-fire-2321.firebaseio.com/blogs");


        $scope.blogs = $firebase(projectsRef);
        $scope.auth = $firebaseSimpleLogin(projectsRef);

        $scope.blogs.$on("loaded", function() {
            var indexes = $scope.projects.$getIndex();
            indexes.map(function(el) {
                var proj = $scope.projects[el];
                proj.key = el;
            });
        });
    });
