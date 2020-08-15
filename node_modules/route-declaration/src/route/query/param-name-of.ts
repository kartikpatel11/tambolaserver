import {RouteData} from "../route";
import {PathUtil} from "../../path";

export type ParamNameOf<DataT extends RouteData> = (
    PathUtil.ParamNameOf<DataT["path"]>
);