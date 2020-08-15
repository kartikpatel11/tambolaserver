import {RouteData, Method} from "../route";

export type MethodOf<DataT extends RouteData> = (
    Method.Contextual extends DataT["method"] ?
    (
        undefined extends DataT["body"] ?
        Method.GET :
        Method.POST
    ) :
    DataT["method"]
);
export function getMethod<DataT extends RouteData> (data : DataT) : MethodOf<DataT> {
    if (data.method == Method.Contextual) {
        if (data.body == undefined) {
            return Method.GET as any;
        } else {
            return Method.POST as any;
        }
    } else {
        return data.method as any;
    }
}