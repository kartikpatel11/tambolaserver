import * as rd from "../../../../../dist";
export declare const route_0: rd.Route<{
    readonly method: rd.Method.Contextual;
    readonly path: rd.Path<"galaxyId" | "starSystemId" | "celestialBodyId">;
    readonly param: import("type-mapping").FluentMapper<import("type-mapping").Mapper<unknown, {
        galaxyId: bigint;
        starSystemId: number;
        celestialBodyId: bigint;
    }> & import("type-mapping").ExpectedInput<{
        galaxyId: bigint;
        starSystemId: number;
        celestialBodyId: bigint;
    }> & import("type-mapping").MappableInput<{
        galaxyId: string | number | bigint;
        starSystemId: string | number;
        celestialBodyId: string | number | bigint;
    }>>;
    readonly query: undefined;
    readonly body: undefined;
    readonly header: import("type-mapping").FluentMapper<import("type-mapping").Mapper<unknown, {
        "api-key": string;
    }> & import("type-mapping").ExpectedInput<{
        "api-key": string;
    }> & import("type-mapping").MappableInput<{
        "api-key": string;
    }>>;
    readonly response: undefined;
}>;
