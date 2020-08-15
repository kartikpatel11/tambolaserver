import * as tm from "type-mapping/fluent";
import * as rd from "../../../../../dist";

export const fetchCharge = rd.route()
    //.setMethod("GET")
    .append("/v1")
    .append("/charges")
    .appendParam("chargeId", /ch_[a-zA-Z0-9]+/)
    .setParam(tm.object({
        chargeId : tm.match(/^ch_[a-aA-Z0-9]+/),
    }));

export const fetchMethod = fetchCharge.getMethod();