import * as tm from "type-mapping";
import {RouteData} from "../route";

/**
    The server receives this as the header
*/
export type ServerHeader<DataT extends RouteData> = (
    DataT["header"] extends tm.AnySafeMapper ?
    (
        & tm.OutputOf<DataT["header"]>
        & {
            [key : string] : string | (string[]) | undefined
        }
    ) :
    {
        [key : string] : string | (string[]) | undefined
    }
);

/**
    The client should send this as the header
*/
export type ClientExpectedHeader<DataT extends RouteData> = (
    DataT["header"] extends tm.AnySafeMapper ?
    tm.ExpectedInputOf<DataT["header"]> :
    never
);

/**
    The client may send this as the header
*/
export type ClientMappableHeader<DataT extends RouteData> = (
    DataT["header"] extends tm.AnySafeMapper ?
    tm.MappableInputOf<DataT["header"]> :
    never
);