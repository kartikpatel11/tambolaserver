import * as rd from "../../../../../dist";
export declare const route_0: rd.Route<{
    readonly method: rd.Method.Contextual;
    readonly path: rd.Path<"galaxyId">;
    readonly param: import("type-mapping").FluentMapper<import("type-mapping").Mapper<unknown, {
        galaxyId: boolean;
    }> & import("type-mapping").ExpectedInput<{
        galaxyId: boolean;
    }> & import("type-mapping").MappableInput<{
        galaxyId: boolean | 0 | 1 | "0" | "1" | "false" | "true";
    }>>;
    readonly query: undefined;
    readonly body: undefined;
    readonly header: undefined;
    readonly response: undefined;
}>;
