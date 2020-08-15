import * as rd from "../../../../../dist";
export declare const createCharge: rd.Route<{
    readonly method: "POST";
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
export declare const fetchCharge: rd.Route<{
    readonly method: "GET";
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
export declare const updateUser: rd.Route<{
    readonly method: "PUT";
    readonly path: rd.Path<"userId">;
    readonly param: import("type-mapping").FluentMapper<import("type-mapping").Mapper<unknown, {
        userId: bigint;
    }> & import("type-mapping").ExpectedInput<{
        userId: bigint;
    }> & import("type-mapping").MappableInput<{
        userId: string | number | bigint;
    }>>;
    readonly query: undefined;
    readonly body: undefined;
    readonly header: undefined;
    readonly response: undefined;
}>;
