(function(){
  'use strict';

  // Declare app level module which depends on views, and components
  angular.module('gemStore', [ ])

      .controller('StoreController', function(){
        this.product = gem;
      });

  var gem = {
    name: 'Dodecahedron',
    price: 2.95,
    description: '. . .',
  }

})();
