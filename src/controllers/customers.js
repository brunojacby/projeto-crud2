const CustomersModel = require('../models/customers')
const { crypto } = require('../utils/password')

function index(req, res) {
    res.render('register', {
        title: 'Cadastro de Clientes'
    })
}


async function add(req, res) {
    const {
        name,
        age,
        email,
        password,
    } = req.body

    const passwordCrypto = await crypto(password)

    const register = new CustomersModel({
        name,
        age,
        email,
        password: passwordCrypto,
    })

    register.save()
    res.send('Cadastro Realizado!')
}

function listUsers(req, res) {
    res.render('listUsers', {
        title: 'Listagem de Usuarios',
        users: [

        ]
    })
}

module.exports = {
    index,
    add,
    listUsers,
}