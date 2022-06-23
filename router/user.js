import { Router } from 'express';
import { getUser } from '../models/Users.js'


const router = Router();

router.get('/get_all_users', async function (req, res) {
    getUser.findAll({ exclude: [] })
        .then(users => {
            res.send(users)
        })
        .catch(err => {
            console.log(err)
        })
});

router.post('/add_user', async function (req, res) {
    getUser.create({
        
        username: req.query.username,
        // email: req.query.email,
        password: req.query.password,
        // phone_number: req.query.phone_number,
        // last_name: req.query.last_name

    }, { fields: ['username', 'password'] })
        .then(users => {
            res.send(users)
        })
        .catch(err => {
            res.send(err)
            console.log(err)
        });
});

export default router;