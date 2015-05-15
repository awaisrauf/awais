'use strict';

/**
 * @ngdoc function
 * @name seba1511githubioApp.controller:AdminCtrl
 * @description
 * # AdminCtrl
 * Controller of the seba1511githubioApp
 */
angular.module('seba1511githubioApp')
    .controller('AdminCtrl', function($scope, $firebase, $firebaseSimpleLogin) {
        var projectsRef =
            new Firebase(
                'https://blazing-fire-2321.firebaseio.com/projects'),
            blogsRef = new Firebase(
                'https://blazing-fire-2321.firebaseio.com/blogs'),
            firebaseRef = new Firebase(
                'https://blazing-fire-2321.firebaseio.com/');

        $scope.projects = $firebase(projectsRef);
        $scope.blogs = $firebase(blogsRef);
        $scope.auth = $firebaseSimpleLogin(firebaseRef);
        $scope.loggedIn = true;

        $scope.blogs.$on("loaded", function() {
            var indexes = $scope.blogs.$getIndex();
            indexes.map(function(el) {
                var proj = $scope.blogs[el];
                proj.key = el;
            });
            $scope.currentBlog = {
                title: '',
                date: new Date()
                    .getTime(),
                content: '',
                summary: '',
                key: $scope.blogs.length,
            };


        });

        $scope.projects.$on("loaded", function() {
            var indexes = $scope.projects.$getIndex();
            indexes.map(function(el) {
                var proj = $scope.projects[el];
                proj.key = el;
            });
            $scope.currentProject = {
                title: '',
                date: new Date()
                    .getTime(),
                link: '',
                description: '',
                ai: false,
                quantum: false,
                key: $scope.projects.length,
            };

        });

        $scope.assignProj = function(p) {
            $scope.currentProject = {
                title: p.title,
                date: p.date,
                link: p.link,
                description: p.description,
                ai:p.ai,
                quantum: p.quantum,
            };
        };

        $scope.assignBlog = function(b) {
            $scope.currentBlog = {
                title: b.title,
                date: b.date,
                content: b.content,
                summary: b.summary,
            };
        };

        $scope.login = function() {
            $scope.auth.$login('password', {
                    email: $scope.email,
                    password: $scope.password,
                    rememberMe: true
                })
                .then(function(user) {
                    $scope.loggedIn = true;
                }, function(error) {
                    alert('Login failed: ' + error);
                });
        }
    });
