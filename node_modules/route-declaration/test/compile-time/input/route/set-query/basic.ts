import * as tm from "type-mapping/fluent";
import * as rd from "../../../../../dist";

export const route = rd.route()
    .setMethod("GET")
    .append("/v1")
    .append("/charges")
    .setQuery(tm.object({
        startDateTime : tm.mysql.dateTime(3),
    }));