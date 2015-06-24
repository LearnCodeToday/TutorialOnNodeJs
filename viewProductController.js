angular.module("productModule")
.controller("viewProductController", viewProductController)


viewProductController.$inject = ['$scope', 
    '$timeout',  'validationErrorMessageId', 'validationErrorMessageId', 'productService', '$rootScope'];


function viewProductController($scope, $timeout,  validationErrorMessageId, validationErrorMessageId, productService, $rootScope) {
    
    $scope.actionComplete = false;
    
    $scope.products = [];
    
    popluateProducts();
    
    function popluateProducts() 
    {
        
        productService.getAllProducts()
            .success(function (products) {
            $scope.products = products.products;

            //alert(products);
        });
    }


   

    $scope.productDetailsView = {
        productCategoryName : "",
        productName : "",
        productDescription : '',
        productSellingPrice : "",
        productPrice : '',
        productReleaseDate : ""
    };
    
    
    $scope.showProductDetailsInformation = function(product){
       
        $scope.productDetailsView.productCategoryName = product.CategoryName;
        $scope.productDetailsView.productName = product.Name;
        $scope.productDetailsView.productDescription = product.Description;
        $scope.productDetailsView.productSellingPrice = product.ProductPrice;
        $scope.productDetailsView.productPrice = product.ProductCost;
        $scope.productDetailsView.productReleaseDate = product.CreatedDt;
    };
   
   
   
   
   $scope.deleteCurrentProduct = function(product){
       
       alert(product.ProductId);
   }
   
   $scope.editCurrentProduct = function(product){
       
       alert(product.ProductId);
   }
   
   $scope.deactivateProduct = function(product, index){
       
       if (window.confirm('Are you sure, you want to deactive this product?')){
           productService.deactivateProduct(product)
           .success(function(data){
               
               if (data.status  == 'successful'){
                   
                   $scope.products.splice(index, 1);
               }
           });
       }
       else {
           
           productService.
            getAllProducts().
            success(function(products){
                
                $scope.products = products;
            });
       }
   }
}
    
