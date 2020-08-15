import * as tape from "tape";
import * as tm from "type-mapping/fluent";
import * as rd from "../../../../../dist";

tape(__filename, t => {
    const route_0 = rd.route()
        .appendParam("x")
        .setParam(tm.object({
            x : tm.toFiniteNumber(),
        }));

    t.deepEqual(route_0.isValid(), true);

    t.end();
});