(function(){
    'use strict';

    angular.module('gemStore.controllers')
        .controller('ReviewController', function ReviewController(){
            this.review = {};

            this.addReview = function(product){
                this.review.createdOn = Date.now();
                product.reviews.push(this.review);
                this.review = {};
            }
        });
})();