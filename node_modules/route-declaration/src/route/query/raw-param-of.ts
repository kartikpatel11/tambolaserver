import {RouteData} from "../route";
import {PathUtil} from "../../path";

export type RawParamOf<DataT extends RouteData> = (
    PathUtil.RawParamOf<DataT["path"]>
);