define([
  'gids-resource'
], function () {
  'use strict';
  function Training(APIv2) {
    return APIv2('/training/:uid');
  }

  Training.$inject = ['APIv2'];
  Training.deps = ['gids.resource'];
  return Training;
});
