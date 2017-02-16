var express = require('express');
var router = express.Router();

//MAINBLOGSTUFFS
router.route('/test')
	.get(function(req, res) {
	  TestModel.find({}, function(err, result) {
		if (err) {
			return res.send(err);
		}
		res.json(result);
		});
	})
	.post(function(req, res) {
		var testObj = new TestModel(req.body);

		testObj.save(function(err) {
			if (err) {
				return res.send(err);
			}

			res.send({ message: 'Test Added!' });
		});
	});

module.exports = router;



