import * as tape from "tape";
import * as rd from "../../../../../dist";

tape(__filename, t => {
    const route_0 = rd.route()
        .appendParam("x");

    t.throws(() => {
        route_0.assertValid();
    });

    t.end();
});