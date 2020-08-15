import {RouteData, Route, MethodStr} from "../route";

export type SetMethod<DataT extends RouteData, MethodT extends MethodStr> = (
    Route<{
        readonly method : MethodT;
        readonly path   : DataT["path"];

        readonly param : DataT["param"];
        readonly query : DataT["query"];
        readonly body  : DataT["body"];

        readonly header   : DataT["header"];
        readonly response : DataT["response"];
    }>
);
export function setMethod<DataT extends RouteData, MethodT extends MethodStr> (
    data : DataT,
    method : MethodT
) : SetMethod<DataT, MethodT> {
    return new Route<{
        readonly method : MethodT;
        readonly path   : DataT["path"];

        readonly param : DataT["param"];
        readonly query : DataT["query"];
        readonly body  : DataT["body"];

        readonly header   : DataT["header"];
        readonly response : DataT["response"];
    }>({
        ...data,
        method : method,
    });
}