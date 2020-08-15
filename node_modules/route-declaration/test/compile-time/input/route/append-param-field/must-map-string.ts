import * as tm from "type-mapping/fluent";
import * as rd from "../../../../../dist";

export const route = rd.route()
    .append("/user")
    .appendParam(tm.boolean().withName("userId"), /\d+/);