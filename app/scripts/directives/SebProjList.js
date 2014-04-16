'use strict';

angular.module('seba1511githubioApp')
    .directive('sebProjList', function() {
        return {
            templateUrl: 'views/directives/sebprojlist.html',
            restrict: 'EACM',
            scope: {
                proj: '=proj',
                auth: '=auth'
            },
            link: function postLink(scope, element, attrs) {}
        };
    });