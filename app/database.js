var loki = require('lokijs');
var db = new loki('db.json');

//add collections to loki db, populate with some top terms by default
db.addCollection('top').insert([
    {term: 'JavaScript'      , style: 'warning' },
    {term: 'Angular 2'       , style: 'danger'  },
    {term: 'NodeJS'          , style: 'success' },
    {term: 'Golang'          , style: 'info'    },
    {term: 'iOS'             , style: 'default' },
    {term: 'ReactJS'         , style: 'warning' },
    {term: 'Ionic'           , style: 'info'    },
    {term: 'REST'            , style: 'primary' },
    {term: 'Authentication'  , style: 'default' },
    {term: 'Android'         , style: 'success' }
]);

//add collection for past searches
db.addCollection('searches');

db.saveDatabase();