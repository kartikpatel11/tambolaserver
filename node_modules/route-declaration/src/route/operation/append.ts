import {RouteData, Route} from "../route";

export type Append<DataT extends RouteData> = (
    Route<{
        readonly method : DataT["method"];
        readonly path   : DataT["path"];

        readonly param : DataT["param"];
        readonly query : DataT["query"];
        readonly body  : DataT["body"];

        readonly header   : DataT["header"];
        readonly response : DataT["response"];
    }>
);
export function append<DataT extends RouteData> (data : DataT, part : string) : Append<DataT> {
    return new Route<{
        readonly method : DataT["method"];
        readonly path   : DataT["path"];

        readonly param : DataT["param"];
        readonly query : DataT["query"];
        readonly body  : DataT["body"];

        readonly header   : DataT["header"];
        readonly response : DataT["response"];
    }>({
        ...data,
        path : data.path.append(part),
    });
}