'use strict';

/**
 * @ngdoc function
 * @name seba1511githubioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the seba1511githubioApp
 */
angular.module('seba1511githubioApp')
  .controller('MainCtrl', function ($scope, $firebase) {
        var projectsRef = new Firebase(
            "https://blazing-fire-2321.firebaseio.com/blogs");

        $scope.blogs = $firebase(projectsRef);

        $scope.blogs.$on("loaded", function() {
            var indexes = $scope.projects.$getIndex();
            indexes.map(function(el) {
                var proj = $scope.projects[el];
                proj.key = el;
            });
            $scope.carousel = $scope.projects.slice(0, 3);
        });
  });
