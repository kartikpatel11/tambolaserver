import * as tm from "type-mapping/fluent";
import * as rd from "../../../../../dist";

export const createCharge = rd.route()
    //.setMethod("POST")
    .append("/v1")
    .append("/charges")
    .setBody(tm.object({
        amount : tm.integer()
            .pipe(tm.gt(0)),
        currency : tm.mysql.char(3),
        capture : tm.mysql.boolean().optional(),
    }));
export const createMethod = createCharge.getMethod();