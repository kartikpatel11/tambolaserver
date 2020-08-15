import * as tape from "tape";
import * as rd from "../../../../../dist";

tape(__filename, t => {
    const route_0 = rd.route();

    t.deepEqual(route_0.method, "Contextual");

    const route_1 = route_0
        .setMethod("CONNECT");

    t.deepEqual(route_1.method, "CONNECT");

    t.end();
});