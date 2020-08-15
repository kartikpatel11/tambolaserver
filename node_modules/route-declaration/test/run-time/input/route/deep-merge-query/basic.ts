import * as tape from "tape";
import * as tm from "type-mapping/fluent";
import * as rd from "../../../../../dist";

tape(__filename, t => {
    const route_0 = rd.route();

    t.deepEqual(route_0.query, undefined);

    const mapper = tm.object({
        resourceId : tm.mysql.boolean(),
    });
    const route_1 = route_0
        .setQuery(mapper);

    t.deepEqual(route_1.query, mapper);

    const route_2 = route_1
        .deepMergeQuery(tm.object({
            subId : tm.mysql.double(),
        }));

    t.deepEqual(
        route_2.query("q", {
            resourceId : "true",
            subId : "123.456",
        }),
        {
            resourceId : true,
            subId : 123.456,
        }
    );

    t.end();
});