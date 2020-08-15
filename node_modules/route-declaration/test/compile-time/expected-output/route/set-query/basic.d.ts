import * as rd from "../../../../../dist";
export declare const route: rd.Route<{
    readonly method: "GET";
    readonly path: rd.Path<never>;
    readonly param: undefined;
    readonly query: import("type-mapping").FluentMapper<import("type-mapping").Mapper<unknown, {
        startDateTime: Date;
    }> & import("type-mapping").ExpectedInput<{
        startDateTime: Date;
    }> & import("type-mapping").MappableInput<{
        startDateTime: string | Date;
    }>>;
    readonly body: undefined;
    readonly header: undefined;
    readonly response: undefined;
}>;
