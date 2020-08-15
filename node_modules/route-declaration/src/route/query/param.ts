import * as tm from "type-mapping";
import {RouteData} from "../route";

/**
    The server receives this as the param
*/
export type ServerParam<DataT extends RouteData> = (
    DataT["param"] extends tm.AnySafeMapper ?
    tm.OutputOf<DataT["param"]> :
    {}
);

/**
    The client should send this as the param
*/
export type ClientExpectedParam<DataT extends RouteData> = (
    DataT["param"] extends tm.AnySafeMapper ?
    tm.ExpectedInputOf<DataT["param"]> :
    never
);

/**
    The client may send this as the param
*/
export type ClientMappableParam<DataT extends RouteData> = (
    DataT["param"] extends tm.AnySafeMapper ?
    tm.MappableInputOf<DataT["param"]> :
    never
);