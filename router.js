import express from 'express';
import {storage} from './storage.js'

let router = new express.Router();

router.get('/', async (req, res) => {
    const store = storage.getStore();
    console.log("Slave store:", store);
    res.send('Hello noto! requestId:' + store?.get('requestId'));
});


export default router;
