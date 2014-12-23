(function(){
    'use strict';

    angular.module('gemStore.directives')
        .directive('productGallery', function productGallery(){
            return {
                restrict: 'E',
                templateUrl: 'templates/product-gallery.html',
                controller: 'GalleryController',
                controllerAs: 'gallery'
            }
        });
})();