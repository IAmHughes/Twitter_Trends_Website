var core = require('./controllers/core');
var api = require('./controllers/api');

module.exports = (app) =>
{
    //home Route
    app.get('/', core.home);

    //top Route
    app.get('/top', core.top);

    //results Route
    app.get('/results', core.results);

    //api results Route
    app.get('/api/results', api.results);
}