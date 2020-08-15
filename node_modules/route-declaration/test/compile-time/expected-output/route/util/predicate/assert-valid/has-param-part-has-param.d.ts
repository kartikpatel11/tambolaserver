import * as tm from "type-mapping";
import * as rd from "../../../../../../../dist";
export declare const route: rd.Route<{
    readonly method: rd.Method.Contextual;
    readonly path: rd.Path<"articleId">;
    readonly param: tm.Mapper<unknown, {
        articleId: string;
    }> & tm.ExpectedInput<{
        articleId: string;
    }> & tm.MappableInput<{
        articleId: string;
    }>;
    readonly query: undefined;
    readonly body: undefined;
    readonly header: undefined;
    readonly response: undefined;
}>;
export declare const isValid: rd.Route<{
    readonly method: rd.Method.Contextual;
    readonly path: rd.Path<"articleId">;
    readonly param: tm.Mapper<unknown, {
        articleId: string;
    }> & tm.ExpectedInput<{
        articleId: string;
    }> & tm.MappableInput<{
        articleId: string;
    }>;
    readonly query: undefined;
    readonly body: undefined;
    readonly header: undefined;
    readonly response: undefined;
}>;
