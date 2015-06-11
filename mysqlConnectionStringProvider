var mysql = require('mysql');

var mysqlConnectionString = require('./mysqlConnectionString.js');

var mysqlConnectionStringProvider = {
    
    getMySqlConnection : function () { 
    
        var connection = mysql.createConnection(mysqlConnectionString.mysqlConnectionString.connection.dev);

        connection.connect(function (err) {
        
            if (err) { throw err; }

            console.log('Connected Successfully');
        });
        return connection;
    },

    closeMySqlConnection : function (currentConnection) {
    
        if (currentConnection) {
        
            currentConnection.end(function (err) { 
            
                if (err) { throw err; }

                console.log('connection closed successfully.')
            })
        }
    
    }


}

module.exports.mysqlConnectionStringProvider = mysqlConnectionStringProvider;
