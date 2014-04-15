'use strict';

describe('Directive: SebProjList', function () {

  // load the directive's module
  beforeEach(module('seba1511githubioApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<-seb-proj-list></-seb-proj-list>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the SebProjList directive');
  }));
});
