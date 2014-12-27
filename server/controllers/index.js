var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', {
        title: 'Happy Birthday'
    });
});

router.get('/api/v1/:name', function(req, res) {
    console.log('name', req.params.name);
    res.render('birthday', {
        title: 'Happy Birthday',
        name: req.params.name
    })
});

module.exports = router;