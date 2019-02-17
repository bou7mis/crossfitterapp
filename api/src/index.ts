"use strict";

import {start} from "./server";

start()
    .catch((err) => {
        console.error(`Error starting server: ${err.message}`);
        process.exit(-1);
    });
