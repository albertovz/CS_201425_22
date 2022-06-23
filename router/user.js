import { Router } from 'express';
import { getUser } from '../models/Users.js'
import bcrypt from 'bcrypt';

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
        password: req.query.password,

    }, { fields: ['username', 'password'] })
        .then(users => {
            res.send(users)
        })
        .catch(err => {
            res.send(err)
            console.log(err)
        });
});

router.put('/update', async function (req, res) {

    let id = req.query.id;
    let newDatas = req.query;

    getUser.findOne({ where: { id: id } })
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
    getUser.destroy({
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