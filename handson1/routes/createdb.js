exports.create = function(req, res){
    nano.db.create(req.body.dbname, function(body){
        if (err){
            res.send("Error creating the Database.");
            return;
        }
        res.send("Database created successfully.")
    });
};