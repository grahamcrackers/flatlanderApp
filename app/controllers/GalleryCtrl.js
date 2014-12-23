(function(){
    'use strict';

    angular.module('gemStore.controllers')
        .controller('GalleryController', function GalleryController(){
            this.current = 0;
            this.setCurrent = function(newGallery){
                this.current = newGallery || 0;
            };

        });
})();