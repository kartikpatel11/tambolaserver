import * as tm from "type-mapping";
import {PathUtil} from "../../path";
import {RouteData, Route} from "../route";
import { NonStringMappableKeys } from "../predicate";

export type SetParam<DataT extends RouteData, F extends tm.AnySafeMapper> = (
    Route<{
        readonly method : DataT["method"];
        readonly path   : DataT["path"];

        readonly param : F;
        readonly query : DataT["query"];
        readonly body  : DataT["body"];

        readonly header   : DataT["header"];
        readonly response : DataT["response"];
    }>
);
export type AssertCanSetParam<DataT extends RouteData, F extends tm.AnySafeMapper> = (
    keyof PathUtil.RawParamOf<DataT["path"]> extends keyof tm.MappableInputOf<F> ?
    (
        keyof tm.MappableInputOf<F> extends keyof PathUtil.RawParamOf<DataT["path"]> ?
        (
            NonStringMappableKeys<F> extends never ?
            F :
            [
                "You must have string as MappableInput<> for these parameter names",
                NonStringMappableKeys<F>
            ]
        ) :
        [
            "The following parameter names do not exist",
            Exclude<
                keyof tm.MappableInputOf<F>,
                PathUtil.ParamNameOf<DataT["path"]>
            >
        ]
    ) :
    [
        "The following parameter names are not mapped",
        Exclude<
            PathUtil.ParamNameOf<DataT["path"]>,
            keyof tm.MappableInputOf<F>
        >
    ]
);
export function setParam<DataT extends RouteData, F extends tm.AnySafeMapper> (
    data : DataT,
    f : AssertCanSetParam<DataT, F>,
) : SetParam<DataT, F> {
    return new Route<{
        readonly method : DataT["method"];
        readonly path   : DataT["path"];

        readonly param : F;
        readonly query : DataT["query"];
        readonly body  : DataT["body"];

        readonly header   : DataT["header"];
        readonly response : DataT["response"];
    }>({
        ...data,
        param : f as F,
    });
}