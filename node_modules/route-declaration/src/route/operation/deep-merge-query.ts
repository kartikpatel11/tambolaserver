import * as tm from "type-mapping";
import {RouteData, Route} from "../route";
import {SetQuery, setQuery} from "./set-query";

export type DeepMergeQuery<DataT extends RouteData, F extends tm.AnySafeMapper> = (
    undefined extends DataT["query"] ?
    SetQuery<DataT, F> :
    Route<{
        readonly method : DataT["method"];
        readonly path   : DataT["path"];

        readonly param : DataT["param"];
        readonly query : tm.DeepMergeMapper<
            Exclude<DataT["query"], undefined>,
            [F]
        >;
        readonly body  : DataT["body"];

        readonly header   : DataT["header"];
        readonly response : DataT["response"];
    }>
);
/**
    Your query mapper should handle the following types,
    `string|(string[])|undefined`
*/
export function deepMergeQuery<DataT extends RouteData, F extends tm.AnySafeMapper> (
    data : DataT,
    f : F
) : DeepMergeQuery<DataT, F> {
    if (data.query == undefined) {
        return setQuery(data, f) as any;
    } else {
        return new Route<{
            readonly method : DataT["method"];
            readonly path   : DataT["path"];

            readonly param : DataT["param"];
            readonly query : tm.DeepMergeMapper<
                Exclude<DataT["query"], undefined>,
                [F]
            >;
            readonly body  : DataT["body"];

            readonly header   : DataT["header"];
            readonly response : DataT["response"];
        }>({
            ...data,
            query : tm.deepMerge(
                data.query as Exclude<DataT["query"], undefined>,
                f
            ),
        }) as any;
    }
}