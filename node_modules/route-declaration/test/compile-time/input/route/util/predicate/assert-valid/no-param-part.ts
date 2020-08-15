import * as rd from "../../../../../../../dist";

export const route = rd.route();
declare function assertValid<DataT extends rd.RouteData> (data : DataT) : rd.RouteUtil.AssertValid<DataT>;
export const isValid = assertValid(route);