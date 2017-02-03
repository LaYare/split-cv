(function() {
  'use strict';

  angular
    .module('splitCv')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
