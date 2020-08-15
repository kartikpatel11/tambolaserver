import * as rd from "../../../../../../../dist";

export const route = rd.route();
declare function paramNameOf<DataT extends rd.RouteData> (data : DataT) : rd.RouteUtil.ParamNameOf<DataT>;
export const paramName = paramNameOf(route);