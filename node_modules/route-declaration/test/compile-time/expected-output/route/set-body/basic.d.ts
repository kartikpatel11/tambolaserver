import * as rd from "../../../../../dist";
export declare const route: rd.Route<{
    readonly method: "PUT";
    readonly path: rd.Path<never>;
    readonly param: undefined;
    readonly query: undefined;
    readonly body: import("type-mapping").FluentMapper<import("type-mapping").Mapper<unknown, {
        alert: string;
    }> & import("type-mapping").ExpectedInput<{
        alert: string;
    }> & import("type-mapping").MappableInput<{
        alert: string;
    }>>;
    readonly header: undefined;
    readonly response: undefined;
}>;
