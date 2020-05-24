const express = require("express");
const burger = require('../models/burger');

const router = express.Router();

router.get("/", function(req,res){
    burger.all(function(data){
        const hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

router.post("/api/burger", function(req,res){

    burger.add(["burger_name","burger_details"], [req.body.burger, req.body.details], (result) => {
        res.json({ id: result.insertId });
    })
});

router.put("/api/burgers/:id", (req, res) => {
	let x = req.body.devoured
	
	burger.update(req.params.id, "devoured", x, (result) => {
		if (result.changedRows == 0) {
			return res.status(404).end();
		} else {
			res.status(200).end();
		}
	});
});

module.exports = router;