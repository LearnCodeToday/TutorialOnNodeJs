


var connectionProvider = require('../mysqlConnectionStringProvider.js');

var productCategoryDao = {
    
    createProductCategory : function (productCategory, OnSuccessfulCallback) {
        
        var insertStatement = "INSERT INTO productCategory SET?";
        
        var category = {
            
            
            CategoryName : productCategory.categoryName,
            Details: productCategory.details,
            IsValid : true,
            CreatedDate : new Date()
        };
        
        console.log(category);
        
        var connection = connectionProvider.mysqlConnectionStringProvider.getMySqlConnection();
        
        if (connection) {
            
            connection.query(insertStatement, category, function (err, result) {
                
                if (err) { }
                
                OnSuccessfulCallback({ status : 'successful' });
                console.log(result)
            });

            connectionProvider.mysqlConnectionStringProvider.closeMySqlConnection(connection);
        }
    }

    ,

    getAllProductCategory : function (callback) { 
    
        var connection = connectionProvider.mysqlConnectionStringProvider.getMySqlConnection();
        var queryStatement = "SELECT * FROM productCategory ORDER BY ID DESC";
        
        if (connection) {
            
            connection.query(queryStatement, function (err, rows, fields) {
                
                if (err) { throw err; }
                
                
                console.log(rows);

                callback(rows);
            });
            
            connectionProvider.mysqlConnectionStringProvider.closeMySqlConnection(connection);
        }
    }

    ,

    getProductCategoryById : function (productCategoryId, callback) {
        
        var connection = connectionProvider.mysqlConnectionStringProvider.getMySqlConnection();
        var queryStatement = "SELECT * FROM productCategory WHERE id = ?";
        
        if (connection) {
            
            connection.query(queryStatement, [productCategoryId] ,  function (err, rows, fields) {
                
                if (err) { throw err; }
                
                
                console.log(rows);
                
                callback(rows);
            });
            
            connectionProvider.mysqlConnectionStringProvider.closeMySqlConnection(connection);
        }
    }


    ,

    updateProductCategory: function (categoryName, details, productCategoryId, callback) {
    
    
        var connection = connectionProvider.mysqlConnectionStringProvider.getMySqlConnection();
        var queryStatement = "UPDATE  productCategory SET CategoryName= ? ,  Details = ?, ModifiedDate = ?  WHERE id = ?";
        
        if (connection) {
            
            connection.query(queryStatement, [ categoryName, details,  new Date(), productCategoryId] , function (err, rows, fields) {
                if (err) { throw err; }
                console.log(rows);
                
                if (rows) { 

                
                    callback({ status : 'successful' });
                }
            });
            
            connectionProvider.mysqlConnectionStringProvider.closeMySqlConnection(connection);
        }
    }
    ,

    deleteProductCategoryById : function (productCategoryId, callback) {
    
    
        var connection = connectionProvider.mysqlConnectionStringProvider.getMySqlConnection();
        var queryStatement = "DELETE  FROM  productCategory   WHERE id = ?";
        
        if (connection) {
            
            connection.query(queryStatement, [productCategoryId] , function (err, rows, fields) {
                if (err) { throw err; }
                console.log(rows);
                
                if (rows) {
                    
                    callback({ status : 'successful' });
                }
            });
            
            connectionProvider.mysqlConnectionStringProvider.closeMySqlConnection(connection);
        }
    }

}

module.exports.productCategoryDao = productCategoryDao; 
                
    
