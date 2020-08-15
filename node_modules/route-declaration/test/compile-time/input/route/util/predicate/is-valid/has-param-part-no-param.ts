import * as rd from "../../../../../../../dist";

export const route = rd.route()
    .appendParam("articleId");
export const isValid = route.isValid();