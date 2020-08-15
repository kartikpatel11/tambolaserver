import * as tm from "type-mapping";
import {RouteData, Route} from "../route";

export type SetHeader<DataT extends RouteData, F extends tm.AnySafeMapper> = (
    Route<{
        readonly method : DataT["method"];
        readonly path   : DataT["path"];

        readonly param : DataT["param"];
        readonly query : DataT["query"];
        readonly body  : DataT["body"];

        readonly header   : F;
        readonly response : DataT["response"];
    }>
);
/**
    Your header mapper should handle the following types,
    `string|(string[])|undefined`
*/
export function setHeader<DataT extends RouteData, F extends tm.AnySafeMapper> (
    data : DataT,
    f : F
) : SetHeader<DataT, F> {
    return new Route<{
        readonly method : DataT["method"];
        readonly path   : DataT["path"];

        readonly param : DataT["param"];
        readonly query : DataT["query"];
        readonly body  : DataT["body"];

        readonly header   : F;
        readonly response : DataT["response"];
    }>({
        ...data,
        header : f,
    });
}