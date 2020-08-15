import * as rd from "../../../../../dist";
export declare const createCharge: rd.Route<{
    readonly method: rd.Method.Contextual;
    readonly path: rd.Path<never>;
    readonly param: undefined;
    readonly query: undefined;
    readonly body: import("type-mapping").FluentMapper<import("type-mapping").Mapper<unknown, {
        currency: string;
        amount: number;
        capture: boolean | undefined;
    }> & import("type-mapping").ExpectedInput<{
        currency: string;
        amount: number;
    } & {
        capture?: boolean | undefined;
    }> & import("type-mapping").MappableInput<{
        currency: string;
        amount: number;
    } & {
        capture?: boolean | 0 | 1 | "0" | "1" | "false" | "true" | undefined;
    }>>;
    readonly header: undefined;
    readonly response: undefined;
}>;
export declare const createMethod: rd.Method.POST;
