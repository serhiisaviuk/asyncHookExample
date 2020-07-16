import express from 'express';
import {storage} from './storage.js'
import * as uuid from 'uuid';
import router from './router.js'

let app = express();

global.kResourceStore = storage.kResourceStore;

app.use((req, res, next) => {
    storage.run(new Map(), () => {
        let uid = uuid.v4();
        storage.getStore().set("requestId", uid);
        next();
    })
});

// app.use();

app.use(router);

export default app;
