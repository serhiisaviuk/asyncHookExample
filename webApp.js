import express from 'express';
import {AsyncLocalStorage, executionAsyncId} from 'async_hooks';
import * as uuid from 'uuid';
import router from './router.js'

let app = express();
let storage = new AsyncLocalStorage();

app.use(async (req, res, next) => {
    await storage.run(new Map(), () => {
        let uid = uuid.v4();
        storage.getStore().set("requestId", uid);
        console.log('Master:', uid, "executionAsyncId:", executionAsyncId());
        next();
    })
});

// app.use();

app.use(router);

export default app;
