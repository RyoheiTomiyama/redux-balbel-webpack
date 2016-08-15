var express = require('express');
var router = express.Router();

var Post = require('../models/post');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/posts', function(req,res){
	Post.find({}).exec(function(err,posts){
		if(!!err) throw err;
		res.send(posts);
	})
})

module.exports = router;
