const {
    postNotification,
    getallNotifications,
    getsingleNotifications,
    updateNotification,
    deleteNot
}
 = require('../controllers/blogController')
const express = require('express')
const router = express.Router()
//post notification
router.post("/api/post",postNotification)
//get notifications
router.get('/api/getNotifications',getallNotifications)
//get single notification
router.get('/api/:id',getsingleNotifications)
//update a notification
router.patch('/api/:id',updateNotification)
//delete a notification
router.delete('/api/:id',deleteNot)
module.exports = router