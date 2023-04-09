const express = require('express')

const router = express.Router()

const bsHelperControl = require('../controllers/bsHelperController')

// const { authorize } = require('../middleware/authMiddleware')

// seed 
router.get('/seed', bsHelperControl.seed)

// index
router.get('/', bsHelperControl.index)

// delete
// router.delete('/:id', bsHelperControl.delete)
router.delete('/:id', bsHelperControl.delete)

// update
router.put('/:id', bsHelperControl.update)

// create
router.post('/', bsHelperControl.create)

// show
router.get('/:id', bsHelperControl.show)

module.exports = router