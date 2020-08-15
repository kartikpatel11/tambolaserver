import * as tm from "type-mapping/fluent";
import * as rd from "../../../../../dist";

export const route_0 = rd.route()
    .append("/user")
    .appendParam(tm.mysql.bigIntUnsigned().withName("userId"), /\d+/)
    .append("/journal")
    .appendParam(tm.match(/^journal_\d+$/).withName("journalId"), /journal_\d+/)
    .append("/page")
    .appendParam(tm.mysql.bigIntUnsigned().withName("pageId"), /\d+/);;

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