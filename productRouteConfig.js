function productRouteConfig(app) {
    
    this.app = app;
    this.routeTable = [];
    this.init();
}


productRouteConfig.prototype.init = function () {
    
    var self = this;
    
    this.addRoutes();
    this.processRoutes();


}


productRouteConfig.prototype.processRoutes = function () {
    
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
        
        else if (route.requestType == 'put'){
            console.log(route);
            self.app.put(route.requestUrl, route.callbackFunction);
            
        }
        
        
    
    });
}


productRouteConfig.prototype.addRoutes = function () {
    
    var self = this;
    
    self.routeTable.push({
        
        requestType : 'get',
        requestUrl : '/createProduct',
        callbackFunction : function (request, response) {
            
            response.render('createProduct', { title : "Create Product " });
        }
    });
    
    
    
    self.routeTable.push({
        
        requestType : 'get',
        requestUrl : '/viewProduct',
        callbackFunction : function (request, response) {
           
            response.render('viewProduct', { title : "View Product" });
        }
    });
    
    
    
    self.routeTable.push({
    
        requestType : 'get',
        requestUrl : '/api/getAllProducts',
        callbackFunction : function (request, response) {
            var productDao = require('../Server/Dao/productDao.js');
            productDao.productDao.getAllProducts(function (products) {
                    response.json({products : products});
                   // console.log(status);
            });
            
        }
    
    });
    
   
     self.routeTable.push({
    
        requestType : 'put',
        requestUrl : '/api/deactiveProduct/:productId',
        callbackFunction : function (request, response) {
            var productDao = require('../Server/Dao/productDao.js');
            productDao.productDao.deactiveProduct(request.params.productId, function (status) {
                    response.json(status);
                    //console.log(status);
            })
            
        }
    
    });
   
    
    
    
    self.routeTable.push({
    
        requestType : 'post',
        requestUrl : '/api/createProduct',
        callbackFunction : function (request, response) {
            var productDao = require('../Server/Dao/productDao.js');
            productDao.productDao.createProductCategory(request.body, function (status) {
                    response.json(status);
                    console.log(status);
            })
            
        }
    
    });
    
    
}

module.exports = productRouteConfig;
