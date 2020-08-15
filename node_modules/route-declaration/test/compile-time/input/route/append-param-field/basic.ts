import * as tm from "type-mapping/fluent";
import * as rd from "../../../../../dist";

export const route = rd.route()
    .append("/user")
    .appendParam(tm.mysql.bigIntUnsigned().withName("userId"), /\d+/)
    .append("/journal")
    .appendParam(tm.match(/^journal_\d+$/).withName("journalId"), /journal_\d+/)
    .append("/page")
    .appendParam(tm.mysql.bigIntUnsigned().withName("pageId"), /\d+/);