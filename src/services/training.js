define([
  'gids-resource'
], function () {
  'use strict';
  function Category(APIv2) {
    return APIv2('/training/:id');
  }

  Category.$inject = ['APIv2'];
  Category.deps = ['gids.resource'];
  return Category;
});
