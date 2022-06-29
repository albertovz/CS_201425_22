import { Router } from 'express';
import { getNode } from '../models/Nodes.js';


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
        userId: req.query.userId

    }, { fields: ['name', 'last_name', 'second_surname', 'age', 'userId'] })
        .then(parent => {
            res.send(parent)
        })
        .catch(err => {
            res.send(err)
            console.log(err)
        });
});

router.put('/update', async function (req, res) {

    let id = req.query.id;
    let newDatas = req.query;

    getNode.findOne({ where: { id: id } })
        .then((r) => {
            console.log('\nnew data: ', newDatas.password)
            newDatas.password = newDatas.password && newDatas.password != "" ? bcrypt.hashSync(newDatas.password, 10) : "";
            r.update(newDatas)
            //   success(req, res, r, 200);
            res.send(newDatas)
            // })
            // .catch((e) => {
            //   success(req, res, e, 400);
        })
});

router.delete('/delete', async function (req, res) {
    let id = req.query.id;
    getNode.destroy({
        where: { id: id }
    }).then(function (rowDeleted) { // rowDeleted will return number of rows deleted
        if (rowDeleted === 1) {
            console.log('Deleted successfully');
        } else {
            console.log('No exists');
        }
    }, function (err) {
        console.log(err);
    });
    res.send(req.query);
});

export default router;