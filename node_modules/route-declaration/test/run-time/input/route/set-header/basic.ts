import * as tape from "tape";
import * as tm from "type-mapping/fluent";
import * as rd from "../../../../../dist";

tape(__filename, t => {
    const route_0 = rd.route();

    t.deepEqual(route_0.header, undefined);

    const mapper = tm.object({
        resourceId : tm.mysql.bigIntUnsigned(),
    });
    const route_1 = route_0
        .setHeader(mapper);

    t.deepEqual(route_1.header, mapper);

    t.end();
});