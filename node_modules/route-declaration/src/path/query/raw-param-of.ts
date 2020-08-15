import {Path} from "../path";
import {ParamNameOf} from "./param-name-of";

export type RawParamOf<PathT extends Path<string>> = (
    { [name in ParamNameOf<PathT>] : string }
);
