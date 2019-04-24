var express = require('express');
var router = express.Router();

var usuarioController = require('../controllers/usuario')
var salaController = require('../controllers/sala')
var mensagemController = require('../controllers/mensagem')

router.get('/', (req, res) => {
    res.send({ title: 'Express running' });
})

router.post('/usuario/login', (req, res) => {

    const usuario = {
        nome: req.body.nome,
        nickname: req.body.nickname
    }

    if (!(usuario.nome || usuario.nickname)) {
        res.status(400).json({ erro: "Necesário informar usuário ou nickname" });
    } else {

        usuarioController.checkUsuarioExist(usuario, function (data) {
           
            if (data.length >= 1) {
                res.status(200).json(data);
            } else {
                usuarioController.cadastrarUsuario(usuario, function (data) {
                    res.status(201).json(data);
                })
            }
        })

    }

})

router.get('/usuario/listar-todos', (req, res) => {

    usuarioController.obterUsuarios(function (data) {
        res.status(201).json(data);
    })

})

router.patch('/usuario/status', (req, res) => {

    const usuario = {
        id: req.body.id_usuario,
        status: req.body.status
    }

    console.log('patch', usuario)

    if (!(usuario.id_usuario || usuario.status)) {
        res.status(400).json({ erro: "Necesário informar todos os campos do usuário!" });
    } else {

        usuarioController.alterarStatusUsuario(usuario, function (data) {
            
            res.status(201).json(data);
            
        })
        
    }

})

router.post('/sala/nova-sala', (req, res) => {

    const nomeSala = req.body.nome

    if (!nomeSala) {
        res.status(400).json({ erro: "Necesário informar nome da nova sala!" });
    } else {

        salaController.cadastrarSala(nomeSala, function (data) {
            res.status(201).json(data);
        })
    }

})

router.get('/sala/obter-salas', (req, res) => {

    salaController.obterSalas(function (data) {
        res.status(200).json(data);
    })

})

router.get('/sala/obter-sala/:nomeSala', (req, res) => {

    const nomeSala = req.params.nomeSala

    salaController.obterSalaByNome(nomeSala, function (data) {
        if (!data.length >= 1) {
            salaController.cadastrarSala(nomeSala, function (data) {
                res.status(201).json(data);
            })
        } else {
            res.status(200).json(data);
        }
    })

})

router.get('/sala/obter-sala/:id', (req, res) => {

    const idSala = req.params.id

    salaController.obterSalaById(idSala, function (data) {
        res.status(200).json(data);
    })

})

router.post('/mensagem/nova-mensagem', (req, res) => {

    const mensagem = req.body.objMensagem
   
    if (!(mensagem.id_usuario || mensagem.id_sala || mensagem.texto || mensagem.data_envio)) {
        res.status(400).json({ erro: 'Necesário informar todos os campos para enviar a mensagem!' });
    } else {

        mensagemController.novaMensagem(mensagem, function (data) {
            res.status(201).json(data);
        })
    }

})

router.get('/mensagem/obter-todas-mensagens', (req, res) => {

    mensagemController.obterTodasMensagens(function (data) {
        res.status(200).json(data);
    })

})

router.get('/mensagem/obter-mensagens/:id_sala', (req, res) => {

    const idSala = req.params.id_sala

    if (!idSala) {
        res.status(400).json({ erro: "Necesário informar o id da sala!" });
    } else {
        mensagemController.obterMensagensBySala(idSala, function (data) {
            res.status(200).json(data);
        })
    }

})

module.exports = router;
