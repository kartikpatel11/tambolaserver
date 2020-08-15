import * as tm from "type-mapping";
import * as rd from "../../../../../../../dist";

export const route = rd.route()
    .appendParam("articleId")
    .setParam(tm.object({
        articleId : tm.stringExactLength(32),
    }));
declare function assertValid<DataT extends rd.RouteData> (data : DataT) : rd.RouteUtil.AssertValid<DataT>;
export const isValid = assertValid(route);