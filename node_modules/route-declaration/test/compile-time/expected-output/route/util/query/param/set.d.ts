import * as rd from "../../../../../../../dist";
export declare const route: rd.Route<{
    readonly method: rd.Method.Contextual;
    readonly path: rd.Path<"x" | "y" | "z">;
    readonly param: import("type-mapping").FluentMapper<import("type-mapping").Mapper<unknown, {
        x: bigint;
        y: bigint | undefined;
        z: bigint | undefined;
    }> & import("type-mapping").ExpectedInput<{
        x: bigint;
        y: bigint | undefined;
    } & {
        z?: bigint | undefined;
    }> & import("type-mapping").MappableInput<{
        x: string | number | bigint;
        y: string | number | bigint | undefined;
    } & {
        z?: string | number | bigint | undefined;
    }>>;
    readonly query: undefined;
    readonly body: undefined;
    readonly header: undefined;
    readonly response: undefined;
}>;
export declare const server: {
    x: bigint;
    y: bigint | undefined;
    z: bigint | undefined;
};
export declare const clientExpected: {
    x: bigint;
    y: bigint | undefined;
} & {
    z?: bigint | undefined;
};
export declare const clientMappable: {
    x: string | number | bigint;
    y: string | number | bigint | undefined;
} & {
    z?: string | number | bigint | undefined;
};
