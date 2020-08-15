import * as tm from "type-mapping";
import {RouteData} from "../route";

/**
    The server receives this as the body
*/
export type ServerBody<DataT extends RouteData> = (
    DataT["body"] extends tm.AnySafeMapper ?
    tm.OutputOf<DataT["body"]> :
    {}
);

/**
    The client should send this as the body
*/
export type ClientExpectedBody<DataT extends RouteData> = (
    DataT["body"] extends tm.AnySafeMapper ?
    tm.ExpectedInputOf<DataT["body"]> :
    never
);

/**
    The client may send this as the body
*/
export type ClientMappableBody<DataT extends RouteData> = (
    DataT["body"] extends tm.AnySafeMapper ?
    tm.MappableInputOf<DataT["body"]> :
    never
);