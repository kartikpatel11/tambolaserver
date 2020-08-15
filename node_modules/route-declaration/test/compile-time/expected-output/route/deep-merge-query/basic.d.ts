import * as rd from "../../../../../dist";
export declare const route_0: rd.Route<{
    readonly method: rd.Method.Contextual;
    readonly path: rd.Path<never>;
    readonly param: undefined;
    readonly query: import("type-mapping").Mapper<unknown, {
        dangerLevel: bigint;
    } & {
        page: bigint | undefined;
    } & {
        rowsPerPage: bigint | undefined;
    }> & import("type-mapping").ExpectedInput<{
        rowsPerPage?: bigint | undefined;
    } & {
        dangerLevel: bigint;
    } & {
        page?: bigint | undefined;
    }> & import("type-mapping").MappableInput<{
        rowsPerPage?: string | number | bigint | undefined;
    } & {
        dangerLevel: string | number | bigint;
    } & {
        page?: string | number | bigint | undefined;
    }>;
    readonly body: undefined;
    readonly header: undefined;
    readonly response: undefined;
}>;
