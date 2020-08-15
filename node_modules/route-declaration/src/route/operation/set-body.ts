import * as tm from "type-mapping";
import {RouteData, Route} from "../route";

export type SetBody<DataT extends RouteData, F extends tm.AnySafeMapper> = (
    Route<{
        readonly method : DataT["method"];
        readonly path   : DataT["path"];

        readonly param : DataT["param"];
        readonly query : DataT["query"];
        readonly body  : F;

        readonly header   : DataT["header"];
        readonly response : DataT["response"];
    }>
);

export function setBody<DataT extends RouteData, F extends tm.AnySafeMapper> (
    data : DataT,
    f : F
) : SetBody<DataT, F> {
    return new Route<{
        readonly method : DataT["method"];
        readonly path   : DataT["path"];

        readonly param : DataT["param"];
        readonly query : DataT["query"];
        readonly body  : F;

        readonly header   : DataT["header"];
        readonly response : DataT["response"];
    }>({
        ...data,
        body : f,
    });
}