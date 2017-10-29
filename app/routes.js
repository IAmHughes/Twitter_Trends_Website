var core = require('./controllers/core');
module.exports = function(app)
{
    //home Route
    app.get('/', core.home);

    //top Route
    app.get('/top', (req, res) => res.send('This is the top page'));

    //results Route
    app.get('/api/results', (req, res) => res.json({message: 'This is the results page'}));
}