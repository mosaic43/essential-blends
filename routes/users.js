// const express = require('express');
// const { Pool, Client } = require('pg');
// const router = express.Router();

// //register Post
// router.post('/SignUp', (req, res) => {
//     let errors = [];

//     if(RegExp.body.password != req.body.password2){
//     errors.push({text: 'Passwords do not match'});
//     }

//     if(req.body.password.length < 8) {
//         errors.push({text: 'Password must be at least 8 characters'});
//     }

//     if(errors.length > 0){
//         res.render('/register', {
//             errors: errors,
//             firstName: req.body.firstName,
//             lastName: req.body.lastName,
//             email: req.body.email,
//             password: req.body.password,
//             password2: req.body.password2
//         });
//     } else {
//         res.send('success');
//     }
// });


// module.exports = router;



  
module.exports = {
	login: (req, res) => {
        const { user } = req
console.log("login")
console.log(user)
        //res.json(user)
        res.redirect('/')
	},

	logout: (req, res, next) => {
		req.session.destroy((err) => {
			if(err) return next(err)

			req.logout()

			res.sendStatus(200)
		})
	},

	ping: function(req, res) {
		res.sendStatus(200)
	}
}