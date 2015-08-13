define([
    'gids-resource'
], function () {
    'use strict';
    function Category (APIv2) {
        return APIv2('/category/:categoryId');
    }
    Category.$inject = ['APIv2'];
    Category.deps = ['gids.resource'];
    return Category;
});