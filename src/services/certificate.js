define([
    'gids-resource'
], function () {
    'use strict';
    function Certificate (APIv2) {
        return APIv2('/certificate/:id');
    }
    Certificate.$inject = ['APIv2'];
    Certificate.deps = ['gids.resource'];
    return Certificate;
});