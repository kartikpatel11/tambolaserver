import * as tm from "type-mapping/fluent";
import * as rd from "../../../../../dist";

export const route_0 = rd.route()
    .append("/user")
    .appendParam("userId", /\d+/)
    .append("/journal")
    .appendParam("journalId", /journal_\d+/)
    .append("/page")
    .appendParam("pageId", /\d+/)
    .setParam(tm.object({
        userId : tm.mysql.bigIntUnsigned(),
        journalId : tm.mysql.varChar(1, 255),
        pageId : tm.mysql.bigIntUnsigned(),
    }));

route_0.appendParam("shouldNotWork");

export const route_1 = route_0
    .unsetParam()
    .appendParam("worksNow")
    .setParam(tm.object({
        userId : tm.mysql.bigIntUnsigned(),
        journalId : tm.mysql.varChar(1, 255),
        pageId : tm.mysql.bigIntUnsigned(),
        worksNow : tm.stringToJsonObject(),
    }))