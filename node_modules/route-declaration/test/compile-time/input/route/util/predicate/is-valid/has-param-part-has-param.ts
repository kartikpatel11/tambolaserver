import * as tm from "type-mapping";
import * as rd from "../../../../../../../dist";

export const route = rd.route()
    .appendParam("articleId")
    .setParam(tm.object({
        articleId : tm.stringExactLength(32),
    }));
export const isValid = route.isValid();