var express = require('express');
const { route } = require('../app');
var router = express.Router();
var db = require('../db');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/submit', function(req, res, next) {
  res.render('submit', { title: 'Express' });
});



router.post('/feedback', function(req, res, next) {
  // store feedback 
  db.addFeedback(req.body.name, req.body.email, req.body.message);
  res.redirect('/submit');
})

router.get("/feedback", async function(req, res, next) {
  const data = await db.getFeedbacks();
  res.render("list", {feedback: data});
});

module.exports = router;
