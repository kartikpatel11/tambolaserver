import * as tm from "type-mapping";
import {Path} from "../path";
import {
    SetQuery,
    setQuery,
    SetMethod,
    setMethod,
    Append,
    append,
    AssertCanAppendParam,
    AppendParam,
    appendParam,
    AssertCanSetParam,
    SetParam,
    setParam,
    UnsetParam,
    unsetParam,
    SetBody,
    setBody,
    SetHeader,
    setHeader,
    SetResponse,
    setResponse,
    DeepMergeQuery,
    deepMergeQuery,
    AppendParamField,
    appendParamField,
    AssertValidParamField,
} from "./operation";
import {MethodOf, getMethod} from "./query";
import {
    IsValid,
    isValid,
    assertValid,
} from "./predicate";

/**
    TODO Does the "CONNECT" method make sense?
*/
export enum Method {
    GET     = "GET",
    POST    = "POST",
    PUT     = "PUT",
    DELETE  = "DELETE",
    PATCH   = "PATCH",
    HEAD    = "HEAD",
    OPTIONS = "OPTIONS",
    CONNECT = "CONNECT",
    /**
        If a route's method is "Contextual",
        then it is "GET" if there is no body mapper,
        and "POST" if there is.
    */
    Contextual = "Contextual",
}
export type MethodStr = keyof (typeof Method);

export interface RouteData {
    readonly method : MethodStr,
    readonly path   : Path<string>,

    readonly param : undefined|tm.AnySafeMapper,
    readonly query : undefined|tm.AnySafeMapper,
    readonly body  : undefined|tm.AnySafeMapper,

    readonly header   : undefined|tm.AnySafeMapper,
    readonly response : undefined|tm.AnySafeMapper,
};
export interface DefaultRouteData {
    readonly method : Method.Contextual,
    readonly path   : Path<never>,

    readonly param : undefined,
    readonly query : undefined,
    readonly body  : undefined,

    readonly header   : undefined,
    readonly response : undefined,
}
export class Route<DataT extends RouteData> {
    readonly method : DataT["method"];
    readonly path   : DataT["path"];

    readonly param : DataT["param"];
    readonly query : DataT["query"];
    readonly body  : DataT["body"];

    readonly header   : DataT["header"];
    readonly response : DataT["response"];

    setMethod<MethodT extends MethodStr> (method : MethodT) : SetMethod<DataT, MethodT> {
        return setMethod(this, method);
    }
    getMethod () : MethodOf<this> {
        return getMethod<this>(this);
    }

    constructor (data : DataT) {
        this.method = data.method;
        this.path  = data.path;

        this.param = data.param;
        this.query = data.query;
        this.body  = data.body;

        this.header   = data.header;
        this.response = data.response;
    }

    static Create () : Route<DefaultRouteData> {
        return new Route<DefaultRouteData>({
            method : Method.Contextual,
            path : Path.Create(),

            param : undefined,
            query : undefined,
            body  : undefined,

            header   : undefined,
            response : undefined,
        });
    }

    append (part : string) : Append<DataT> {
        return append(this, part);
    }
    appendParam<NameT extends string> (
        this : AssertCanAppendParam<this>,
        name : NameT,
        regex? : RegExp
    ) : AppendParam<DataT, NameT>;
    appendParam<FieldT extends tm.AnyField> (
        this : this,
        field : AssertValidParamField<FieldT>,
        regex? : RegExp
    ) : AppendParamField<DataT, FieldT>;
    appendParam (
        nameOrField : string|tm.AnyField,
        regex? : RegExp
    ) {
        if (typeof nameOrField == "string") {
            return appendParam(this as AssertCanAppendParam<this>, nameOrField, regex);
        } else {
            return appendParamField(this, nameOrField, regex);
        }
    }
    setParam<F extends tm.AnySafeMapper> (
        f : AssertCanSetParam<DataT, F>,
    ) : SetParam<DataT, F> {
        return setParam(this, f as any);
    }
    unsetParam () : UnsetParam<DataT> {
        return unsetParam(this);
    }
    /**
        Your query mapper should handle the following types,
        `string|(string[])|undefined`
    */
    setQuery<F extends tm.AnySafeMapper> (f : F) : SetQuery<DataT, F> {
        return setQuery(this, f);
    }
    setBody<F extends tm.AnySafeMapper> (f : F) : SetBody<DataT, F> {
        return setBody(this, f);
    }
    /**
        Your header mapper should handle the following types,
        `string|(string[])|undefined`

        Your header key will probably be lowercased.
    */
    setHeader<F extends tm.AnySafeMapper> (f : F) : SetHeader<DataT, F> {
        return setHeader(this, f);
    }
    setResponse<F extends tm.AnySafeMapper> (f : F) : SetResponse<DataT, F> {
        return setResponse(this, f);
    }

    deepMergeQuery<F extends tm.AnySafeMapper> (f : F) : DeepMergeQuery<this, F> {
        return deepMergeQuery<this, F>(this, f);
    }

    isValid () : IsValid<this> {
        return isValid(this);
    }
    assertValid () : void {
        assertValid(this);
    }
}
/**
    Synonym for `Route.Create()`
*/
export function route () {
    return Route.Create();
}