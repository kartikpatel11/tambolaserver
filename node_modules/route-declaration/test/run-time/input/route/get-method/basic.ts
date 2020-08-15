import * as tape from "tape";
import * as tm from "type-mapping/fluent";
import * as rd from "../../../../../dist";

tape(__filename, t => {
    const route_0 = rd.route();

    t.deepEqual(route_0.method, "Contextual");
    t.deepEqual(route_0.getMethod(), "GET");

    const route_1 = route_0
        .setBody(tm.object({
            x : tm.instanceOfDate(),
        }))

    t.deepEqual(route_1.method, "Contextual");
    t.deepEqual(route_1.getMethod(), "POST");

    const route_2 = route_1
        .setMethod("CONNECT");

    t.deepEqual(route_2.method, "CONNECT");
    t.deepEqual(route_2.getMethod(), "CONNECT");

    t.end();
});