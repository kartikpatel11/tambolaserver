import * as tape from "tape";
import * as tm from "type-mapping/fluent";
import * as rd from "../../../../../dist";

tape(__filename, t => {
    const route_0 = rd.route();

    t.deepEqual(route_0.query, undefined);

    const mapper = tm.object({
        resourceId : tm.mysql.bigIntUnsigned(),
    });
    const route_1 = route_0
        .setQuery(mapper);

    t.deepEqual(route_1.query, mapper);

    t.end();
});