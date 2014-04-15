'use strict';

angular.module('seba1511githubioApp')
  .directive('SebProjList', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the SebProjList directive');
      }
    };
  });
