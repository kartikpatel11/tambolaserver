import * as tm from "type-mapping/fluent";
import * as rd from "../../../../../dist";

export const route_0 = rd.route()
    .append("/galaxy")
    .appendParam("galaxyId", /\d+/)
    .setParam(tm.object({
        galaxyId : tm.mysql.boolean(),
    }));
