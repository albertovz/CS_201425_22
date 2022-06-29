import { Router } from 'express';
import { getChildren } from '../models/Childrens.js';


const router = Router();

router.get('/get_all_children', async function (req, res) {
    getChildren.findAll({ attributes: ['id','name', 'last_name', 'second_surname', 'age'] })
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
        nodeId : req.query.nodeId

    }, { fields: ['name', 'last_name', 'second_surname', 'age', 'nodeId'] })
        .then(child => {
            res.send(child)
        })
        .catch(err => {
            res.send(err)
            console.log(err)
        });
});

router.put('/update', async function (req, res) {

    let id = req.query.id;
    let newDatas = req.query;

    getChildren.findOne({ where: { id: id } })
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
    getChildren.destroy({
        where: { id: id }
    }).then(function (rowDeleted) { // rowDeleted will return number of rows deleted
        if (rowDeleted === 1) {
            res.send(console.log('Deleted successfully'));
        } else {
            res.send(console.log('No exists'));
        }
    }, function (err) {
        console.log(err);
    });
    //res.send(req.query);
});

export default router;