module.exports = function(app)
{
    //home Route
    app.get('/', (req, res) => res.send('This is the home page'));

    //top Route
    app.get('/top', (req, res) => res.send('This is the top page'));

    //results Route
    app.get('/api/results', (req, res) => res.json({message: 'This is the results page'}));
}