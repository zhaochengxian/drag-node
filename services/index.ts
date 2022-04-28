const express = require('express');
const router = express.Router();
import { upload } from "../controller"
import dao from "../dao"

import { responds } from "../utils/respond"
import { VerifyParams, pageUrl } from "../contants"
import mongoose from "../utils/databaseConnect"
import { templateSchema } from "../schemas/template"

router.post("/upload", upload);
/* list */
router.post('/page-list', function (req, res, next) {
    const { status, pageName } = req.body
    if (!pageName && !status) {
        dao.find({}, (error, data) => {
            const total = Array.isArray(data) && data.length.toString()
            data = data.map(item => {
                item = Object.assign(item, { url: pageUrl })
                return item
            })
            res.send(responds(error, data, total));
        }).sort({ created: -1 })
    } else {
        dao.find({ ...req.body }, (error, data) => {
            const total = Array.isArray(data) && data.length.toString()
            data = data.map(item => {
                return { ...item, url: pageUrl }
            })
            res.send(responds(error, Object.assign(data, { url: pageUrl }), total));
        }).sort({ created: -1 })
    }

});


/* add */
router.post('/page', (req, res) => {
    const { pageName, paperwork, shareImage, backgroundImage } = req.body
    if (!pageName) {
        res.send(responds(VerifyParams.get('pageName')));
    }
    if (!paperwork) {
        res.send(responds(VerifyParams.get('paperwork')));
    }
    if (!shareImage) {
        res.send(responds(VerifyParams.get('shareImage')));
    }
    if (!backgroundImage) {
        res.send(responds(VerifyParams.get('backgroundImage')));
    }

    const dao = mongoose.model('template', templateSchema)
    const daoObj = new dao({
        ...req.body
    })
    daoObj.save((error, data) => {
        res.send(responds(error, Object.assign(data, { url: pageUrl })));
    })

});

/* update */
router.put('/page', (req, res) => {
    const { id } = req.body
    if (!id) {
        res.send(responds(VerifyParams.get('id')));
    }
    const tempalteModel = mongoose.model('template', templateSchema)
    tempalteModel.upadta({ id }, {
        ...req.body
    }, (error, data) => {
        res.send(responds(error, data))
    })
});

/* delete */

router.delete('/page', (req, res) => {
    const { id } = req.query
    if (!id) {
        res.send(responds(VerifyParams.get('id')))
        return
    }
    dao.deleteOne({
        _id: { $gte: id }
    }, (error, data) => {
        res.send(responds(error, data));

    })

});

/**close */

router.put('/close-page', (req, res) => {
    const { id, status } = req.query
    if (!id) {
        res.send(responds(VerifyParams.get('id')));
    }
    dao.updateOne({ _id: { $gte: id } }, { status }, { new: true }, (error, data) => {
        res.send(responds(error, data))
    })
});

router.get('*', (req, res) => {
    res.render('common_page/404.html', {
        status: 404
    })
})

module.exports = router;

