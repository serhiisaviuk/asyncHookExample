import express from 'express';
import {AsyncLocalStorage, executionAsyncId, executionAsyncResource} from 'async_hooks';

let router = new express.Router();


router.get('/', async (req, res) => {
    let storage = new AsyncLocalStorage();
    let store = storage.getStore();
    console.log("Slave store:", store);
    console.log("executionAsyncId:", executionAsyncId(), "executionAsyncResource:", executionAsyncResource()[global.kResourceStore].get('requestId'));
    res.send('Hello noto! requestId:' + store?.get('requestId'));
});


export default router;
