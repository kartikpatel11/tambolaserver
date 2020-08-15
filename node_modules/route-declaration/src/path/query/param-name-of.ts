import {Path} from "../path";

export type ParamNameOf<PathT extends Path<string>> = (
    PathT extends Path<infer PathNameT> ?
    PathNameT :
    never
);