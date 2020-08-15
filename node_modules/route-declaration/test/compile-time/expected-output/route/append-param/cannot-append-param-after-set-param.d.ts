import * as rd from "../../../../../dist";
export declare const route_0: rd.Route<{
    readonly method: rd.Method.Contextual;
    readonly path: rd.Path<"userId" | "journalId" | "pageId">;
    readonly param: import("type-mapping").FluentMapper<import("type-mapping").Mapper<unknown, {
        userId: bigint;
        journalId: string;
        pageId: bigint;
    }> & import("type-mapping").ExpectedInput<{
        userId: bigint;
        journalId: string;
        pageId: bigint;
    }> & import("type-mapping").MappableInput<{
        userId: string | number | bigint;
        journalId: string;
        pageId: string | number | bigint;
    }>>;
    readonly query: undefined;
    readonly body: undefined;
    readonly header: undefined;
    readonly response: undefined;
}>;
export declare const route_1: rd.Route<{
    readonly method: rd.Method.Contextual;
    readonly path: rd.Path<"userId" | "journalId" | "pageId" | "worksNow">;
    readonly param: import("type-mapping").FluentMapper<import("type-mapping").Mapper<unknown, {
        userId: bigint;
        journalId: string;
        pageId: bigint;
        worksNow: {
            [k: string]: unknown;
        };
    }> & import("type-mapping").ExpectedInput<{
        userId: bigint;
        journalId: string;
        pageId: bigint;
        worksNow: {
            [k: string]: unknown;
        };
    }> & import("type-mapping").MappableInput<{
        userId: string | number | bigint;
        journalId: string;
        pageId: string | number | bigint;
        worksNow: string | {
            [k: string]: unknown;
        };
    }>>;
    readonly query: undefined;
    readonly body: undefined;
    readonly header: undefined;
    readonly response: undefined;
}>;
