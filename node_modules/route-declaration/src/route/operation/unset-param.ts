import {RouteData, Route} from "../route";

export type UnsetParam<DataT extends RouteData> = (
    Route<{
        readonly method : DataT["method"];
        readonly path   : DataT["path"];

        readonly param : undefined;
        readonly query : DataT["query"];
        readonly body  : DataT["body"];

        readonly header   : DataT["header"];
        readonly response : DataT["response"];
    }>
);

export function unsetParam<DataT extends RouteData> (data : DataT) : UnsetParam<DataT> {
    return new Route<{
        readonly method : DataT["method"];
        readonly path   : DataT["path"];

        readonly param : undefined;
        readonly query : DataT["query"];
        readonly body  : DataT["body"];

        readonly header   : DataT["header"];
        readonly response : DataT["response"];
    }>({
        ...data,
        param : undefined,
    });
}