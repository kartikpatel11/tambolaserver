import * as tm from "type-mapping/fluent";
import * as rd from "../../../../../dist";

export const route = rd.route()
    .setMethod("PUT")
    .append("/v1")
    .append("/charges")
    .setBody(tm.object({
        alert : tm.mysql.varChar(10, 1024),
    }));