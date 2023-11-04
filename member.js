function skillsMember() {
    return {
        restrict: 'EA',
        scope: {
            member: '='
        },
        templateUrl: 'skills-member.html',
        controller: 'SkillsMemberController',
        controllerAs: 'skillsMember'
    };
}
