function productCategoryRouteConfig(app) { 

    this.app = app;
    this.routeTable = [];
    this.init();
}


productCategoryRouteConfig.prototype.init = function () { 

    var self = this;

    this.addRoutes();
    this.processRoutes();


}


productCategoryRouteConfig.prototype.processRoutes = function () { 

    var self = this;

    self.routeTable.forEach(function (route) {
    
        if (route.requestType == 'get') {
            
            console.log(route);
            self.app.get(route.requestUrl, route.callbackFunction);
        }
        else if (route.requestType == 'post') {
        
            console.log(route);
            self.app.post(route.requestUrl, route.callbackFunction);
        }
        else if (route.requestType == 'delete') {
        
            console.log(route);
            self.app.delete(route.requestUrl, route.callbackFunction);
        }
    
    });
}


productCategoryRouteConfig.prototype.addRoutes = function () {

    var self = this;

    self.routeTable.push({
    
        requestType : 'get',
        requestUrl : '/createProductCategory',
        callbackFunction : function (request, response) { 
        
            response.render('createProductCategory', { title : "Create Product Category" });
        }
    });
    
    
    self.routeTable.push({
        
        requestType : 'post',
        requestUrl : '/api/createProductCategory',
        callbackFunction : function (request, response) {
            
            var productCategoryDao = require('../Server/Dao/productCategoryDao.js');
            
            
            console.log(request.body);
            
            productCategoryDao.productCategoryDao.createProductCategory(request.body, 
                function (status) { 
            
                response.json(status); 

                console.log(status);
            });
            
        }
    });


    self.routeTable.push({
        
        requestType : 'get',
        requestUrl : '/viewProductCategory',
        callbackFunction : function (request, response) {
            
            response.render('viewProductCategory', { title : "View Product Category" });
        }
    });

    self.routeTable.push({
        
        requestType : 'get',
        requestUrl : '/api/getAllProductCategory',
        callbackFunction : function (request, response) {
            
            var productCategoryDao = require('../Server/Dao/productCategoryDao.js');
            productCategoryDao.productCategoryDao.getAllProductCategory (
                function (productCategories) {
                    console.log(productCategories);
                    response.json({ productCategories : productCategories });
            });
            
        }
    });

    self.routeTable.push({
        
        requestType : 'get',
        requestUrl : '/editProductCategory/:productCategoryId',
        callbackFunction : function (request, response) {
            
            response.render('editProductCategory', { title : "Edit Product Category" });
        }
    });


    self.routeTable.push({
        
        requestType : 'get',
        requestUrl : '/api/getProductCategoryById/:productCategoryId',
        callbackFunction : function (request, response) {
            
            var productCategoryDao = require('../Server/Dao/productCategoryDao.js');
            productCategoryDao.productCategoryDao.getProductCategoryById(request.params.productCategoryId, 
                function (productCategories) {
                    console.log(productCategories);
                    response.json({ productCategories : productCategories });
                });
            
        }
    });


    self.routeTable.push({
        
        requestType : 'post',
        requestUrl : '/api/updateProductCategory',
        callbackFunction : function (request, response) {
            
            console.log(request.body.categoryName);

            var productCategoryDao = require('../Server/Dao/productCategoryDao.js');
            productCategoryDao.productCategoryDao.updateProductCategory(request.body.categoryName, request.body.details, request.body.productCategoryId,
                function (status) {
                console.log(status);
                response.json(status);
            });
        }
    });


    self.routeTable.push({
        
        requestType : 'delete',
        requestUrl : '/api/deleteProductCategoryById/:productCategoryId',
        callbackFunction : function (request, response) {
            
            console.log(request.params.productCategoryId);
            
            var productCategoryDao = require('../Server/Dao/productCategoryDao.js');
            productCategoryDao.productCategoryDao.deleteProductCategoryById(request.params.productCategoryId,
                function (status) {
                console.log(status);
                response.json(status);
            });
        }

    });



    
    

}

module.exports = productCategoryRouteConfig;
