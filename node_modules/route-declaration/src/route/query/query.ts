import * as tm from "type-mapping";
import {RouteData} from "../route";

/**
    The server receives this as the query
*/
export type ServerQuery<DataT extends RouteData> = (
    DataT["query"] extends tm.AnySafeMapper ?
    tm.OutputOf<DataT["query"]> :
    {}
);

/**
    The client should send this as the query
*/
export type ClientExpectedQuery<DataT extends RouteData> = (
    DataT["query"] extends tm.AnySafeMapper ?
    tm.ExpectedInputOf<DataT["query"]> :
    never
);

/**
    The client may send this as the query
*/
export type ClientMappableQuery<DataT extends RouteData> = (
    DataT["query"] extends tm.AnySafeMapper ?
    tm.MappableInputOf<DataT["query"]> :
    never
);