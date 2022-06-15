import { Router } from 'express';
import { success  } from '../.././../network/response.js';
import { getData } from '../../../model/db.js';
import { getUser } from '../../../model/Users.js';

const router = Router();

router.get('/all_users_orm', async function (req, res) {
    getUser.findAll({attributes: ['username', 'email', 'password', 'phone_number']})
    .then(users => {
        res.send(users)
    })
    .catch(err => {
        console.log(err)
    })
});

router.get('/users', async function (req, res) {
    const client = await getData();

    const query_request = {
        text: 'SELECT * FROM tbl_usersdb',
    };

    client.query(query_request)
        .then(r => { success(req, res, r, 200); })
        .catch(e => { success(req, res, e.detail, 200); })
});

router.get('/users', function (req, res) {

    console.log(req.query);

    username = req.query.username;
    password = req.query.password;
    email = req.query.email;
    numberPhone = req.query.numberPhone;

    res.send({
        username: username,
        password: password,
        email: email,
        numberPhone: numberPhone,
    });
});

router.post('/register', async function (req, res) {
    // Realizar conexión a db
    const client = await getData();
    let username = req.query.username;
    let email = req.query.email;
    let password = req.query.password;
    let phone_number = req.query.phone_number;

    const query_request = {
        text: 'INSERT INTO tbl_usersdb(username, email, password, phone_number) VALUES($1, $2, $3, $4)',
        values: [username, email, password, phone_number]
    };

    client.query(query_request)
        .then(r => { success(req, res, r, 200); })
        .catch(e => { success(req, res, e.detail, 200); })
});

router.post('/register', function (req, res) {

    console.log(req.query);

    username = req.query.username;
    password = req.query.password;
    email = req.query.email;
    numberPhone = req.query.numberPhone;

    res.send({
        username: username,
        password: password,
        email: email,
        numberPhone: numberPhone,
        token: "",
        id_User: "1",
        success: "success",
    });
});

router.delete('/remove', async function (req, res) {
    // Realizar conexión a db
    const client = await getData();
    let id = parseInt(req.query.id);
    console.log(id);

    const query_request = {
        text: 'DELETE FROM tbl_usersdb WHERE id = $1',
        values: [id]
    };

    client.query(query_request)
        .then(r => { success(req, res, r, 200); })
        .catch(e => { success(req, res, e.detail, 200); })
});

router.put('/update', async function (req, res) {
    // Realizar conexión a db
    const client = await getData();
    let id = parseInt(req.query.id);
    let username = req.query.username;
    let email = req.query.email;
    let password = req.query.password;
    let phone_number = req.query.phone_number;
    console.log(id, username, email, password, phone_number);

    const query_request = {
        text: 'UPDATE tbl_usersdb SET username = $1, email = $2, password = $3, phone_number = $4 WHERE id = $5',
        values: [username, email, password, phone_number, id]
    };

    client.query(query_request)
        .then(r => { success(req, res, r, 200); })
        .catch(e => { success(req, res, console.error(e), 200); })
});


var username;
var password;
var email;
var numberPhone;

async function selectdb() {
    const users = await db`
    select * from users`
}

// router.post('/login', function (req, res) {
//     console.log(req.query)

//     username = req.query.username;
//     password = req.query.password;

//     res.send({
//         username: username,
//         password: password,
//         token: "",
//         id_User: "1",
//         success: "succes",
//     });
// });



// router.put('/update', function (req, res) {

//     console.log(req.query);

//     username = req.query.username;
//     password = req.query.password;
//     email = req.query.email;
//     numberPhone = req.query.numberPhone;

//     res.send({
//         username: username,
//         password: password,
//         email: email,
//         numberPhone: numberPhone,
//         token: "",
//         id_User: "1",
//         success: "succes",
//     });
// });

router.get('/success1', function (req, res) {
    _success(req, res, "", 200)
    // res.send ({
    //     success : 'success 1',
    // });
});

router.get('/success2', function (req, res) {
    res.send({
        success: 'success 2',
    });
});

export default router;