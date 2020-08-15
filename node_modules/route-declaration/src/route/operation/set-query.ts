import * as tm from "type-mapping";
import {RouteData, Route} from "../route";

export type SetQuery<DataT extends RouteData, F extends tm.AnySafeMapper> = (
    Route<{
        readonly method : DataT["method"];
        readonly path   : DataT["path"];

        readonly param : DataT["param"];
        readonly query : F;
        readonly body  : DataT["body"];

        readonly header   : DataT["header"];
        readonly response : DataT["response"];
    }>
);
/**
    Your query mapper should handle the following types,
    `string|(string[])|undefined`
*/
export function setQuery<DataT extends RouteData, F extends tm.AnySafeMapper> (
    data : DataT,
    f : F
) : SetQuery<DataT, F> {
    return new Route<{
        readonly method : DataT["method"];
        readonly path   : DataT["path"];

        readonly param : DataT["param"];
        readonly query : F;
        readonly body  : DataT["body"];

        readonly header   : DataT["header"];
        readonly response : DataT["response"];
    }>({
        ...data,
        query : f,
    });
}