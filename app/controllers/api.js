var db = require('../util/db');
var client = require('../util/twitter');

//results api controller
exports.results = (req, res) => 
{
    var query = req.query.q;
    if (query)
    {
        //save query to searches
        db.getCollection('searches').insert({term: query});
        db.saveDatabase();
        
        //query twitter api
        client.get('search/tweets', {q:query}, (error, tweets, response) => res.json(tweets));
    } else {
        res.send('Error');
    }
};