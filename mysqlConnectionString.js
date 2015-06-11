

var mysqlConnectionString = {
    
    connection  :{
        
        dev : {
            host: 'yourhost',
            user: 'yourdatabaseusername',
            password : 'yourpasssword',
            database : 'yourdatabasename'
        }

        ,
        
        qa : {
            host: 'yourhost',
            user: 'yourdatabaseusername',
            password : 'yourpasssword',
            database : 'yourdatabasename'
        }
        ,prod : {
            host: 'yourhost',
            user: 'yourdatabaseusername',
            password : 'yourpasssword',
            database : 'yourdatabasename'
        }
    
    }

};

module.exports.mysqlConnectionString = mysqlConnectionString;
