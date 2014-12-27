var index = require('./controllers/index.js');

module.exports = function(app) {
    // REST conventions
    //   GET     /resources          ->  index
    //   GET     /resources/new      ->  new
    //   POST    /resources          ->  create
    //   GET     /resources/:id      ->  show
    //   GET     /resources/:id/edit ->  edit
    //   PUT     /resources/:id      ->  update
    //   DELETE  /resources/:id      ->  destroy

    app.use('/', index);
    app.use('/api/v1/:name', index);
};