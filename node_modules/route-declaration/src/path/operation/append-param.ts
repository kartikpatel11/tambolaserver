import {Path, ParamPart} from "../path";
import {ParamNameOf} from "../query";

export type AppendParam<
    PathT extends Path<string>,
    NameT extends string
> = (
    Path<ParamNameOf<PathT>|NameT>
);

/**
    regex, if provided, ignores modifiers like `g` and `i`
*/
export function appendParam<PathT extends Path<string>, NameT extends string> (
    path : PathT,
    name : NameT,
    regex? : RegExp
) : AppendParam<PathT, NameT> {
    if (name.indexOf(":") >= 0) {
        throw new Error(`":" not allowed in param, ${name}`);
    }
    if (name.indexOf("/") >= 0) {
        throw new Error(`"/" not allowed in param, ${name}`);
    }
    let newRouterPath = path.routerPath + "/:" + name;
    if (regex != undefined) {
        newRouterPath += `(${regex.source})`;
    }
    const newParamPart : ParamPart<NameT> = {
        name  : name,
        regex : regex,
    };
    return new Path<ParamNameOf<PathT>|NameT>(
        [...path.parts, newParamPart] as any,
        newRouterPath
    );
}