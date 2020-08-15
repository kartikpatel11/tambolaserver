import * as tm from "type-mapping/fluent";
import * as rd from "../../../../../dist";

export const createCharge = rd.route()
    .setMethod("POST")
    .append("/v1")
    .append("/charges")
    .setBody(tm.object({
        amount : tm.integer()
            .pipe(tm.gt(0)),
        currency : tm.mysql.char(3),
        capture : tm.mysql.boolean().optional(),
    }));
export const fetchCharge = rd.route()
    .setMethod("GET")
    .append("/v1")
    .append("/charges")
    .appendParam("chargeId", /ch_[a-zA-Z0-9]+/)
    .setParam(tm.object({
        chargeId : tm.match(/^ch_[a-aA-Z0-9]+/),
    }));

export const updateUser = rd.route()
    .setMethod("PUT")
    .append("/v1")
    .append("/users")
    .appendParam("userId", /\d+/)
    .setParam(tm.object({
        userId : tm.mysql.bigIntUnsigned(),
    }));