(function(){
    'use strict';

    angular.module('gemStore.controllers')
        .controller('PanelController', function PanelController(){
            this.tab = 1;

            this.selectTab = function(setTab){
                this.tab = setTab;
            };

            this.isSelected = function(checkTab){
                return this.tab === checkTab;
            };

        });
})();