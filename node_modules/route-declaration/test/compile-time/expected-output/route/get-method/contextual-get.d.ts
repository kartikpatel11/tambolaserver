import * as rd from "../../../../../dist";
export declare const fetchCharge: rd.Route<{
    readonly method: rd.Method.Contextual;
    readonly path: rd.Path<"chargeId">;
    readonly param: import("type-mapping").FluentMapper<import("type-mapping").Mapper<unknown, {
        chargeId: string;
    }> & import("type-mapping").ExpectedInput<{
        chargeId: string;
    }> & import("type-mapping").MappableInput<{
        chargeId: string;
    }>>;
    readonly query: undefined;
    readonly body: undefined;
    readonly header: undefined;
    readonly response: undefined;
}>;
export declare const fetchMethod: rd.Method.GET;
