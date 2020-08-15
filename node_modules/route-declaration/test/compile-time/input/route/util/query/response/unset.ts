//import * as tm from "type-mapping/fluent";
import * as rd from "../../../../../../../dist";

export const route = rd.route();

declare function c<DataT extends rd.RouteData> (data : DataT) : rd.RouteUtil.ClientResponse<DataT>;
declare function se<DataT extends rd.RouteData> (data : DataT) : rd.RouteUtil.ServerExpectedResponse<DataT>;
declare function sm<DataT extends rd.RouteData> (data : DataT) : rd.RouteUtil.ServerMappableResponse<DataT>;
export const client = c(route);
export const serverExpected = se(route);
export const serverMappable = sm(route);