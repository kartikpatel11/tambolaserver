import * as tm from "type-mapping/fluent";
import * as rd from "../../../../../dist";

export const route_0 = rd.route()
    .append("/v1")
    .append("/dark-secrets")
    .setQuery(tm.object({
        dangerLevel : tm.mysql.bigIntUnsigned(),
    }))
    .deepMergeQuery(tm.object({
        page : tm.mysql.bigIntUnsigned().optional(),
    }))
    .deepMergeQuery(tm.object({
        rowsPerPage : tm.mysql.bigIntUnsigned().optional(),
    }))