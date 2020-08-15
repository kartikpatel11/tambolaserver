import {RouteData, Route} from "../route";
import {PathUtil} from "../../path";

export type AppendParam<DataT extends RouteData, NameT extends string> = (
    Route<{
        readonly method : DataT["method"];
        readonly path   : PathUtil.AppendParam<DataT["path"], NameT>;

        readonly param : DataT["param"];
        readonly query : DataT["query"];
        readonly body  : DataT["body"];

        readonly header   : DataT["header"];
        readonly response : DataT["response"];
    }>
);
export type AssertCanAppendParam<DataT extends RouteData> = (
    DataT["param"] extends undefined ?
    DataT :
    [
        "Cannot .appendParam() after .setParam()",
        "Call .unsetParam() first"
    ]
);
export function appendParam<DataT extends RouteData, NameT extends string> (
    data : AssertCanAppendParam<DataT>,
    name : NameT,
    regex? : RegExp
) : AppendParam<DataT, NameT> {
    const curPath = (data as DataT).path as DataT["path"];
    return new Route<{
        readonly method : DataT["method"];
        readonly path   : PathUtil.AppendParam<DataT["path"], NameT>;

        readonly param : DataT["param"];
        readonly query : DataT["query"];
        readonly body  : DataT["body"];

        readonly header   : DataT["header"];
        readonly response : DataT["response"];
    }>({
        ...(data as DataT),
        path : curPath.appendParam<NameT>(name, regex),
    });
}