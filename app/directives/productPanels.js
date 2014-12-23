(function(){
    'use strict';

    angular.module('gemStore.directives')
        .directive('productPanels', function productPanels(){
            return {
                restrict: 'E',
                templateUrl: 'templates/product-panels.html',
                controller: 'PanelController',
                controllerAs: 'panel'
            }
        });
})();