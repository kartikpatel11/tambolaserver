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
        starSystemId : tm.mysql.double(),
        celestialBodyId : tm.mysql.bigIntUnsigned(),
    }))
    .setResponse(tm.object({
        galaxyName :tm.mysql.varChar(1, 255),
        starSystemName : tm.mysql.varChar(1, 255),
        celestialBodyName : tm.mysql.varChar(1, 255),
        officialLanguages : tm.mysql.varChar(1, 64).array(),
        population : tm.mysql.bigIntUnsigned().orNull(),
    }));