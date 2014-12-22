(function(){
  'use strict';

  // Declare app level module which depends on views, and components
  angular.module('gemStore', [ ])

      .controller('StoreController', function(){
        this.products = gems;
      });

  var gems = [
    {
      name: 'Dodecahedron',
      price: 2.95,
      description: 'Some gems have hiden qualities beyond their luster, beyond their shine... Dodeca is one of those gems',
      canPurchase: true,
      soldOut: false,
    },
    {
      name: 'Pentagonal Gem',
      price: 5.95,
      description: 'Some gems have hiden qualities beyond their luster, beyond their shine... Dodeca is one of those gems',
      canPurchase: true

    }
  ];
})();
