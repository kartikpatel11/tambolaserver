import * as rd from "../../../../../../../dist";
export declare const route: rd.Route<{
    readonly method: rd.Method.Contextual;
    readonly path: rd.Path<never>;
    readonly param: undefined;
    readonly query: undefined;
    readonly body: undefined;
    readonly header: undefined;
    readonly response: import("type-mapping").FluentMapper<import("type-mapping").Mapper<unknown, {
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
}>;
export declare const client: {
    x: bigint;
    y: bigint | undefined;
    z: bigint | undefined;
};
export declare const serverExpected: {
    x: bigint;
    y: bigint | undefined;
} & {
    z?: bigint | undefined;
};
export declare const serverMappable: {
    x: string | number | bigint;
    y: string | number | bigint | undefined;
} & {
    z?: string | number | bigint | undefined;
};
