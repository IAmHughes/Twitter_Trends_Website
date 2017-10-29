var core = require('./controllers/core');
module.exports = function(app)
{
    //home Route
    app.get('/', core.home);

    //top Route
    app.get('/top', core.top);

    //results Route
    app.get('/results', (req, res) => res.json({message: 'This is the results page'}));

    //api results Route
    app.get('/api/results', (req, res) => res.json({message: 'This is the api results page'}));
}