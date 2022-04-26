const express = require('express');
const router = express.Router();

import { responds } from "../utils/respond"
import { VerifyParams } from "../contants"
import mongoose from "../utils/databaseConnect"
import { templateSchema } from "../schemas/template"


/* list */
router.get('/page', function (req, res, next) {
    const { status = "1" } = req.body
    const templateModel = mongoose.model('template', templateSchema);
    templateModel.find({ status }, (error, docs) => {
        res.send(responds(error, docs));
    })

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

    const templateModel = mongoose.model('template', templateSchema)
    const templateModelObj = new templateModel({
        ...req.body
    })
    templateModelObj.save((error, data) => {
        res.send(responds(error, data));
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
    const { id } = req.body
    if (!id) {
        res.send(responds(VerifyParams.get('id')));
    }
    const templateModel = mongoose.model('template', templateSchema)
    templateModel.remove({ id }, (error, data) => {
        res.send(responds(error, data));
    })

});

/**close */

router.put('/page', (req, res) => {
    const { id, status } = req.body
    if (!id) {
        res.send(responds(VerifyParams.get('id')));
    }
    const tempalteModel = mongoose.model('template', templateSchema)
    tempalteModel.upadta({ id }, {
        status
    }, (error, data) => {
        res.send(responds(error, data))
    })
});

router.get('*', (req, res) => {
    res.render('common_page/404.html', {
        status: 404
    })
})

module.exports = router;

