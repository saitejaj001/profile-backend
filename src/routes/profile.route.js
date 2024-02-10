const {Router}  = require('express')
const {getAllSkills} = require('../repo/profile.repo')

const router = Router()

router.get('/', (req,res) =>{
    res.send('Hello world')
})

router.get('/getAllSkills', async (req, res) => {
    getAllSkills().then((d) =>{
        res.send(d)
    })
})

module.exports = router;
