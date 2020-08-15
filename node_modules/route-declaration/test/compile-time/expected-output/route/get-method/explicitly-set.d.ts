import * as rd from "../../../../../dist";
export declare const connectSomething: rd.Route<{
    readonly method: "CONNECT";
    readonly path: rd.Path<"x" | "y">;
    readonly param: import("type-mapping").FluentMapper<import("type-mapping").Mapper<unknown, {
        x: bigint;
        y: boolean;
    }> & import("type-mapping").ExpectedInput<{
        x: bigint;
        y: boolean;
    }> & import("type-mapping").MappableInput<{
        x: string | bigint;
        y: string | boolean;
    }>>;
    readonly query: import("type-mapping").Mapper<unknown, {
        page: bigint | undefined;
        rowsPerPage: bigint | undefined;
    } & {
        latest: boolean | undefined;
        startingFrom: Date | undefined;
    }> & import("type-mapping").ExpectedInput<{
        page?: bigint | undefined;
        rowsPerPage?: bigint | undefined;
    } & {
        latest?: boolean | undefined;
        startingFrom?: Date | undefined;
    }> & import("type-mapping").MappableInput<{
        page?: string | number | bigint | undefined;
        rowsPerPage?: string | number | bigint | undefined;
    } & {
        latest?: boolean | 0 | 1 | "0" | "1" | "false" | "true" | undefined;
        startingFrom?: string | Date | undefined;
    }>;
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
    readonly header: import("type-mapping").FluentMapper<import("type-mapping").Mapper<unknown, {
        "Api-Key": string;
    }> & import("type-mapping").ExpectedInput<{
        "Api-Key": string;
    }> & import("type-mapping").MappableInput<{
        "Api-Key": string;
    }>>;
    readonly response: import("type-mapping").FluentMapper<import("type-mapping").Mapper<unknown, {
        fooBarStatus: Date | null;
        optionalField: Buffer | undefined;
        fieldOrUndefined: boolean | undefined;
    }> & import("type-mapping").ExpectedInput<{
        fooBarStatus: Date | null;
        fieldOrUndefined: boolean | undefined;
    } & {
        optionalField?: Buffer | undefined;
    }> & import("type-mapping").MappableInput<{
        fooBarStatus: string | Date | null;
        fieldOrUndefined: boolean | 0 | 1 | "0" | "1" | "false" | "true" | undefined;
    } & {
        optionalField?: Buffer | undefined;
    }>>;
}>;
export declare const someMethod: "CONNECT";
