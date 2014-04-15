'use strict';

angular.module('seba1511githubioApp')
    .controller('MainCtrl', function($scope) {
        var projectsRef = new Firebase(
            "https://blazing-fire-2321.firebaseio.com/projects");

        $scope.projects = [{
            title: 'Project Title',
            date: 1397595807852,
            link: 'asdfadsf',
            description: 'asdfasdf',
        }, {
            title: 'Project Title',
            date: 1397595807852,
            link: 'asdfadsf',
            description: 'asdfasdf',
        }, {
            title: 'Project Title',
            date: 1397595807852,
            link: 'asdfadsf',
            description: 'asdfasdf',
        }, {
            title: 'Project Title',
            date: 1397595807852,
            link: 'asdfadsf',
            description: 'asdfasdf',
        }, ];
    });
