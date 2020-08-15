import * as tape from "tape";
import * as rd from "../../../../../dist";

tape(__filename, t => {
    const route_0 = rd.route();

    t.deepEqual(route_0.isValid(), true);

    t.end();
});