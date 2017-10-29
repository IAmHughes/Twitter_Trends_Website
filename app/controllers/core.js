var db = require('../util/db');

exports.home = (req, res) => 
{
    db.loadDatabase({}, () =>
    {
        res.render('index', {searches: db.getCollection('searches').data})
    });
};