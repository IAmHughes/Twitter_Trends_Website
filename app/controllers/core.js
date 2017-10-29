var db = require('../util/db');
var client = require('../util/twitter');

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

//results controller
exports.results = (req, res) => 
{
    var query = req.query.q;
    if (query)
    {
        //save query to searches
        db.getCollection('searches').insert({term: query});
        db.saveDatabase();
        
        //query twitter results
        client.get('search/tweets', {q:query}, (error, tweets, response) => res.render('results', {query: query, tweets: tweets.statuses}));
    } else {
        res.send('Error');
    }
};