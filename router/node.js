import { Router } from 'express';
import { getNode } from '../models/Nodes.js'


const router = Router();

router.get('/get_all_nodes', async function (req, res) {
    getNode.findAll({ exclude: [] })
        .then(users => {
            res.send(users)
        })
        .catch(err => {
            console.log(err)
        })
});

router.post('/add_node', async function (req, res) {
    getNode.create({
        
        name: req.query.name,
        last_name: req.query.last_name,
        second_surname: req.query.second_surname,
        age: req.query.age,
        id_user : req.query.id_user

    }, { fields: ['name', 'last_name', 'second_surname', 'age', 'id_user'] })
        .then(users => {
            res.send(users)
        })
        .catch(err => {
            res.send(err)
            console.log(err)
        });
});

export default router;