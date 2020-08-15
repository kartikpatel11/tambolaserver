import * as tape from "tape";
import * as rd from "../../../../../dist";

tape(__filename, t => {
    const route_0 = rd.route()
        .appendParam("x");

    t.deepEqual(route_0.isValid(), false);

    t.end();
});