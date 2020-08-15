import * as tm from "type-mapping";
import {RouteData, Route} from "../route";
import {PathUtil} from "../../path";

export type AppendParamField<DataT extends RouteData, FieldT extends tm.AnyField> = (
    Route<{
        readonly method : DataT["method"];
        readonly path   : PathUtil.AppendParam<DataT["path"], tm.NameOf<FieldT>>;

        readonly param : (
            DataT["param"] extends undefined ?
            tm.ObjectFromArrayMapper<[FieldT]> :
            DataT["param"] extends tm.AnySafeMapper ?
            tm.DeepMergeMapper<
                DataT["param"],
                [tm.ObjectFromArrayMapper<[FieldT]>]
            > :
            never
        );
        readonly query : DataT["query"];
        readonly body  : DataT["body"];

        readonly header   : DataT["header"];
        readonly response : DataT["response"];
    }>
);
export type AssertValidParamField<FieldT extends tm.AnyField> = (
    Extract<tm.MappableInputOf<FieldT>, string> extends never ?
    [
        "Field maps", tm.MappableInputOf<FieldT>, "but must be able to also map", string
    ] :
    FieldT
);
export function appendParamField<
    DataT extends RouteData,
    FieldT extends tm.AnyField
> (
    data : DataT,
    field : AssertValidParamField<FieldT>,
    regex? : RegExp
) : AppendParamField<DataT, FieldT> {
    const curPath = (data as DataT).path as DataT["path"];
    return new Route<{
        readonly method : DataT["method"];
        readonly path   : PathUtil.AppendParam<DataT["path"], tm.NameOf<FieldT>>;

        readonly param : (
            DataT["param"] extends undefined ?
            tm.ObjectFromArrayMapper<[FieldT]> :
            DataT["param"] extends tm.AnySafeMapper ?
            tm.DeepMergeMapper<
                DataT["param"],
                [tm.ObjectFromArrayMapper<[FieldT]>]
            > :
            never
        );
        readonly query : DataT["query"];
        readonly body  : DataT["body"];

        readonly header   : DataT["header"];
        readonly response : DataT["response"];
    }>({
        ...(data as DataT),
        path : curPath.appendParam<tm.NameOf<FieldT>>(tm.getNameOrEmptyString(field as FieldT), regex),
        param : (
            data.param == undefined ?
            tm.objectFromArray(field as FieldT) :
            tm.deepMerge(data.param, tm.objectFromArray(field as FieldT))
        ) as any,
    });
}