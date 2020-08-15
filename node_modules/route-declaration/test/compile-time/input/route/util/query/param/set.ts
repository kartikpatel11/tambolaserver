import * as tm from "type-mapping/fluent";
import * as rd from "../../../../../../../dist";

export const route = rd.route()
    .appendParam("x")
    .appendParam("y")
    .appendParam("z")
    .setParam(tm.object({
        x : tm.mysql.bigIntUnsigned(),
        y : tm.mysql.bigIntUnsigned().orUndefined(),
        z : tm.mysql.bigIntUnsigned().optional(),
    }));

declare function s<DataT extends rd.RouteData> (data : DataT) : rd.RouteUtil.ServerParam<DataT>;
declare function ce<DataT extends rd.RouteData> (data : DataT) : rd.RouteUtil.ClientExpectedParam<DataT>;
declare function cm<DataT extends rd.RouteData> (data : DataT) : rd.RouteUtil.ClientMappableParam<DataT>;
export const server = s(route);
export const clientExpected = ce(route);
export const clientMappable = cm(route);