import * as rd from "../../../../../dist";

export const route = rd.route()
    .append("/user")
    .appendParam("userId", /\d+/)
    .append("/journal")
    .appendParam("journalId", /journal_\d+/)
    .append("/page")
    .appendParam("pageId", /\d+/);