// implement your posts router here
const express = require('express')
const Post = require('./posts-model')

const router = express.Router()

router.get('/', (req, res) => {
    Post.find()
    .then(found => {
        res.status(200).json(found)
    })
    .catch(err => {
        res.status(500).json({
            message: "The posts information could not be retrieved",
            err: err.message,
            stack: err.stack
        })
    })
})
router.get('/:id', async (req, res) => {
    try {
        const id = await Post.findById(req.params.id);
        if (!id){
            res.status(404).json({
                message: "The post with the specified ID does not exist"
            })
        }
        res.status(200).json(id)

    } catch (err) {
        res.status(500).json({
            message: "The post information could not be retrieved",
            err: err.message,
            stack: err.stack
        })
    }
})
router.post('/', (req, res) => {

})
router.delete('/:id', (req, res) => {

})
router.put('/:id', (req, res) => {

})
router.get('/:id/messages', (req, res) => {

})

module.exports = router