(function(){
    'use strict';

    angular.module('gemStore.directives')
        .directive('productTitle', function productTitle(){
            return {
                restrict: 'E',
                templateUrl: 'templates/product-title.html'
            }
        });
})();