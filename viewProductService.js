angular.module("productModule")
.factory("productService", productService);


productService.$inject = ['$http', '$location', 'productCategoryService' ];


function productService($http, $location, productCategoryService) {
    
    return {
        
        createProduct : function (product) {
            return $http.post('/api/createProduct', 
                            {
                                productCategoryId : product.productCategoryId,
                                productCost : product.productCost,
                                name : product.name,
                                description : product.description,
                                productPrice : product.productPrice,
                                productImage : product.productImage

                        }
            );
        
        },
        
       
       deactivateProduct : function(product) {
           
           
           return $http.put('api/deactiveProduct/' + product.ProductId);
       },
      
        getAllProducts : function(){
            
            return $http.get('/api/getAllProducts');
        },
        
        getAllProductCategories : function () {
        
            return productCategoryService.getAllProductCategories();
        
        },
        
       
        getIdFromEndPoint : function () {
            
            var absoluteUrl = $location.absUrl();
            var segments = absoluteUrl.split("/");
            var productCategoryId = segments[segments.length - 1];
            return productCategoryId
        
       
        }
    }

}
