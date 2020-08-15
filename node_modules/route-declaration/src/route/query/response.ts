import * as tm from "type-mapping";
import {RouteData} from "../route";

/**
    The client receives this as the response
*/
export type ClientResponse<DataT extends RouteData> = (
    DataT["response"] extends tm.AnySafeMapper ?
    tm.OutputOf<DataT["response"]> :
    undefined
);

/**
    The server should send this as the response
*/
export type ServerExpectedResponse<DataT extends RouteData> = (
    DataT["response"] extends tm.AnySafeMapper ?
    tm.ExpectedInputOf<DataT["response"]> :
    never
);

/**
    The server may send this as the response
*/
export type ServerMappableResponse<DataT extends RouteData> = (
    DataT["response"] extends tm.AnySafeMapper ?
    tm.MappableInputOf<DataT["response"]> :
    never
);