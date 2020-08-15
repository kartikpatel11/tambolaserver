//import * as tm from "type-mapping/fluent";
import * as rd from "../../../../../../../dist";

export const route = rd.route();

declare function s<DataT extends rd.RouteData> (data : DataT) : rd.RouteUtil.ServerHeader<DataT>;
declare function ce<DataT extends rd.RouteData> (data : DataT) : rd.RouteUtil.ClientExpectedHeader<DataT>;
declare function cm<DataT extends rd.RouteData> (data : DataT) : rd.RouteUtil.ClientMappableHeader<DataT>;
export const server = s(route);
export const clientExpected = ce(route);
export const clientMappable = cm(route);