import * as tm from "type-mapping";
import {RouteData} from "../route";
import {ParamNameOf} from "../query";

/**
    For now, a `Route`'s validity is just determined
    by its path param parts and param mapper.
*/
export type IsValid<DataT extends RouteData> = (
    ParamNameOf<DataT> extends never ?
    true :
    undefined extends DataT["param"] ?
    false :
    true
);

export type NonStringMappableKeys<F extends tm.AnySafeMapper> = (
    {
        [k in Extract<keyof tm.MappableInputOf<F>, string>] : (
            Extract<tm.MappableInputOf<F>[k], string> extends never ?
            k :
            never
        )
    }[Extract<keyof tm.MappableInputOf<F>, string>]
);
/**
    For now, a `Route`'s validity is just determined
    by its path param parts and param mapper.
*/
export type AssertValid<DataT extends RouteData> = (
    ParamNameOf<DataT> extends never ?
    DataT :
    DataT["param"] extends tm.AnySafeMapper ?
    (
        NonStringMappableKeys<DataT["param"]> extends never ?
        DataT :
        [
            "These params must also map string",
            NonStringMappableKeys<DataT["param"]>
        ]
    ) :
    [
        "You must call .setParam() on the route declaration for params",
        ParamNameOf<DataT>
    ]
);

export function isValid<DataT extends RouteData> (data : DataT) : IsValid<DataT> {
    return (
        !data.path.hasParamParts() ||
        (data.param instanceof Function)
    ) as IsValid<DataT>;
}
export function assertValid (data : RouteData) {
    if (!isValid(data)) {
        const paramNames = data.path
            .getParamParts()
            .map(p => p.name);
        throw new Error(`You must call .setParam() on the route declaration for params ${paramNames.join(",")}`);
    }
}