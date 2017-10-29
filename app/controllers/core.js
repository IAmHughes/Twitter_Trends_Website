var db = require('../util/db');

//home controller
exports.home = (req, res) => 
{
    db.loadDatabase({}, () =>
    {
        res.render('index', {searches: db.getCollection('searches').data})
    });
};

//top controller
exports.top = (req, res) => 
{
    db.loadDatabase({}, () =>
    {
        res.render('top', {terms: db.getCollection('terms').data})
    });
};