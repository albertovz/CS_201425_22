import { Router } from 'express';
import { getChildren } from '../models/Childrens.js';


const router = Router();

router.get('/get_all_children', async function (req, res) {
    getChildren.findAll({ exclude: [] })
        .then(users => {
            res.send(users)
        })
        .catch(err => {
            console.log(err)
        })
});

router.post('/add_child', async function (req, res) {
    getChildren.create({
        
        name: req.query.name,
        last_name: req.query.last_name,
        second_surname: req.query.second_surname,
        age: req.query.age,
        id_node : req.query.id_node

    }, { fields: ['name', 'last_name', 'second_surname', 'age', 'id_node'] })
        .then(users => {
            res.send(users)
        })
        .catch(err => {
            res.send(err)
            console.log(err)
        });
});

export default router;