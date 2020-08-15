import * as tape from "tape";
import * as tm from "type-mapping/fluent";
import * as rd from "../../../../../dist";

tape(__filename, t => {
    const route_0 = rd.route();

    t.deepEqual(route_0.param, undefined);

    const mapper = tm.object({
        resourceId : tm.mysql.bigIntUnsigned(),
    });
    const route_1 = route_0
        .appendParam("resourceId")
        .setParam(mapper);

    t.deepEqual(route_1.param, mapper);

    const route_2 = route_1
        .unsetParam();

    t.deepEqual(route_2.param, undefined);

    t.end();
});