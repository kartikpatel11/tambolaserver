import * as tape from "tape";
import * as tm from "type-mapping/fluent";
import * as rd from "../../../../../dist";

tape(__filename, t => {
    const route_0 = rd.route();

    t.deepEqual(route_0.param, undefined);

    const resourceId = tm.mysql.bigIntUnsigned().withName("resourceId");
    const route_1 = route_0
        .appendParam(resourceId);

    t.deepEqual(route_1.param("", { resourceId : "32" }), { resourceId : BigInt(32) });

    const route_2 = route_1
        .appendParam(tm.mysql.boolean().withName("b"))

    t.deepEqual(route_2.param("", { resourceId : "32", b : "true" }), { resourceId : BigInt(32), b : true });

    t.end();
});