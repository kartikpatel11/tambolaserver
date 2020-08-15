import * as tape from "tape";
import * as rd from "../../../../../dist";

tape(__filename, t => {
    const route_0 = rd.route();

    t.deepEqual(route_0.path.routerPath, "");
    t.deepEqual(route_0.path.parts, []);

    t.throws(() => {
        //Must not end with `/`
        route_0.append("/resource/");
    });
    t.throws(() => {
        //Must not contain `:`
        route_0.append("/:resource");
    });
    t.throws(() => {
        //Must start with `/`
        route_0.append("resource");
    });
    const route_1 = route_0
        .append("///resource");

    t.deepEqual(route_1.path.routerPath, "/resource");
    t.deepEqual(route_1.path.parts, ["/resource"]);

    const route_2 = route_1
        .append("///sub////resource");

    t.deepEqual(route_2.path.routerPath, "/resource/sub/resource");
    t.deepEqual(route_2.path.parts, ["/resource", "/sub/resource"]);

    t.end();
});