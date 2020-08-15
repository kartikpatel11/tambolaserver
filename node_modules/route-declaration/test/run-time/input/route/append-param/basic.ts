import * as tape from "tape";
import * as rd from "../../../../../dist";

tape(__filename, t => {
    const route_0 = rd.route();

    t.deepEqual(route_0.path.routerPath, "");
    t.deepEqual(route_0.path.parts, []);

    t.throws(() => {
        //Must not contain `:`
        route_0.appendParam(":resource");
    });
    t.throws(() => {
        //Must not contain '/'
        route_0.appendParam("res/ource");
    });
    const route_1 = route_0
        .appendParam("resourceId");

    t.deepEqual(route_1.path.routerPath, "/:resourceId");
    t.deepEqual(route_1.path.parts, [
        { name : "resourceId", regex : undefined },
    ]);

    const route_2 = route_1
        .appendParam("subResourceId", /\d+/);

    t.deepEqual(route_2.path.routerPath, "/:resourceId/:subResourceId(\\d+)");
    t.deepEqual(route_2.path.parts, [
        { name : "resourceId", regex : undefined },
        { name : "subResourceId", regex : /\d+/ },
    ]);
    t.end();
});