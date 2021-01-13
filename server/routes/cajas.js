const express = require("express");
const Caja = require("../models/cajas");
const _ = require('underscore');

const app = express();

let n = new Date();
//Año
let y = n.getFullYear();
//Mes
let m = n.getMonth() + 1;
//Día
let d = n.getDate();
//Hora
let ho = n.getHours();
//Minutos
let mi = n.getMinutes();
//Segundos
let se = n.getSeconds();

app.get("/registro/fecha/:desde/:hasta", function(req, res) {

    let fecha1 = req.params.desde;
    let fecha2 = req.params.hasta;

    Caja.find({ fecha: { $gte: fecha1 }, fecha: { $lte: fecha2 } }, 'n_caja fecha hora')
        .exec((err, registro) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err,
                });
            }

            Caja.count({ fecha: { $gte: fecha1 }, fecha: { $lte: fecha2 } }, (err, conteo) => {
                res.json({
                    ok: true,
                    registros: conteo,
                    registro
                });
            });
        });
});

app.get("/registro/caja/:caja", function(req, res) {

    let caja = req.params.caja;

    Caja.find({}, 'n_caja fecha hora')
        .exec((err, registro) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err,
                });
            }

            Caja.count({ n_caja: caja }, (err, conteo) => {
                res.json({
                    ok: true,
                    registros: conteo,
                    registro
                });
            });
        });
});

fech = y + "-" + m + "-" + d
hor = ho + ":" + mi + ":" + se

app.post("/registro", function(req, res) {
    let body = req.body;

    let caja = new Caja({
        n_caja: body.n_caja,
        fecha: fech,
        hora: hor
    });

    caja.save((err, cajaDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err,
            });
        }

        res.json({
            ok: true,
            caja: cajaDB
        });
    });

});

app.delete("/registro/:id", function(req, res) {
    let id = req.params.id;

    Caja.findByIdAndDelete(id, (err, registroEliminado) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err,
            });
        }

        res.json({
            ok: true,
            registro: registroEliminado
        });

    });

});

module.exports = app;