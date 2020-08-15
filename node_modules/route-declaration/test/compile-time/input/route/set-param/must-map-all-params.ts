import * as tm from "type-mapping/fluent";
import * as rd from "../../../../../dist";

export const route_0 = rd.route()
    .append("/galaxy")
    .appendParam("galaxyId", /\d+/)
    .append("/star-system")
    .appendParam("starSystemId", /\d+/)
    .append("/celestial-body")
    .appendParam("celestialBodyId", /\d+/)
    .setParam(tm.object({
        galaxyId : tm.mysql.bigIntUnsigned(),
        //starSystemId : tm.mysql.double(),
        celestialBodyId : tm.mysql.bigIntUnsigned(),
    }));
