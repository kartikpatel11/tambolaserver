import * as tm from "type-mapping";
import {RouteData, Route} from "../route";

export type SetResponse<DataT extends RouteData, F extends tm.AnySafeMapper> = (
    Route<{
        readonly method : DataT["method"];
        readonly path   : DataT["path"];

        readonly param : DataT["param"];
        readonly query : DataT["query"];
        readonly body  : DataT["body"];

        readonly header   : DataT["header"];
        readonly response : F;
    }>
);

export function setResponse<DataT extends RouteData, F extends tm.AnySafeMapper> (
    data : DataT,
    f : F
) : SetResponse<DataT, F> {
    return new Route<{
        readonly method : DataT["method"];
        readonly path   : DataT["path"];

        readonly param : DataT["param"];
        readonly query : DataT["query"];
        readonly body  : DataT["body"];

        readonly header   : DataT["header"];
        readonly response : F;
    }>({
        ...data,
        response : f,
    });
}